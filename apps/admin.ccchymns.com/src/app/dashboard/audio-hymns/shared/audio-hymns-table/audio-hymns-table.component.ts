import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SubSink } from 'subsink';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslocoModule } from '@ngneat/transloco';
import { AudioPlayerComponent, CCCIconDirective } from '@ccchymns.com/ui';
import {
  IAudioHymnsUIState,
  DisplayService,
  RootLanguageResourceKey,
  Size,
  IEditorsAudioHymn,
  Route,
} from '@ccchymns.com/common';
import { COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE } from '../data';
import { AudioHymnsDataSource } from '../datasource/audio-hymns-datasource';
import { SortOrder, TABLE_PAGE_SIZE } from '../../../shared';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { TuiDialogService } from '@taiga-ui/core';
import { UpdateAudioHymnDialogComponent } from '../update-audio-hymn-dialog/update-audio-hymn-dialog.component';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { StorageService } from '../../../storage.service';
import {
  StoragePath,
  genericRetryStrategy,
} from 'apps/admin.ccchymns.com/src/core';
import { getAudioLanguagePath } from '../utils/audio-language-path';
import { Router } from '@angular/router';
import { FileUtil, NotificationBuilder, Shield } from '@ccchymns.com/core';
import { AudioHymnsDataService } from '../../audio-hymns.data.service';
import { from, retryWhen } from 'rxjs';
import { StorageErrorCode } from '@angular/fire/storage';

@Component({
  selector: 'app-audio-hymns-table',
  standalone: true,
  exportAs: 'audioHymnsTable',
  imports: [
    CdkTableModule,
    TranslocoModule,
    NgMaterialButtonModule,
    CCCIconDirective,
    NgMatTooltipModule,
    AudioPlayerComponent,
  ],
  templateUrl: './audio-hymns-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioHymnsTableComponent implements OnChanges {
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  pagination = Array(0);
  private subscriptions = new SubSink();
  displayIsDesktop = false;

  @Input({ required: true }) data?: IAudioHymnsUIState[] | null;
  @Input() filterBy: string | undefined;
  columnNames: string[] = COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE;
  dataSource = new AudioHymnsDataSource([]);

  constructor(
    private displayService: DisplayService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private storageService: StorageService,
    private audioHymnsDataService: AudioHymnsDataService,
    private router: Router
  ) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  deleteAudioHymn(no: number) {
    const fileNameWithExt = no + '.' + FileUtil.EXTENSION.MP3;
    const storagePath = [
      StoragePath.AUDIO,
      getAudioLanguagePath(this.router),
      fileNameWithExt,
    ];
    const responsiveSvgSize = this.displayService.percentage * 60;
    const responsiveFontSize = this.displayService.percentage * 16;
    Shield.pulse(
      responsiveFontSize,
      responsiveSvgSize,
      `Deleting audio hymn ${no}, please wait.`
    );
    this.storageService
      .deleteFileFrom(storagePath)
      .then(() => {
        this.removeAudioRecord(no);
      })
      .catch((error) => {
        if (error.code.endsWith(StorageErrorCode.OBJECT_NOT_FOUND)) {
          this.removeAudioRecord(no);
        } else {
          Shield.remove();
          this.showAudioHymnDeleteErrorNotification(error, no);
        }
      });
  }

  removeAudioRecord(no: number) {
    this.subscriptions.sink = from(this.removeTheDeletedAudioHymnRecord(no))
      .pipe(retryWhen(genericRetryStrategy()))
      .subscribe({
        next: () => {
          Shield.remove();
          new NotificationBuilder()
            .build()
            .success(`Audio hymn ${no} was deleted successfully`);
        },
        error: (error) => {
          Shield.remove();
          this.showAudioHymnDeleteErrorNotification(error, no);
        },
      });
  }

  showAudioHymnDeleteErrorNotification(error: any, no: number) {
    new NotificationBuilder().build()
      .error(`Unable to delete audio hymn ${no} at the moment, try again later.
      Error: ${error}
    `);
  }
  removeTheDeletedAudioHymnRecord(no: number) {
    const data: IEditorsAudioHymn = {
      no: no,
    };
    const basePath = `/${Route.AUDIO_HYMNS}`;
    if (this.router.isActive(`${basePath}/${Route.YORUBA}`, true)) {
      data.yoruba = null;
    }

    if (this.router.isActive(`${basePath}/${Route.ENGLISH}`, true)) {
      data.english = null;
    }

    if (this.router.isActive(`${basePath}/${Route.FRENCH}`, true)) {
      data.french = null;
    }

    if (this.router.isActive(`${basePath}/${Route.EGUN}`, true)) {
      data.egun = null;
    }

    return this.audioHymnsDataService.updateAudioHymnRecord(data);
  }

  updateAudioHymn(no: number) {
    this.subscriptions.sink = this.dialogs
      .open<number>(
        new PolymorpheusComponent(
          UpdateAudioHymnDialogComponent,
          this.injector
        ),
        {
          data: no,
          dismissible: true,
          appearance: 'bg-light',
        }
      )
      .subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.dataSource = new AudioHymnsDataSource(this.data);
      const paginationLength = this.data.length / TABLE_PAGE_SIZE;
      this.pagination = Array(
        paginationLength < 1 ? 0 : Math.ceil(paginationLength)
      );
    }
    this.filterTableData(this.filterBy);
  }

  isEndOfPagination() {
    return this.dataSource.isEndOfPagination();
  }

  getIsDeviceDisplayDesktopAsync() {
    this.subscriptions.sink = this.displayService.size$.subscribe(
      (displaySize) => {
        this.displayIsDesktop = displaySize === Size.Large;
      }
    );
  }

  getCurrentPaginationIndex() {
    return this.dataSource.getCurrentPaginationIndex();
  }

  trackByFn(index: number, item: any): any {
    return item.no;
  }

  sortDataBy(sortBy: string, order: SortOrder) {
    this.dataSource.sortDataBy(sortBy, order);
  }

  filterTableData(filterBy?: string) {
    this.dataSource.filterTableData(filterBy);
  }

  nextPage() {
    this.dataSource.nextPage();
  }

  goToPage(pageIndex: number) {
    this.dataSource.goToPage(pageIndex);
  }

  previousPage() {
    this.dataSource.previousPage();
  }
}

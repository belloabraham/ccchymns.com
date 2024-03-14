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
} from '@ccchymns.com/common';
import { SortOrder, TABLE_PAGE_SIZE } from '../../../shared';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { AudioSpaceDataSource } from '../datasource/audio-space-datasource';
import { COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE } from '../data';
import {
  StoragePath,
  genericRetryStrategy,
} from 'apps/admin.ccchymns.com/src/core';
import { FileUtil, NotificationBuilder, Shield } from '@ccchymns.com/core';
import { TuiDialogService } from '@taiga-ui/core';
import { StorageService } from '../../../storage.service';
import { AudioSpaceDataService } from '../../audio-space.data.service';
import { StorageErrorCode } from '@angular/fire/storage';
import { from, retryWhen } from 'rxjs';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { UpdateAudioSpaceDialogComponent } from '../update-audio-space-dialog/update-audio-space-dialog.component';

@Component({
  selector: 'app-audio-space-table',
  standalone: true,
  exportAs: 'audioSpaceTable',
  imports: [
    CdkTableModule,
    TranslocoModule,
    NgMaterialButtonModule,
    CCCIconDirective,
    NgMatTooltipModule,
    AudioPlayerComponent,
  ],
  templateUrl: './audio-space-table.component.html',
  styleUrl: './audio-space-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioSpaceTableComponent implements OnChanges {
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  pagination = Array(0);
  private subscriptions = new SubSink();
  displayIsDesktop = false;

  @Input({ required: true }) data?: IAudioHymnsUIState[] | null;
  @Input() filterBy: string | undefined;
  columnNames: string[] = COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE;
  dataSource = new AudioSpaceDataSource([]);

  constructor(
    private displayService: DisplayService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private storageService: StorageService,
    private audioSpaceDataService: AudioSpaceDataService
  ) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  deleteAudioSpace(no: number) {
    const fileNameWithExt = no + '.' + FileUtil.EXTENSION.MP3;
    const storagePath = [
      StoragePath.AUDIO_SPACE,
      StoragePath.ENGLISH,
      fileNameWithExt,
    ];
    const responsiveSvgSize = this.displayService.percentage * 60;
    const responsiveFontSize = this.displayService.percentage * 16;
    Shield.pulse(
      responsiveFontSize,
      responsiveSvgSize,
      `Deleting the audio space for hymn ${no}, please wait.`
    );
    this.storageService
      .deleteFileFrom(storagePath)
      .then(() => {
        this.removeAudioSpaceRecord(no);
      })
      .catch((error) => {
        if (error.code.endsWith(StorageErrorCode.OBJECT_NOT_FOUND)) {
          this.removeAudioSpaceRecord(no);
        } else {
          Shield.remove();
          this.showAudioSpaceDeleteErrorNotification(error, no);
        }
      });
  }

  removeAudioSpaceRecord(no: number) {
    this.subscriptions.sink = from(this.removeTheDeletedAudioSpaceRecord(no))
      .pipe(retryWhen(genericRetryStrategy()))
      .subscribe({
        next: () => {
          Shield.remove();
          new NotificationBuilder()
            .build()
            .success(`Audio space for hymn ${no} was deleted successfully`);
        },
        error: (error) => {
          Shield.remove();
          this.showAudioSpaceDeleteErrorNotification(error, no);
        },
      });
  }

  removeTheDeletedAudioSpaceRecord(no: number) {
    return this.audioSpaceDataService.deleteAudioSpace(no);
  }

  showAudioSpaceDeleteErrorNotification(error: any, no: number) {
    new NotificationBuilder().build()
      .error(`Unable to delete audio space for hymn ${no} at the moment, try again later.
      Error: ${error.message}
    `);
  }

  updateAudioSpace(no: number) {
    this.subscriptions.sink = this.dialogs
      .open<number>(
        new PolymorpheusComponent(
          UpdateAudioSpaceDialogComponent,
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
    if (!this.filterBy && this.data) {
      this.dataSource.set(this.data);
      const paginationLength = this.data.length / TABLE_PAGE_SIZE;
      this.pagination = Array(
        paginationLength < 1 ? 0 : Math.ceil(paginationLength)
      );
    }
    if (this.filterBy) {
      this.filterTableData(this.filterBy);
    }
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

  filterTableData(filterBy: string) {
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

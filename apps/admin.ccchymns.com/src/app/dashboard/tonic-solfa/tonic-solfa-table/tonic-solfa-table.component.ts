import { CdkTableModule } from '@angular/cdk/table';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';
import { SubSink } from 'subsink';
import {
  DisplayService,
  ITonicSolfaUIState,
  RootLanguageResourceKey,
  Size,
} from '@ccchymns.com/common';
import { COLUMN_NAMES_FOR_TONIC_SOLFA_TABLE } from '../data';
import { TonicSolfaDataSource } from '../datasource/tonic-solfa-datasource';
import { SortOrder, TABLE_PAGE_SIZE } from '../../shared';
import { FileUtil, NotificationBuilder, Shield } from '@ccchymns.com/core';
import {
  StoragePath,
  genericRetryStrategy,
} from 'apps/admin.ccchymns.com/src/core';
import { TuiDialogService } from '@taiga-ui/core';
import { StorageService } from '../../storage.service';
import { StorageErrorCode } from '@angular/fire/storage';
import { from, retryWhen } from 'rxjs';
import { TonicSolfaDataService } from '../tonic-solfa.data.service';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { UpdateTonicSolfaDialogComponent } from '../update-tonic-solfa-dialog/update-tonic-solfa-dialog.component';

@Component({
  selector: 'app-tonic-solfa-table',
  standalone: true,
  exportAs: 'tonicSolfaTable',
  imports: [
    CdkTableModule,
    TranslocoModule,
    NgMaterialButtonModule,
    CCCIconDirective,
    NgMatTooltipModule,
  ],
  templateUrl: './tonic-solfa-table.component.html',
  styleUrl: './tonic-solfa-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TonicSolfaTableComponent implements OnChanges {
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  pagination = Array(0);
  private subscriptions = new SubSink();
  displayIsDesktop = false;

  @Input({ required: true }) data?: ITonicSolfaUIState[] | null;
  @Input() filterBy: string | undefined;
  columnNames: string[] = COLUMN_NAMES_FOR_TONIC_SOLFA_TABLE;
  dataSource = new TonicSolfaDataSource([]);

  constructor(
    private displayService: DisplayService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private storageService: StorageService,
    private tonicSolfaDataService: TonicSolfaDataService
  ) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  deleteTonicSolfa(no: number) {
    const fileNameWithExt = no + '.' + FileUtil.EXTENSION.PDF;
    const storagePath = [StoragePath.TONIC_SOILFA, fileNameWithExt];
    const responsiveSvgSize = this.displayService.percentage * 60;
    const responsiveFontSize = this.displayService.percentage * 16;
    Shield.pulse(
      responsiveFontSize,
      responsiveSvgSize,
      `Deleting Tonic Solfa for hymn ${no}, please wait.`
    );

    this.storageService
      .deleteFileFrom(storagePath)
      .then(() => {
        this.removeTonicSolfaRecord(no);
      })
      .catch((error) => {
        if (error.code.endsWith(StorageErrorCode.OBJECT_NOT_FOUND)) {
          this.removeTonicSolfaRecord(no);
        } else {
          Shield.remove();
          this.showAudioHymnDeleteErrorNotification(error, no);
        }
      });
  }

  updateTonicSolfa(no: number) {
    this.subscriptions.sink = this.dialogs
      .open<number>(
        new PolymorpheusComponent(
          UpdateTonicSolfaDialogComponent,
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

  deletedTonicSolfaRecord(no: number) {
    return this.tonicSolfaDataService.deleteTonicSolfa(no);
  }

  removeTonicSolfaRecord(no: number) {
    this.subscriptions.sink = from(this.deletedTonicSolfaRecord(no))
      .pipe(retryWhen(genericRetryStrategy()))
      .subscribe({
        next: () => {
          Shield.remove();
          new NotificationBuilder()
            .build()
            .success(`Tonic solfa for hymn ${no} was deleted successfully`);
        },
        error: (error) => {
          Shield.remove();
          this.showAudioHymnDeleteErrorNotification(error, no);
        },
      });
  }

  showAudioHymnDeleteErrorNotification(error: any, no: number) {
    new NotificationBuilder().build()
      .error(`Unable to delete tonic solfa for hymn ${no} at the moment, try again later.
      Error: ${error.message}
    `);
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

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslocoModule } from '@ngneat/transloco';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import {
  DisplayService,
  IAllHymnsUIState,
  IEditorsHymn,
  RootLanguageResourceKey,
  Size,
} from '@ccchymns.com/common';
import { SortOrder, TABLE_PAGE_SIZE } from '../../shared';
import { SubSink } from 'subsink';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { AllHymnsDataSource } from '../datasource/all-hymns-datasource';
import { COLUMN_NAMES_FOR_ALL_HYMNS_TABLE } from '../data';
import { AllHymnsDataService } from '../all-hymns.data.service';
import { NotificationBuilder } from '@ccchymns.com/core';

@Component({
  selector: 'app-all-hymns-table',
  standalone: true,
  exportAs: 'allHymnsTable',
  imports: [
    CdkTableModule,
    TranslocoModule,
    NgMaterialButtonModule,
    CCCIconDirective,
    NgMatTooltipModule,
  ],
  templateUrl: './all-hymns-table.component.html',
  styleUrl: './all-hymns-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHymnsTableComponent implements OnChanges {
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;

  pagination = Array(0);
  private subscriptions = new SubSink();
  displayIsDesktop = false;

  columnNames: string[] = COLUMN_NAMES_FOR_ALL_HYMNS_TABLE;

  @Input({ required: true }) data?: IAllHymnsUIState[] | null;
  @Input() filterBy: string | undefined;
  dataSource = new AllHymnsDataSource([]);

  constructor(
    private displayService: DisplayService,
    private allHymnsDataService: AllHymnsDataService
  ) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  async onPaidChanged(e: Event | null, no: number) {
    const checkBox = e?.target as HTMLInputElement;
    const newLyricPaidStatus: IEditorsHymn = {
      no: no,
      paid: checkBox.checked,
      published: false,
    };

    const additionalMessage = checkBox.checked
      ? `Hymn ${no} is paid,`
      : `Hymn ${no} is free,`;
    try {
      await this.allHymnsDataService.updateHymnLyricsPaidStatus(
        newLyricPaidStatus
      );
      new NotificationBuilder()
        .showBackOverlay(false)
        .build()
        .success(additionalMessage + ' paid status updated successfully');
    } catch (error) {
      checkBox.checked = !checkBox.checked;
      new NotificationBuilder()
        .build()
        .error(
          `Unable to update Hymn ${no} paid status at the moment, try again later.`
        );
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.dataSource.set(this.data);
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

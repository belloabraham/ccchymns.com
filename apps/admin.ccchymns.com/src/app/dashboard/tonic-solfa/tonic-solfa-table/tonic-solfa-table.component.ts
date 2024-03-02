import { CdkTableModule } from '@angular/cdk/table';
import {
  ChangeDetectionStrategy,
  Component,
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

  constructor(private displayService: DisplayService) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.dataSource = new TonicSolfaDataSource(this.data);
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

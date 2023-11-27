import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslocoModule } from '@ngneat/transloco';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { DisplayService, Size } from '@ccchymns.com/common';
import { SortOrder } from '../../shared';
import { SubSink } from 'subsink';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';
import { LanguageResourceKey } from '../i18n/language-resource-key';

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
export class AllHymnsTableComponent implements OnChanges, OnInit {
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  pagination = Array(0);
  private subscriptions = new SubSink();
  displayIsDesktop = false;

  @Input({ required: true }) data: HymnLyricsUIState[] = [];
  @Input() filterBy: string | undefined;
  columnNames: string[] = COLUMN_NAMES_FOR_LYRICS_TABLE;
  dataSource = new HymnLyricsDataSource([]);

  constructor(private displayService: DisplayService) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  ngOnInit(): void {
    this.dataSource = new HymnLyricsDataSource(this.data);
    const paginationLength = this.data.length / TABLE_PAGE_SIZE;
    this.pagination = Array(
      paginationLength < 1 ? 0 : Math.round(paginationLength)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
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
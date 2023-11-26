import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslocoModule } from '@ngneat/transloco';
import { BibleReferenceUIState, DisplayService, Size } from '@ccchymns.com/common';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { SubSink } from 'subsink';
import { COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE } from '../data';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { TABLE_PAGE_SIZE } from '../../../shared';
import { BibleReferenceDataSource } from '../datasource/bible-reference-datasource';

@Component({
  selector: 'app-bible-references-table',
  standalone: true,
  exportAs: 'bibleReferenceTable',
  imports: [
    CdkTableModule,
    TranslocoModule,
    NgMaterialButtonModule,
    CCCIconDirective,
    NgMatTooltipModule,
  ],
  templateUrl: './bible-references-table.component.html',
  styleUrl: './bible-references-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleReferencesTableComponent implements OnChanges, OnInit {
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  pagination = Array(0);
  private subscriptions = new SubSink();
  displayIsDesktop = false;

  @Input({ required: true }) data: BibleReferenceUIState[] = [];
  @Input() filterBy: string | undefined;
  columnNames: string[] = COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE;
  dataSource = new BibleReferenceDataSource([]);

  constructor(private displayService: DisplayService) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  ngOnInit(): void {
    this.dataSource = new BibleReferenceDataSource(this.data);
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
    return item.reference;
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

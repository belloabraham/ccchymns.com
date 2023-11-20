import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslocoModule } from '@ngneat/transloco';
import { DisplayService, HymnLyricsUIState, Size } from '@ccchymns.com/common';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { CommonModule } from '@angular/common';
import { PAGE_SIZE, SortOrder } from '../../../shared';
import { SubSink } from 'subsink';
import { HymnLyricsDataSource } from '../datasource/lyrics-datasource';
import { COLUMN_NAMES_FOR_LYRICS_TABLE } from '../data';

@Component({
  selector: 'app-lyrics-table',
  standalone: true,
  exportAs: 'lyricsTable',
  imports: [
    CdkTableModule,
    TranslocoModule,
    NgMaterialButtonModule,
    CCCIconDirective,
    NgMatTooltipModule,
    CommonModule,
  ],
  templateUrl: './lyrics-table.component.html',
  styleUrl: './lyrics-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsTableComponent implements OnChanges, OnInit {
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  pagination = Array(0);
  private subscriptions = new SubSink();
  isDesktop = false;

  @Input({ required: true }) data: HymnLyricsUIState[] = [];
  @Input() filterBy: string | undefined;
  columnNames: string[] = COLUMN_NAMES_FOR_LYRICS_TABLE;
  dataSource = new HymnLyricsDataSource(this.data);

  constructor(private displayService: DisplayService) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  ngOnInit(): void {
    this.dataSource = new HymnLyricsDataSource(this.data);
    this.pagination = Array(this.data.length / PAGE_SIZE);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filterTableData(this.filterBy);
  }

  endOfPage() {
    return this.dataSource.endOfPage();
  }

  getIsDeviceDisplayDesktopAsync() {
    this.subscriptions.sink = this.displayService.size$.subscribe(
      (displaySize) => {
        this.isDesktop = displaySize === Size.Large;
      }
    );
  }

  getCurrentPageIndex() {
    return this.dataSource.getCurrentPageIndex();
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

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { TranslocoModule } from '@ngneat/transloco';
import { HymnLyricsUIState } from '@ccchymns.com/common';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { or } from '@angular/fire/firestore';

const hymnLyricsUIState: HymnLyricsUIState = {
  no: 0,
  hymn: '',
};
export const COLUMN_NAMES = [...Object.keys(hymnLyricsUIState), 'tools'];
export class HymnLyricsDataSource extends DataSource<HymnLyricsUIState> {
  private data$!: BehaviorSubject<HymnLyricsUIState[]>;
  private filteredData: HymnLyricsUIState[] = [];
  private data: HymnLyricsUIState[] = [];

  constructor(data: HymnLyricsUIState[]) {
    super();
    this.data = data;
    this.data$ = new BehaviorSubject<HymnLyricsUIState[]>(this.data);
  }

  connect(): Observable<HymnLyricsUIState[]> {
    return this.data$;
  }

  filterTableData(filterBy?: string): void {
    if (filterBy) {
      const filterValue = filterBy.toLowerCase();
      this.filteredData = this.data.filter((item) => {
        const stringToSearch = `${item.no} ${item.hymn.toLowerCase()}`;
        return stringToSearch.includes(filterValue);
      });
      this.data$.next(this.filteredData);
    }

    if (!filterBy) {
      this.filteredData = [];
      this.data$.next(this.data);
    }
  }

  sortDataBy(columnId: string, order: 'asc' | 'desc'): void {
    //Use filteredData if available, otherwise use the original data
    const data = this.filteredData.length
      ? this.filteredData
      : this.data.slice();

    const sortedData = data.sort((firstRow, secondRow) => {
      const firstRowSortByValue = firstRow[columnId];
      const secondRowSortByValue = secondRow[columnId];

      const sortColumnValueIsANumber =
        typeof firstRowSortByValue === 'number' &&
        typeof secondRowSortByValue === 'number';
      if (sortColumnValueIsANumber) {
        return order === 'asc'
          ? firstRowSortByValue - secondRowSortByValue
          : secondRowSortByValue - firstRowSortByValue;
      } else {
        const firstRowStringSortByValue = firstRowSortByValue
          .toString()
          .toLowerCase();
        const secondRowStringSortByValue = secondRowSortByValue
          .toString()
          .toLowerCase();
        return order === 'asc'
          ? firstRowStringSortByValue.localeCompare(secondRowStringSortByValue)
          : secondRowStringSortByValue.localeCompare(firstRowStringSortByValue);
      }
    });

    this.data$.next(sortedData);
  }

  disconnect() {
    this.data$.complete();
  }
}
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

  @Input({ required: true }) data: HymnLyricsUIState[] = [];
  @Input() filterBy: string | undefined;
  @Input({ required: true }) columnNames: string[] = [];
  dataSource = new HymnLyricsDataSource(this.data);

  ngOnInit(): void {
    this.dataSource = new HymnLyricsDataSource(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filterTableData(this.filterBy);
  }

  trackByFn(index: number, item: any): any {
    return item.no;
  }

  sortDataBy(sortBy: string, order: 'asc' | 'desc') {
    this.dataSource.sortDataBy(sortBy, order);
  }

  filterTableData(filterBy?: string) {
    this.dataSource.filterTableData(filterBy);
  }
}

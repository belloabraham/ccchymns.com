import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { Order, PAGE_SIZE, SortOrder } from '../../../shared';
import { HymnLyricsUIState } from '@ccchymns.com/common';

export class HymnLyricsDataSource extends DataSource<HymnLyricsUIState> {
  private data$!: BehaviorSubject<HymnLyricsUIState[]>;
  private filteredData: HymnLyricsUIState[] = [];
  private data: HymnLyricsUIState[] = [];
  private paginatedData: HymnLyricsUIState[] = [];

  private pageSize = PAGE_SIZE; // Number of items per page
  private pageIndex = 0; // Current page index

  constructor(data: HymnLyricsUIState[]) {
    super();
    this.data = data;
    this.data$ = new BehaviorSubject<HymnLyricsUIState[]>([]);
  }

  endOfPage() {
    const totalPageSize = this.data.length;
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    console.error(startIndex);
    console.error(endIndex);
    return startIndex >= totalPageSize || endIndex >= totalPageSize;
  }

  connect(): Observable<HymnLyricsUIState[]> {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.data.slice(startIndex, endIndex);
    this.data$.next(this.paginatedData);
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
      this.data$.next(this.paginatedData);
    }
  }

  getCurrentPageIndex() {
    return this.pageIndex;
  }

  sortDataBy(columnId: string, order: SortOrder): void {
    //Use filteredData if available, otherwise use the original data
    const data = this.paginatedData;

    const sortedData = data.sort((firstRow, secondRow) => {
      const firstRowSortByValue = firstRow[columnId];
      const secondRowSortByValue = secondRow[columnId];

      const sortColumnValueIsANumber =
        typeof firstRowSortByValue === 'number' &&
        typeof secondRowSortByValue === 'number';
      if (sortColumnValueIsANumber) {
        return order === Order.ASC
          ? firstRowSortByValue - secondRowSortByValue
          : secondRowSortByValue - firstRowSortByValue;
      } else {
        const firstRowStringSortByValue = firstRowSortByValue
          .toString()
          .toLowerCase();
        const secondRowStringSortByValue = secondRowSortByValue
          .toString()
          .toLowerCase();
        return order === Order.ASC
          ? firstRowStringSortByValue.localeCompare(secondRowStringSortByValue)
          : secondRowStringSortByValue.localeCompare(firstRowStringSortByValue);
      }
    });

    this.data$.next(sortedData);
  }

  goToPage(pageIndex: number): void {
    // Update the page index and notify subscribers
    this.pageIndex = pageIndex;
    this.paginatedData = this.getDataForCurrentPage(this.pageIndex);
    this.data$.next(this.paginatedData);
  }

  nextPage() {
    this.goToPage(++this.pageIndex);
  }

  previousPage() {
    this.goToPage(--this.pageIndex);
  }

  private getDataForCurrentPage(pageIndex: number): HymnLyricsUIState[] {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    console.error(endIndex);
    return this.data.slice(startIndex, endIndex);
  }

  disconnect() {
    this.data$.complete();
  }
}

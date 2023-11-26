import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { AudioHymnsUIState } from '@ccchymns.com/common';
import { Order, SortOrder, TABLE_PAGE_SIZE } from '../../../shared';

export class AudioHymnsDataSource extends DataSource<AudioHymnsUIState> {
  private data$!: BehaviorSubject<AudioHymnsUIState[]>;
  private filteredData: AudioHymnsUIState[] = [];
  private data: AudioHymnsUIState[] = [];
  private paginatedData: AudioHymnsUIState[] = [];

  private pageSize = TABLE_PAGE_SIZE; // Number of items per page
  private pageIndex = 0; // Current page index

  constructor(data: AudioHymnsUIState[]) {
    super();
    this.data = data;
    this.data$ = new BehaviorSubject<AudioHymnsUIState[]>([]);
  }

  isEndOfPagination() {
    const totalPageSize = this.data.length;
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return startIndex >= totalPageSize || endIndex >= totalPageSize;
  }

  connect(): Observable<AudioHymnsUIState[]> {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.data.slice(startIndex, endIndex);
    this.data$.next(this.paginatedData);
    return this.data$;
  }

  disconnect() {
    this.data$.complete();
  }

  filterTableData(filterBy?: string): void {
    if (filterBy) {
      const filterValue = filterBy.toLowerCase();
      this.filteredData = this.data.filter((item) => {
        const stringToSearch = `${item.no}`;
        return stringToSearch.includes(filterValue);
      });
      this.data$.next(this.filteredData);
    }

    if (!filterBy) {
      this.filteredData = [];
      this.data$.next(this.paginatedData);
    }
  }

  sortDataBy(columnId: string, order: SortOrder): void {
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
    this.pageIndex = pageIndex;
    this.paginatedData = this.getDataForCurrentPage(this.pageIndex);
    this.data$.next(this.paginatedData);
  }

  private getDataForCurrentPage(pageIndex: number): AudioHymnsUIState[] {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  nextPage() {
    this.goToPage(++this.pageIndex);
  }

  previousPage() {
    this.goToPage(--this.pageIndex);
  }

  getCurrentPaginationIndex() {
    return this.pageIndex;
  }
}

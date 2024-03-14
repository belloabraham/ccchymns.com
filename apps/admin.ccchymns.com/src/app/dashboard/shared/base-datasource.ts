import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { Order, TABLE_PAGE_SIZE } from './data';
import { SortOrder } from './types';

export class BaseDataSource<
  T extends Record<string, any>
> extends DataSource<T> {
  data$ = new BehaviorSubject<T[]>([]);
  filteredData: T[] = [];
  data: T[] = [];
  paginatedData: T[] = [];

  pageSize = TABLE_PAGE_SIZE; // Number of items per page
  pageIndex = 0; // Current page index

  constructor(data: T[]) {
    super();
    this.data = data;
    this.data$.next(this.data);
  }

  set(data: T[]) {
    this.data = data;
    this.data$.next(data);
    this.connect();
  }

  filterTableData(filterBy: string): void {
    const filterValue = filterBy.toLowerCase();
    this.filteredData = this.data.filter((item) => {
      const stringToSearch = `${item['no']}`;
      return stringToSearch.includes(filterValue);
    });
    this.data$.next(this.filteredData);
  }

  isEndOfPagination() {
    const totalPageSize = this.data.length;
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return startIndex >= totalPageSize || endIndex >= totalPageSize;
  }

  connect(): Observable<T[]> {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.data.slice(startIndex, endIndex);
    this.data$.next(this.paginatedData);
    return this.data$;
  }

  getCurrentPaginationIndex() {
    return this.pageIndex;
  }

  sortDataBy(columnId: keyof T, order: SortOrder): void {
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
        const firstRowStringSortByValue = firstRowSortByValue!
          .toString()
          .toLowerCase();
        const secondRowStringSortByValue = secondRowSortByValue!
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

  nextPage() {
    this.goToPage(++this.pageIndex);
  }

  previousPage() {
    this.goToPage(--this.pageIndex);
  }

  getDataForCurrentPage(pageIndex: number): T[] {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  disconnect() {
    this.data$.complete();
  }
}

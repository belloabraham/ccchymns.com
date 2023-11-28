import { IBibleReferenceUIState } from "@ccchymns.com/common";
import { BehaviorSubject, Observable } from "rxjs";
import { TABLE_PAGE_SIZE } from "../../../shared";
import { DataSource } from '@angular/cdk/table';


export class BibleReferenceDataSource extends DataSource<IBibleReferenceUIState> {
  private data$!: BehaviorSubject<IBibleReferenceUIState[]>;
  private filteredData: IBibleReferenceUIState[] = [];
  private data: IBibleReferenceUIState[] = [];
  private paginatedData: IBibleReferenceUIState[] = [];

  private pageSize = TABLE_PAGE_SIZE; // Number of items per page
  private pageIndex = 0; // Current page index

  constructor(data: IBibleReferenceUIState[]) {
    super();
    this.data = data;
    this.data$ = new BehaviorSubject<IBibleReferenceUIState[]>([]);
  }

  isEndOfPagination() {
    const totalPageSize = this.data.length;
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return startIndex >= totalPageSize || endIndex >= totalPageSize;
  }

  connect(): Observable<IBibleReferenceUIState[]> {
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
        const stringToSearch = `${item.reference} ${item.verses.toLowerCase()}`;
        return stringToSearch.includes(filterValue);
      });
      this.data$.next(this.filteredData);
    }

    if (!filterBy) {
      this.filteredData = [];
      this.data$.next(this.paginatedData);
    }
  }

  getCurrentPaginationIndex() {
    return this.pageIndex;
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

  private getDataForCurrentPage(pageIndex: number): IBibleReferenceUIState[] {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  disconnect() {
    this.data$.complete();
  }
}


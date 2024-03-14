import { IAllHymns } from '@ccchymns.com/common';
import { BaseDataSource } from '../../shared/base-datasource';

export class AllHymnsDataSource extends BaseDataSource<IAllHymns> {
  constructor(data: IAllHymns[]) {
    super(data);
  }

  override filterTableData(filterBy?: string | undefined): void {
      if (filterBy) {
        const filterValue = filterBy.toLowerCase();
        this.filteredData = this.data.filter((item) => {
          const stringToSearch = `${item.lyric?.no}`;
          return stringToSearch.includes(filterValue);
        });
        this.data$.next(this.filteredData);
      }

      if (!filterBy) {
        this.filteredData = [];
        this.data$.next(this.paginatedData);
      }
  }
}

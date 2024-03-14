import { IAllHymns } from '@ccchymns.com/common';
import { BaseDataSource } from '../../shared/base-datasource';

export class AllHymnsDataSource extends BaseDataSource<IAllHymns> {
  constructor(data: IAllHymns[]) {
    super(data);
  }

  override filterTableData(filterBy: string): void {
    const filterValue = filterBy.toLowerCase();
    this.filteredData = this.data.filter((item) => {
      const stringToSearch = `${item.lyric?.no}`;
      return stringToSearch.includes(filterValue);
    });
    this.data$.next(this.filteredData);
  }
}

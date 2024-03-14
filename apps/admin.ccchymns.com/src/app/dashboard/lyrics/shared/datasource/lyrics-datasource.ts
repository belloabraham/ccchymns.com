import { IHymnLyricsUIState } from '@ccchymns.com/common';
import { BaseDataSource } from '../../../shared/base-datasource';

export class HymnLyricsDataSource extends BaseDataSource<IHymnLyricsUIState> {
  constructor(data: IHymnLyricsUIState[]) {
    super(data);
  }

  override filterTableData(filterBy: string): void {
      const filterValue = filterBy.toLowerCase();
      this.filteredData = this.data.filter((item) => {
        const stringToSearch = `${item.no} ${item.lyrics.toLowerCase()}`;
        return stringToSearch.includes(filterValue);
      });
      this.data$.next(this.filteredData);
    }
}

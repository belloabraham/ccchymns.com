import { IBibleReferenceUIState } from "@ccchymns.com/common";
import { BaseDataSource } from "../../../shared/base-datasource";


export class BibleReferenceDataSource extends BaseDataSource<IBibleReferenceUIState> {

  constructor(data: IBibleReferenceUIState[]) {
    super(data);
  }

   override filterTableData(filterBy: string): void {
      const filterValue = filterBy.toLowerCase();
      this.filteredData = this.data.filter((item) => {
        const stringToSearch = `${item.reference.toLowerCase()} ${item.verses.toLowerCase()}`;
        return stringToSearch.includes(filterValue);
      });
      this.data$.next(this.filteredData);
  }
}


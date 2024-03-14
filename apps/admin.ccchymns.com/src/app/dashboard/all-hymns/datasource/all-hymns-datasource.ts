import { IAllHymns } from '@ccchymns.com/common';
import { BaseDataSource } from '../../shared/base-datasource';

export class AllHymnsDataSource extends BaseDataSource<IAllHymns> {
  constructor(data: IAllHymns[]) {
    super(data);
  }
}

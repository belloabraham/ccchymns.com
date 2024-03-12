import { IAllHymns } from '@ccchymns.com/common';
import { BehaviorSubject } from 'rxjs';
import { BaseDataSource } from '../../shared/base-datasource';

export class AllHymnsDataSource extends BaseDataSource<IAllHymns> {
  constructor(data: IAllHymns[]) {
    super(data);
    this.data = data;
    this.data$ = new BehaviorSubject<IAllHymns[]>([]);
  }
}

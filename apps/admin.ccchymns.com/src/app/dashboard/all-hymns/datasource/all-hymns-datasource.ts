import { IEditorsHymn } from '@ccchymns.com/common';
import { BehaviorSubject } from 'rxjs';
import { BaseDataSource } from '../../shared/base-datasource';

export class AllHymnsDataSource extends BaseDataSource<IEditorsHymn> {

  constructor(data: IEditorsHymn[]) {
    super(data);
    this.data = data;
    this.data$ = new BehaviorSubject<IEditorsHymn[]>([]);
  }
}

import { BaseDataSource } from '../../shared/base-datasource';
import { ITonicSolfaUIState } from '@ccchymns.com/common';


export class TonicSolfaDataSource extends BaseDataSource<ITonicSolfaUIState> {
  constructor(data: ITonicSolfaUIState[]) {
    super(data);
  }
}

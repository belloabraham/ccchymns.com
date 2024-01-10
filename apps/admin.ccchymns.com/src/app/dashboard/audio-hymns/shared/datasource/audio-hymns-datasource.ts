import { IAudioHymnsUIState } from '@ccchymns.com/common';
import { BaseDataSource } from '../../../shared/base-datasource';

export class AudioHymnsDataSource extends BaseDataSource<IAudioHymnsUIState> {

  constructor(data: IAudioHymnsUIState[]) {
    super(data);
  }
}

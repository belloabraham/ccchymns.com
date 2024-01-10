import { IAudioSpaceUIState } from "@ccchymns.com/common";
import { BaseDataSource } from "../../../shared/base-datasource";

export class AudioSpaceDataSource extends BaseDataSource<IAudioSpaceUIState> {

  constructor(data: IAudioSpaceUIState[]) {
    super(data);
  }
}

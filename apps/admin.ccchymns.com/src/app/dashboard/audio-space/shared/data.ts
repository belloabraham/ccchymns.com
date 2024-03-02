import { IAudioSpaceUIState, RootLanguageResourceKey } from "@ccchymns.com/common";
import { DashboardLanguageResourceKey } from "../../i18n/language-resource-key";

const audioHymnsUIState: IAudioSpaceUIState = {
  no: 0,
  url: '',
};
export const COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE = [
  Object.keys(audioHymnsUIState)[0],
  RootLanguageResourceKey.AUDIO_SPACE,
  DashboardLanguageResourceKey.OPTIONS,
];

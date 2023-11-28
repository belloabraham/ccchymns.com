import {
  IAudioHymnsUIState,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';

const audioHymnsUIState: IAudioHymnsUIState = {
  no: 0,
  audio: '',
};
export const COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE = [
  Object.keys(audioHymnsUIState)[0],
  RootLanguageResourceKey.AUDIO_HYMNS,
  DashboardLanguageResourceKey.OPTIONS,
];

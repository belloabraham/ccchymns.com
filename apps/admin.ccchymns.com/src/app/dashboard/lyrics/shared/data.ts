import { HymnLyricsUIState } from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';

const hymnLyricsUIState: HymnLyricsUIState = {
  no: 0,
  hymn: '',
};
export const COLUMN_NAMES_FOR_LYRICS_TABLE = [
  ...Object.keys(hymnLyricsUIState),
  DashboardLanguageResourceKey.OPTIONS
];

import { IHymnLyricsUIState } from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';

const hymnLyricsUIState: IHymnLyricsUIState = {
  no: 0,
  lyrics: '',
};
export const COLUMN_NAMES_FOR_LYRICS_TABLE = [
  ...Object.keys(hymnLyricsUIState),
  DashboardLanguageResourceKey.OPTIONS
];

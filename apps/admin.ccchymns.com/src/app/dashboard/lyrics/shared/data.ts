import { HymnLyricsUIState } from '@ccchymns.com/common';

const hymnLyricsUIState: HymnLyricsUIState = {
  no: 0,
  hymn: '',
};
export const COLUMN_NAMES_FOR_LYRICS_TABLE = [
  ...Object.keys(hymnLyricsUIState),
  'tools',
];

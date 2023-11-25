import { AudioHymnsUIState } from '@ccchymns.com/common';

const audioHymnsUIState: AudioHymnsUIState = {
  no: 0,
  url: '',
};
export const COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE = [
  ...Object.keys(audioHymnsUIState),
  'options',
];

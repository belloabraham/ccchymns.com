import { BibleReferenceUIState } from '@ccchymns.com/common';

const bibleReferenceUIState: BibleReferenceUIState = {
  reference: '',
  verses: '',
};
export const COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE = [
  ...Object.keys(bibleReferenceUIState),
  'options',
];

import { BibleReferenceUIState } from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';

const bibleReferenceUIState: BibleReferenceUIState = {
  reference: '',
  verses: '',
};
export const COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE = [
  ...Object.keys(bibleReferenceUIState),
  DashboardLanguageResourceKey.OPTIONS,
];

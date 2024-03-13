import { IEditorsHymn, RootLanguageResourceKey } from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../i18n/language-resource-key';
import { LanguageResourceKey } from './i18n/language-resource-key';

const editorsHymn: IEditorsHymn = {
  no: 0,
  paid: true,
  published: true,
};
export const COLUMN_NAMES_FOR_ALL_HYMNS_TABLE = [
  Object.keys(editorsHymn)[0],
  RootLanguageResourceKey.LYRICS,
  RootLanguageResourceKey.TONIC_SOLFA,
  RootLanguageResourceKey.AUDIO_HYMNS,
  RootLanguageResourceKey.AUDIO_SPACE,
  LanguageResourceKey.PAID,
  DashboardLanguageResourceKey.PUBLISHED,
];

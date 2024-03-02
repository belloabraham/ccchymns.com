import {
  ITonicSolfaUIState,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../i18n/language-resource-key';

const tonicSolfaUIState: ITonicSolfaUIState = {
  no: 0,
  url: '',
};
export const COLUMN_NAMES_FOR_TONIC_SOLFA_TABLE = [
  Object.keys(tonicSolfaUIState)[0],
  RootLanguageResourceKey.TONIC_SOLFA,
  DashboardLanguageResourceKey.OPTIONS,
];

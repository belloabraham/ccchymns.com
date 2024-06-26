import { createFeature } from '@ngrx/store';
import { getLanguageResourceLoadedReducer } from '../reducers';

export const languageLoadedFeature = createFeature({
  name: 'languageLoadedFeature',
  reducer: getLanguageResourceLoadedReducer(),
});

export function getLanguageLoadedSelector() {
  return languageLoadedFeature.selectLoaded;
}

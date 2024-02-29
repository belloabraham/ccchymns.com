import { createFeature } from '@ngrx/store';
import {
  getEgunBibleReferencesReducer,
  getEnglishBibleReferencesReducer,
  getFrenchBibleReferencesReducer,
  getYorubaBibleReferencesReducer,
} from '../reducers';

export const yorubaBibleReferencesFeature = createFeature({
  name: 'yorubaBibleReferencesFeature',
  reducer: getYorubaBibleReferencesReducer(),
});
export function getYorubaBibleReferencesSelector() {
  return yorubaBibleReferencesFeature.selectBibleReferencesUIState;
}

export const englishBibleReferencesFeature = createFeature({
  name: 'englishBibleReferencesFeature',
  reducer: getEnglishBibleReferencesReducer(),
});
export function getEnglishBibleReferencesSelector() {
  return englishBibleReferencesFeature.selectBibleReferencesUIState;
}

export const frenchBibleReferencesFeature = createFeature({
  name: 'frenchBibleReferencesFeature',
  reducer: getFrenchBibleReferencesReducer(),
});
export function getFrenchBibleReferencesSelector() {
  return frenchBibleReferencesFeature.selectBibleReferencesUIState;
}

export const egunBibleReferencesFeature = createFeature({
  name: 'egunBibleReferencesFeature',
  reducer: getEgunBibleReferencesReducer(),
});
export function getEgunBibleReferencesSelector() {
  return egunBibleReferencesFeature.selectBibleReferencesUIState;
}

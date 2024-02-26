import { createFeature } from '@ngrx/store';
import { getEgunLyricsReducer, getEnglishLyricsReducer, getFrenchLyricsReducer, getYorubaLyricsReducer } from '../reducers';

export const yorubaLyricsFeature = createFeature({
  name: 'yorubaLyricsFeature',
  reducer: getYorubaLyricsReducer(),
});
export function getYorubaLyricsSelector() {
  return yorubaLyricsFeature.selectHymnLyricsUIState;
}

export const englishLyricsFeature = createFeature({
  name: 'englishLyricsFeature',
  reducer: getEnglishLyricsReducer(),
});
export function getEnglishLyricsSelector() {
  return englishLyricsFeature.selectHymnLyricsUIState;
}

export const frenchLyricsFeature = createFeature({
  name: 'frenchLyricsFeature',
  reducer: getFrenchLyricsReducer(),
});
export function getFrenchLyricsSelector() {
  return frenchLyricsFeature.selectHymnLyricsUIState;
}

export const egunLyricsFeature = createFeature({
  name: 'egunLyricsFeature',
  reducer: getEgunLyricsReducer(),
});
export function getEgunLyricsSelector() {
  return egunLyricsFeature.selectHymnLyricsUIState;
}

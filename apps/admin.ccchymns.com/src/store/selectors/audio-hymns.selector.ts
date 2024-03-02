import { createFeature } from '@ngrx/store';
import {
  getEgunAudioHymnsReducer,
  getEnglishAudioHymnsReducer,
  getFrenchAudioHymnsReducer,
  getYorubaAudioHymnsReducer,
} from '../reducers';

export const yorubaAudioHymnsFeature = createFeature({
  name: 'yorubaAudioHymnsFeature',
  reducer: getYorubaAudioHymnsReducer(),
});
export function getYorubaAudioHymnsSelector() {
  return yorubaAudioHymnsFeature.selectAudioHymnsUIState;
}

export const englishAudioHymnsFeature = createFeature({
  name: 'englishAudioHymnsFeature',
  reducer: getEnglishAudioHymnsReducer(),
});
export function getEnglishAudioHymnsSelector() {
  return englishAudioHymnsFeature.selectAudioHymnsUIState;
}

export const frenchAudioHymnsFeature = createFeature({
  name: 'frenchAudioHymnsFeature',
  reducer: getFrenchAudioHymnsReducer(),
});
export function getFrenchAudioHymnsSelector() {
  return frenchAudioHymnsFeature.selectAudioHymnsUIState;
}

export const egunAudioHymnsFeature = createFeature({
  name: 'egunAudioHymnsFeature',
  reducer: getEgunAudioHymnsReducer(),
});
export function getEgunAudioHymnsSelector() {
  return egunAudioHymnsFeature.selectAudioHymnsUIState;
}

import { createFeature } from '@ngrx/store';
import { getEnglishAudioSpaceReducer } from '../reducers/audio-space.reducer';

export const englishAudioSpaceFeature = createFeature({
  name: 'englishAudioSpaceFeature',
  reducer: getEnglishAudioSpaceReducer(),
});
export function getEnglishAudioSpaceSelector() {
  return englishAudioSpaceFeature.selectAudioSpaceUIState;
}

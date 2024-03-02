import { createReducer, on } from '@ngrx/store';
import { AudioSpaceActionState, getAudioSpaceActionGroup } from '../actions';
const reducerInitialState: AudioSpaceActionState = {
  audioSpaceUIState: [],
};

const englishAudioSpaceReducer = createReducer(
  reducerInitialState,
  on(
    getAudioSpaceActionGroup().englishAudioSpaceAction,
    (sameReducerInitialState, englishAudioSpaceActionState) => ({
      ...englishAudioSpaceActionState,
    })
  )
);

export function getEnglishAudioSpaceReducer() {
  return englishAudioSpaceReducer;
}

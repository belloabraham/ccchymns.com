import { createReducer, on } from '@ngrx/store';
import {
  AudioHymnsActionState,
  getAudioHymnsActionGroup,
} from '../actions';
const reducerInitialState: AudioHymnsActionState = {
  audioHymnsUIState: [],
};

const yorubaAudioHymnsReducer = createReducer(
  reducerInitialState,
  on(
    getAudioHymnsActionGroup().yorubaAudioHymnsAction,
    (sameReducerInitialState, yorubaAudioHymnsActionState) => ({
      ...yorubaAudioHymnsActionState,
    })
  )
);

const englishAudioHymnsReducer = createReducer(
  reducerInitialState,
  on(
    getAudioHymnsActionGroup().englishAudioHymnsAction,
    (sameReducerInitialState, englishAudioHymnsActionState) => ({
      ...englishAudioHymnsActionState,
    })
  )
);

const frenchAudioHymnsReducer = createReducer(
  reducerInitialState,
  on(
    getAudioHymnsActionGroup().frenchAudioHymnsAction,
    (sameReducerInitialState, frenchAudioHymnsActionState) => ({
      ...frenchAudioHymnsActionState,
    })
  )
);

const egunAudioHymnsReducer = createReducer(
  reducerInitialState,
  on(
    getAudioHymnsActionGroup().egunAudioHymnsAction,
    (sameReducerInitialState, egunAudioHymnsActionState) => ({
      ...egunAudioHymnsActionState,
    })
  )
);

export function getFrenchAudioHymnsReducer() {
  return frenchAudioHymnsReducer;
}

export function getEnglishAudioHymnsReducer() {
  return englishAudioHymnsReducer;
}

export function getYorubaAudioHymnsReducer() {
  return yorubaAudioHymnsReducer;
}

export function getEgunAudioHymnsReducer() {
  return egunAudioHymnsReducer;
}

import { createReducer, on } from '@ngrx/store';
import { HymnLyricsActionState, getHymnLyricsActionGroup } from '../actions';
const reducerInitialState: HymnLyricsActionState = { hymnLyricsUIState: [] };

const yorubaLyricsReducer = createReducer(
  reducerInitialState,
  on(
    getHymnLyricsActionGroup().yorubaLyricsAction,
    (sameReducerInitialState, yorubaLyricsActionState) => ({
      ...yorubaLyricsActionState,
    })
  )
);

const englishLyricsReducer = createReducer(
  reducerInitialState,
  on(
    getHymnLyricsActionGroup().englishLyricsAction,
    (sameReducerInitialState, englishLyricsActionState) => ({
      ...englishLyricsActionState,
    })
  )
);

const frenchLyricsReducer = createReducer(
  reducerInitialState,
  on(
    getHymnLyricsActionGroup().frenchLyricsAction,
    (sameReducerInitialState, frenchLyricsActionState) => ({
      ...frenchLyricsActionState,
    })
  )
);

const egunLyricsReducer = createReducer(
  reducerInitialState,
  on(
    getHymnLyricsActionGroup().egunLyricsAction,
    (sameReducerInitialState, egunLyricsActionState) => ({
      ...egunLyricsActionState,
    })
  )
);

export function getFrenchLyricsReducer() {
  return frenchLyricsReducer;
}

export function getEnglishLyricsReducer() {
  return englishLyricsReducer;
}

export function getYorubaLyricsReducer() {
  return yorubaLyricsReducer;
}

export function getEgunLyricsReducer() {
  return egunLyricsReducer;
}

import { createReducer, on } from '@ngrx/store';
import { BibleReferencesActionState, getBibleReferencesActionGroup } from '../actions';
const reducerInitialState: BibleReferencesActionState = { bibleReferencesUIState: [] };

const yorubaBibleReferencesReducer = createReducer(
  reducerInitialState,
  on(
    getBibleReferencesActionGroup().yorubaBibleReferencesAction,
    (sameReducerInitialState, yorubaBibleReferencesActionState) => ({
      ...yorubaBibleReferencesActionState,
    })
  )
);

const englishBibleReferencesReducer = createReducer(
  reducerInitialState,
  on(
    getBibleReferencesActionGroup().englishBibleReferencesAction,
    (sameReducerInitialState, englishBibleReferencesActionState) => ({
      ...englishBibleReferencesActionState,
    })
  )
);

const frenchBibleReferencesReducer = createReducer(
  reducerInitialState,
  on(
    getBibleReferencesActionGroup().frenchBibleReferencesAction,
    (sameReducerInitialState, frenchBibleReferencesActionState) => ({
      ...frenchBibleReferencesActionState,
    })
  )
);

const egunBibleReferencesReducer = createReducer(
  reducerInitialState,
  on(
    getBibleReferencesActionGroup().egunBibleReferencesAction,
    (sameReducerInitialState, egunBibleReferencesActionState) => ({
      ...egunBibleReferencesActionState,
    })
  )
);

export function getFrenchBibleReferencesReducer() {
  return frenchBibleReferencesReducer;
}

export function getEnglishBibleReferencesReducer() {
  return englishBibleReferencesReducer;
}

export function getYorubaBibleReferencesReducer() {
  return yorubaBibleReferencesReducer;
}

export function getEgunBibleReferencesReducer() {
  return egunBibleReferencesReducer;
}

import { createReducer, on } from '@ngrx/store';
import {
  LoadLanguageResourceActionState,
  getLoadLanguageResourceActionGroup,
} from '../actions/language-resource.actions';

const reducerInitialState: LoadLanguageResourceActionState = { loaded: false };

const reducer = createReducer(
  reducerInitialState,
  on(
    getLoadLanguageResourceActionGroup().loadLanguageResourceAction,
    (sameReducerInitialState, loadLanguageResourceActionState) => ({
      ...loadLanguageResourceActionState,
    })
  )
);

export function getLanguageResourceLoadedReducer() {
  return reducer;
}

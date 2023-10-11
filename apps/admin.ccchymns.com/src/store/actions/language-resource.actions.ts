import { createActionGroup, props } from '@ngrx/store';

export interface LoadLanguageResourceActionState {
  loaded: boolean;
}

const loadLanguageResourceActionGroup = createActionGroup({
  source: 'Load Language Resource Action Group',
  events: {
    'Load Language Resource Action': props<LoadLanguageResourceActionState>(),
  },
});

export function getLoadLanguageResourceActionGroup() {
  return loadLanguageResourceActionGroup;
}

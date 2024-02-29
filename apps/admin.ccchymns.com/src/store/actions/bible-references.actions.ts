import { createActionGroup, props } from '@ngrx/store';
import { IBibleReferenceUIState } from '@ccchymns.com/common';
export interface BibleReferencesActionState {
  bibleReferencesUIState: IBibleReferenceUIState[] | null | undefined;
}

const bibleReferencesActionGroup = createActionGroup({
  source: 'Bible References Action Group',
  events: {
    'Yoruba Bible References Action': props<BibleReferencesActionState>(),
    'English Bible References Action': props<BibleReferencesActionState>(),
    'French Bible References Action': props<BibleReferencesActionState>(),
    'Egun Bible References Action': props<BibleReferencesActionState>(),
  },
});

export function getBibleReferencesActionGroup() {
  return bibleReferencesActionGroup;
}

import { createActionGroup, props } from '@ngrx/store';
import { IHymnLyricsUIState } from '@ccchymns.com/common';

export interface HymnLyricsActionState {
  hymnLyricsUIState: IHymnLyricsUIState[] | null | undefined;
}

const hymnLyricsActionGroup = createActionGroup({
  source: 'Hymn Lyrics Action Group',
  events: {
    'Yoruba Lyrics Action': props<HymnLyricsActionState>(),
    'English Lyrics Action': props<HymnLyricsActionState>(),
    'French Lyrics Action': props<HymnLyricsActionState>(),
    'Egun Lyrics Action': props<HymnLyricsActionState>(),
  },
});

export function getHymnLyricsActionGroup() {
  return hymnLyricsActionGroup;
}

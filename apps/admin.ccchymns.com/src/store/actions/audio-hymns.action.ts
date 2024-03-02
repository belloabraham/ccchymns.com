import { IAudioHymnsUIState } from "@ccchymns.com/common";
import { createActionGroup, props } from '@ngrx/store';

export interface AudioHymnsActionState {
  audioHymnsUIState: IAudioHymnsUIState[] | null | undefined;
}

const audioHymnsActionGroup = createActionGroup({
  source: 'Audio Hymns Action Group',
  events: {
    'Yoruba Audio Hymns Action': props<AudioHymnsActionState>(),
    'English Audio Hymns Action': props<AudioHymnsActionState>(),
    'French Audio Hymns Action': props<AudioHymnsActionState>(),
    'Egun Audio Hymns Action': props<AudioHymnsActionState>(),
  },
});

export function getAudioHymnsActionGroup() {
  return audioHymnsActionGroup;
}

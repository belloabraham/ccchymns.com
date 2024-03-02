import { IAudioSpaceUIState } from '@ccchymns.com/common';
import { createActionGroup, props } from '@ngrx/store';

export interface AudioSpaceActionState {
  audioSpaceUIState: IAudioSpaceUIState[] | null | undefined;
}

const audioSpaceActionGroup = createActionGroup({
  source: 'Audio Space Action Group',
  events: {
    'English Audio Space Action': props<AudioSpaceActionState>(),
  },
});

export function getAudioSpaceActionGroup() {
  return audioSpaceActionGroup;
}

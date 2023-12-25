import { FormControl } from '@angular/forms';

export interface IAudioSpaceState {
  no: number;
  audio: FileList | null;
}

export type IAudioSpaceForm = {
  [Key in keyof IAudioSpaceState]: FormControl<IAudioSpaceState[Key] | null>;
};

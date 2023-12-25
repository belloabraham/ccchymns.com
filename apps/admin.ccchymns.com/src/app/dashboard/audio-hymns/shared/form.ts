import { FormControl } from '@angular/forms';

export interface IAudioHymnState {
  no: number;
  audio: FileList | null;
}

export type IAudioHymnForm = {
  [Key in keyof IAudioHymnState]: FormControl<IAudioHymnState[Key] | null>;
};

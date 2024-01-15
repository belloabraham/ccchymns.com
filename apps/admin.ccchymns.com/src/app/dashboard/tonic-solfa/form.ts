import { FormControl } from '@angular/forms';

export interface ITonicSolfaUIState {
  no: number;
  tonic: FileList | null;
}

export type ITonicSolfaForm = {
  [Key in keyof ITonicSolfaUIState]: FormControl<
    ITonicSolfaUIState[Key] | null
  >;
};

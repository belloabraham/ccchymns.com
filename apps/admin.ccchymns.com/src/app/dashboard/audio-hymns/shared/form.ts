import { FormControl } from '@angular/forms';

export type IAudioHymnForm = {
  no: FormControl<number | null>;
  fileName: FormControl<string | null>;
};

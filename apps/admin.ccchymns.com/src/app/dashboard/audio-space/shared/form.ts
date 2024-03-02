import { FormControl } from '@angular/forms';


export type IAudioSpaceForm = {
  no: FormControl<number | null>;
  fileName: FormControl<string | null>;
};


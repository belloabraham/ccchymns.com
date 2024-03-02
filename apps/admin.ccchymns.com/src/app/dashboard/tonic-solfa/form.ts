import { FormControl } from '@angular/forms';

export type ITonicSolfaForm = {
  no: FormControl<number | null>;
  fileName: FormControl<string | null>;
};


import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator {
  static noWhitespace(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasWhitespace = (control.value || '').trim().length === 0;
      return hasWhitespace ? { whitespace: true } : null;
    };
  }
}

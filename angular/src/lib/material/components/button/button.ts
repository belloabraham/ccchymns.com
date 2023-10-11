import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `
    button[ng-mat-button], button[ng-mat-raised-button],
    button[ng-mat-stroked-button], a[ng-mat-button], a[ng-mat-raised-button],
    a[ng-mat-stroked-button]
  `,
  exportAs:'ngMatButton',
  standalone: true,
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgMaterialButtonComponent {}

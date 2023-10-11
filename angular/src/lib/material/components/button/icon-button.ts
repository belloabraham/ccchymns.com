import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `
    button[ng-mat-icon-button], button[ng-mat-icon-button],
    button[ng-mat-icon-button], a[ng-mat-icon-button], a[ng-mat-icon-button],
    a[ng-mat-icon-button]
  `,
  standalone: true,
  exportAs: 'ngMatIconButton',
  templateUrl: './icon-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgMaterialIconButtonComponent {}

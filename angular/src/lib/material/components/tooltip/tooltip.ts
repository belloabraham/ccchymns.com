import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `
    div[ng-mat-tooltip]
  `,
  exportAs: 'ngMatToolTip',
  standalone: true,
  templateUrl: './tooltip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgMaterialTooltipComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[ccc-badge-rounded]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rounded-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CCCRoundedBadgeComponent {}

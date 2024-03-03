import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { CCCIconDirective } from '@ccchymns.com/ui';

@Component({
  selector: 'app-tonic-solfa-placeholder',
  standalone: true,
  imports: [TranslocoModule, NgFor, CCCIconDirective],
  templateUrl: './tonic-solfa-placeholder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TonicSolfaPlaceholderComponent {
  placeholders = Array(10);
  @Input({ required: true }) columnNames: string[] = [];
}

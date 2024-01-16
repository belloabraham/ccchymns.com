import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TABLE_PAGE_SIZE } from '../../shared';
import { NgFor } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-tonic-solfa-placeholder',
  standalone: true,
  imports: [TranslocoModule, NgFor],
  templateUrl: './tonic-solfa-placeholder.component.html',
  styleUrl: './tonic-solfa-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TonicSolfaPlaceholderComponent {
  placeholders = Array(TABLE_PAGE_SIZE / 2);
  @Input({ required: true }) columnNames: string[] = [];
}

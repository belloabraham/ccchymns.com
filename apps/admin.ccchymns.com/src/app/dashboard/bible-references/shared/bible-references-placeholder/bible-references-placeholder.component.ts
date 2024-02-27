import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { TABLE_PAGE_SIZE } from '../../../shared';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bible-references-placeholder',
  standalone: true,
  imports: [TranslocoModule, NgFor],
  templateUrl: './bible-references-placeholder.component.html',
  styleUrl: './bible-references-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleReferencesPlaceholderComponent {
  placeholders = Array(10);
  @Input({ required: true }) columnNames: string[] = [];
}

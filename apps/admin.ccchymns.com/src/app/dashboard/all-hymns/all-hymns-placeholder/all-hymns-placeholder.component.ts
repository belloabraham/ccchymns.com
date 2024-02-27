import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TABLE_PAGE_SIZE } from '../../shared';
import { NgFor } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-all-hymns-placeholder',
  standalone: true,
  imports: [TranslocoModule, NgFor],
  templateUrl: './all-hymns-placeholder.component.html',
  styleUrl: './all-hymns-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHymnsPlaceholderComponent {
  placeholders = Array(10);
  @Input({ required: true }) columnNames: string[] = [];
}

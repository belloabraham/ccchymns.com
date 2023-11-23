import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { TABLE_PAGE_SIZE } from '../../../shared';

@Component({
  selector: 'app-lyrics-placeholder',
  standalone: true,
  imports: [TranslocoModule, NgFor],
  templateUrl: './lyrics-placeholder.component.html',
  styleUrl: './lyrics-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsPlaceholderComponent {
  placeholders = Array(TABLE_PAGE_SIZE / 2);
  @Input({ required: true }) columnNames: string[] = [];
}

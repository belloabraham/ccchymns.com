import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { TABLE_PAGE_SIZE } from '../../../shared';

@Component({
  selector: 'app-lyrics-placeholder',
  standalone: true,
  imports: [TranslocoModule, NgFor],
  templateUrl: './lyrics-placeholder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsPlaceholderComponent {
  placeholders = Array(10);
  @Input({ required: true }) columnNames: string[] = [];
}

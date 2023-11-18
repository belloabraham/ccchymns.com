import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslocoModule } from '@ngneat/transloco';

export const COLUMN_NAMES = ['no', 'hymn', 'tools'];

@Component({
  selector: 'app-lyrics-table',
  standalone: true,
  imports: [CdkTableModule, TranslocoModule],
  templateUrl: './lyrics-table.component.html',
  styleUrl: './lyrics-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsTableComponent<T> {
  @Input({ required: true }) data: T[] = [];
  @Input() filterBy?: string;
  /**
   * Column names should be in small letter
   */
  @Input({ required: true }) columnNames: string[] = [];
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'app-lyrics-table',
  standalone: true,
  imports: [CdkTableModule, CommonModule],
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
  firstColumn = this.columnNames[0];
  secondColumn = this.columnNames[1];
  thirdColumn = this.columnNames[2];
}

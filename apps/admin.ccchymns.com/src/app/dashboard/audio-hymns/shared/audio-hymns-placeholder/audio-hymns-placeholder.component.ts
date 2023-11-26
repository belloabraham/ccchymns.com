import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { TABLE_PAGE_SIZE } from '../../../shared';


@Component({
  selector: 'app-audio-hymns-placeholder',
  standalone: true,
  imports: [TranslocoModule, NgFor],
  templateUrl: './audio-hymns-placeholder.component.html',
  styleUrl: './audio-hymns-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioHymnsPlaceholderComponent {
  placeholders = Array(TABLE_PAGE_SIZE / 2);
  @Input({ required: true }) columnNames: string[] = [];
}

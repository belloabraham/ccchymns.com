import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {  NgFor } from '@angular/common';
import { TABLE_PAGE_SIZE } from '../../../shared';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-audio-space-placeholder',
  standalone: true,
  imports: [TranslocoModule, NgFor],
  templateUrl: './audio-space-placeholder.component.html',
  styleUrl: './audio-space-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioSpacePlaceholderComponent {
  placeholders = Array(10);
  @Input({ required: true }) columnNames: string[] = [];
}

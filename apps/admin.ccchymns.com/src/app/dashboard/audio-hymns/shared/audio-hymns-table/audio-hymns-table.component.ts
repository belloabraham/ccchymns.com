import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-hymns-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-hymns-table.component.html',
  styleUrl: './audio-hymns-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioHymnsTableComponent {

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-hymns-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-hymns-placeholder.component.html',
  styleUrl: './audio-hymns-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioHymnsPlaceholderComponent {

}

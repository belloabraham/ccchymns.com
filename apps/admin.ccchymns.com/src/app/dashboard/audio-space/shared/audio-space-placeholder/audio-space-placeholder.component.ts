import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-space-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-space-placeholder.component.html',
  styleUrl: './audio-space-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioSpacePlaceholderComponent {

}

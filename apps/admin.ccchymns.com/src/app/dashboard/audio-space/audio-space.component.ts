import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-space',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-space.component.html',
  styleUrls: ['./audio-space.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioSpaceComponent {}

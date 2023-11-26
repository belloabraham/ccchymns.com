import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-audio-space',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './audio-space.component.html',
  styleUrls: ['./audio-space.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioSpaceComponent {}

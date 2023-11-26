import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-audio-hymns',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './audio-hymns.component.html',
  styleUrl: './audio-hymns.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioHymnsComponent {}

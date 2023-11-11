import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-audio-hymns',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './audio-hymns.component.html',
  styleUrl: './audio-hymns.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioHymnsComponent {}

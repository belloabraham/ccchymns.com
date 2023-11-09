import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-audio-space',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './audio-space.component.html',
  styleUrls: ['./audio-space.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioSpaceComponent {}

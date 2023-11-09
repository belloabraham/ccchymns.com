import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-audio',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioComponent {}

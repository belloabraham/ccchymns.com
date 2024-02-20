import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudioSpaceDataService } from './audio-space.data.service';

@Component({
  selector: 'app-audio-space',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './audio-space.component.html',
  styleUrls: ['./audio-space.component.scss'],
  providers: [AudioSpaceDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioSpaceComponent {}

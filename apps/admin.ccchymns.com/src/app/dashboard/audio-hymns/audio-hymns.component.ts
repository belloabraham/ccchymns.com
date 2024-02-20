import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudioHymnsDataService } from './audio-hymns.data.service';

@Component({
  selector: 'app-audio-hymns',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './audio-hymns.component.html',
  styleUrl: './audio-hymns.component.scss',
  providers:[AudioHymnsDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioHymnsComponent {}

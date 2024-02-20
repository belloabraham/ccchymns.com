import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LyricsDataService } from './lyrics.data.service';

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
  providers: [LyricsDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsComponent {}

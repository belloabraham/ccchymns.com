import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [SharedModule, RouterOutlet],
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsComponent {}

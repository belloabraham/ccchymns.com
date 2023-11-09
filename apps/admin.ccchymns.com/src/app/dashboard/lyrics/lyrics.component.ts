import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsComponent {}

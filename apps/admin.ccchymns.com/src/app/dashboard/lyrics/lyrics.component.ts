import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '@ccchymns.com/angular';
import { LanguageResourceKey } from './i18n/language-resource-key';

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [SharedModule, RouterOutlet],
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsComponent {
    languageResourceKey = LanguageResourceKey;
}

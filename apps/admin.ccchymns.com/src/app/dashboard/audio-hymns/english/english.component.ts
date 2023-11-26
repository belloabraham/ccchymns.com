import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { MOCK_AUDIO_HYMNS } from '../shared/mock/audio-hymns';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';

@Component({
  selector: 'app-audio-english',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnglishComponent {
  titleKey = LanguageResourceKey.ENGLISH_AUDIO_HYMNS
  data = MOCK_AUDIO_HYMNS;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { AUDIO_SPACE_MOCK_DATA } from '../shared/mock/audio-space';
import { CommonComponent } from '../shared/common/common.component';
import { RootLanguageResourceKey } from '@ccchymns.com/common';

@Component({
  selector: 'app-audio-space-english',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnglishComponent {
  titleKey = RootLanguageResourceKey.AUDIO_SPACE;
  data = AUDIO_SPACE_MOCK_DATA;
}

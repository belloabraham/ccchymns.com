import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { MOCK_AUDIO_HYMNS } from '../shared/mock/audio-hymns';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';

@Component({
  selector: 'app-audio-french',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './french.component.html',
  styleUrl: './french.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrenchComponent {
  titleKey = LanguageResourceKey.FRENCH_AUDIO_HYMNS
  data = MOCK_AUDIO_HYMNS;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { CommonComponent } from '../shared/common/common.component';
import { MOCK_AUDIO_HYMNS } from '../shared/mock/audio-hymns';
import { LanguageResourceKey } from '../i18n/language-resource-key';

@Component({
  selector: 'app-audio-yoruba',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {
  titleKey = LanguageResourceKey.YORUBA_AUDIO_HYMNS;
  data = MOCK_AUDIO_HYMNS;
}

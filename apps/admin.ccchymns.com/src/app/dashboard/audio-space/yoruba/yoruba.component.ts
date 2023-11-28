import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { AUDIO_SPACE_MOCK_DATA } from '../shared/mock/audio-space';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { CommonComponent } from '../shared/common/common.component';

@Component({
  selector: 'app-audio-space-yoruba',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {
  titleKey = LanguageResourceKey.YORUBA_AUDIO_SPACE;
  data = AUDIO_SPACE_MOCK_DATA;
}

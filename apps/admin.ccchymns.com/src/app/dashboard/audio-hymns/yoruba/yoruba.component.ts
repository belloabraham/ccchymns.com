import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { CommonComponent } from '../shared/common/common.component';
import { AUDIO_HYMNS_MOC_DATA as AUDIO_HYMNS_MOCK_DATA } from '../shared/mock/audio-hymns';
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
  data = AUDIO_HYMNS_MOCK_DATA;
}

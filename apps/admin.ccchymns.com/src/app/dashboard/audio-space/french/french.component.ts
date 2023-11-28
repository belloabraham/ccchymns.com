import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { AUDIO_SPACE_MOCK_DATA } from '../shared/mock/audio-space';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { CommonComponent } from '../shared/common/common.component';

@Component({
  selector: 'app-audiospace-french',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './french.component.html',
  styleUrl: './french.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrenchComponent {
  titleKey = LanguageResourceKey.FRENCH_AUDIO_SPACE;
  data = AUDIO_SPACE_MOCK_DATA;
}

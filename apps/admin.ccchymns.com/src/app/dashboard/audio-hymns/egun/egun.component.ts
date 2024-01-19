import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { AUDIO_HYMNS_MOC_DATA } from '../shared/mock/audio-hymns';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';

@Component({
  selector: 'app-audio-english',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './egun.component.html',
  styleUrl: './egun.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EgunComponent {
  titleKey = LanguageResourceKey.EGUN_AUDIO_HYMNS;
  data = AUDIO_HYMNS_MOC_DATA;
}

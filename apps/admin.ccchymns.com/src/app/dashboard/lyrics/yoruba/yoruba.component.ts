import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonComponent } from '../shared/common/common.component';
import { HYMN_LYRICS_MOCK_DATA } from '../shared';
import { LanguageResourceKey } from '../i18n/language-resource-key';

@Component({
  selector: 'app-lyrics-yoruba',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {
  titleKey = LanguageResourceKey.YORUBA_LYRICS;
  data = HYMN_LYRICS_MOCK_DATA;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonComponent } from '../shared/common/common.component';
import { HYMN_LYRICS_MOCK_DATA } from '../shared';
import { LanguageResourceKey } from '../i18n/language-resource-key';

@Component({
  selector: 'app-lyrics-english',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './egun.component.html',
  styleUrl: './egun.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EgunComponent {
  titleKey = LanguageResourceKey.EGUN_LYRICS;
  data = HYMN_LYRICS_MOCK_DATA;
}

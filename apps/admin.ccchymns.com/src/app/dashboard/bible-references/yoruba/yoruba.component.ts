import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { BIBLE_REFERENCE_MOCK_DATA } from '../shared/mock/bible-references';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';

@Component({
  selector: 'app-bible-references-yoruba',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {
  titleKey = LanguageResourceKey.YORUBA_BIBLE_REFERENCES;
  data = BIBLE_REFERENCE_MOCK_DATA;
}

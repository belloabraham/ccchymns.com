import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { BIBLE_REFERENCE_MOCK_DATA } from '../shared/mock/bible-references';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';

@Component({
  selector: 'app-bible-references-egun',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './egun.component.html',
  styleUrl: './egun.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EgunComponent {
  titleKey = LanguageResourceKey.EGUN_BIBLE_REFERENCES;
  data = BIBLE_REFERENCE_MOCK_DATA;
}

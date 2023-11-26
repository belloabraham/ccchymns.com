import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { MOCK_BIBLE_REFERENCE } from '../shared/mock/bible-references';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';

@Component({
  selector: 'app-bible-references-english',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnglishComponent {
  titleKey = LanguageResourceKey.ENGLISH_BIBLE_REFERENCES
  data = MOCK_BIBLE_REFERENCE;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { MOCK_BIBLE_REFERENCE } from '../shared/mock/bible-references';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-bible-references-english',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnglishComponent {
  titleKey = 'english_bible_references';
  data = MOCK_BIBLE_REFERENCE;
}

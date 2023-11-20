import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonComponent } from '../shared/common/common.component';
import { MOCK_HYMN_LYRICS } from '../shared';

@Component({
  selector: 'app-lyrics-english',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnglishComponent {
  titleKey = 'english_lyrics';
  data = MOCK_HYMN_LYRICS;
}

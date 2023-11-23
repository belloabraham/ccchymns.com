import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonComponent } from '../shared/common/common.component';
import { MOCK_HYMN_LYRICS } from '../shared';

@Component({
  selector: 'app-lyrics-french',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './french.component.html',
  styleUrl: './french.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrenchComponent {
  titleKey = 'french_lyrics';
  data = MOCK_HYMN_LYRICS;
}

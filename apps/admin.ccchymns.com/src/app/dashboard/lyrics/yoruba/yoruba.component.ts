import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonComponent } from '../shared/common/common.component';
import { MOCK_HYMN_LYRICS } from '../shared';

@Component({
  selector: 'app-lyrics-yoruba',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {
  titleKey = 'yoruba_lyrics';
  data = MOCK_HYMN_LYRICS;
}

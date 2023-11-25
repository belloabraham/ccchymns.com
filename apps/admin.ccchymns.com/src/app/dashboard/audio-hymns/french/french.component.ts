import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { MOCK_AUDIO_HYMNS } from '../shared/mock/audio-hymns';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-audio-french',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './french.component.html',
  styleUrl: './french.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrenchComponent {
  titleKey = 'french_audio_hymns';
  data = MOCK_AUDIO_HYMNS;
}

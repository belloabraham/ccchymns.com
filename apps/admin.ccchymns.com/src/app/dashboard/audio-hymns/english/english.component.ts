import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { MOCK_AUDIO_HYMNS } from '../shared/mock/audio-hymns';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-audio-english',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnglishComponent {
  titleKey = 'english_audio_hymns';
  data = MOCK_AUDIO_HYMNS;
}

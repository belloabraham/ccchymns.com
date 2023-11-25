import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { CommonComponent } from '../common/common.component';
import { MOCK_AUDIO_HYMNS } from '../shared/mock/audio-hymns';

@Component({
  selector: 'app-audio-yoruba',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {
  titleKey = 'yoruba_audio_hymns';
  data=MOCK_AUDIO_HYMNS
}

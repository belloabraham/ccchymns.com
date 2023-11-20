import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonComponent } from '../shared/common/common.component';

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
}

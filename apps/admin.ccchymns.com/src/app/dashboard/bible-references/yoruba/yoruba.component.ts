import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { MOCK_BIBLE_REFERENCE } from '../shared/mock/bible-references';
import { CommonComponent } from '../shared/common/common.component';

@Component({
  selector: 'app-bible-references-yoruba',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {
  titleKey = 'yoruba_bible_reference';
  data = MOCK_BIBLE_REFERENCE;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';
import { MOCK_BIBLE_REFERENCE } from '../shared/mock/bible-references';
import { CommonComponent } from '../shared/common/common.component';

@Component({
  selector: 'app-bible-references-french',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './french.component.html',
  styleUrl: './french.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrenchComponent {
  titleKey = 'french_bible_reference';
  data = MOCK_BIBLE_REFERENCE;
}

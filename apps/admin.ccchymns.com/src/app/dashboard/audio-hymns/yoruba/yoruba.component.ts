import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';

@Component({
  selector: 'app-audio-yoruba',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {}

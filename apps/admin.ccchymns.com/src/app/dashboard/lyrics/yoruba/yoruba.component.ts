import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-lyrics-yoruba',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {}

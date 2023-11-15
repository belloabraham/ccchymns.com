import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-audiospace-english',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnglishComponent {}

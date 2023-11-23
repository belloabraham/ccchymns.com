import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared';

@Component({
  selector: 'app-audiospace-french',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './french.component.html',
  styleUrl: './french.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrenchComponent {}

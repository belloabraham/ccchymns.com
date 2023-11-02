import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {}

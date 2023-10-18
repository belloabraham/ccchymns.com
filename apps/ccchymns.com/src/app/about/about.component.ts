import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule, NavigationComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}

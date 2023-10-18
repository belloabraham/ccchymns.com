import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';
import { NavigationComponent } from '../navigation/navigation.component';


@Component({
  selector: 'app-refund',
  standalone: true,
  imports: [SharedModule, NavigationComponent],
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundComponent {}

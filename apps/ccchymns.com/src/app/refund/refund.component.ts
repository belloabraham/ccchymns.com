import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SharedModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-refund',
  standalone: true,
  imports: [SharedModule, FooterComponent],
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundComponent {}

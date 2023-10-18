import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    NavigationComponent,
    FooterComponent,
    CCCIconDirective,
    ReviewsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

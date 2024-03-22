import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { APP_REVIEWS, AppReview } from '../../core';
import { SharedModule } from '@ccchymns.com/angular';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [SharedModule, CCCIconDirective, NgOptimizedImage],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
  appReviews: AppReview[] = APP_REVIEWS;
}

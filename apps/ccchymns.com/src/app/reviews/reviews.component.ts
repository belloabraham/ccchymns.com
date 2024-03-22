import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { APP_REVIEWS, AppReview } from '../../core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, CCCIconDirective, NgOptimizedImage],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
  appReviews: AppReview[] = APP_REVIEWS;
}

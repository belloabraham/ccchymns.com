import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CCCIconDirective } from '@ccchymns.com/ui';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, CCCIconDirective],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent{}


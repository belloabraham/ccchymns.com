import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { HeaderComponent } from '../header/header.component';
import { FeaturesComponent } from '../features/features.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Route } from '../../core';
import { RouterLink } from '@angular/router';
import { Config } from '@ccchymns.com/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    ReviewsComponent,
    HeaderComponent,
    FeaturesComponent,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  appStoreURL = Config.APP_STORE_URL;
  playStoreURL = Config.PLAY_STORE_URL;
  root = Route.ROOT;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('CCC Hymns - Home');
  }
}

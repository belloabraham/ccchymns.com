import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';
import { NavigationComponent } from '../navigation/navigation.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { HeaderComponent } from '../header/header.component';
import { FeaturesComponent } from '../features/features.component';
import { NgOptimizedImage } from '@angular/common';
import {  Route } from '../../core';
import { RootLanguageResourceKey } from '../i18n/language-resource-key';
import { RouterLink } from '@angular/router';
import { Config } from '@ccchymns.com/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
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
export class HomeComponent {
  appStoreURL = Config.APP_STORE_URL;
  playStoreURL = Config.PLAY_STORE_URL;
  rootLangReskey = RootLanguageResourceKey;
  root = Route.ROOT;
}

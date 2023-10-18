import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { RouterLink } from '@angular/router';
import { Route } from '../../core/data/route';
import { LanguageResourceKey } from './i18n/language-resource-key';
import { NgMaterialButtonModule, NgMaterialElevationDirective, SharedModule } from '@ccchymns.com/angular';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    SharedModule,
    RouterLink,
    FooterComponent,
    CCCIconDirective,
    NgOptimizedImage,
    NgMaterialButtonModule,
    NgMaterialElevationDirective,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  showSideNavigation = false;
  route = Route;
  root = Route.ROOT;
  languageResourceKey = LanguageResourceKey;

  download() {
    console.log();
  }
}

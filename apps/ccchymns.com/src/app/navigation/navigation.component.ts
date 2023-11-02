import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { Route } from '../../core/data/route';
import { RootLanguageResourceKey } from '../../core/i18n/language-resource-key';
import {
  SharedModule,
} from '@ccchymns.com/angular';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    SharedModule,
    RouterLink,
    FooterComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  showSideNavigation = false;
  route = Route;
  root = Route.ROOT;
  languageResourceKey = RootLanguageResourceKey;

  download() {
    console.log();
  }
}

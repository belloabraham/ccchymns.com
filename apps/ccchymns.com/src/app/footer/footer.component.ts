import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgMaterialButtonModule, SharedModule } from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { Contact, Route, Preference } from '../../core';
import { RouterLink } from '@angular/router';
import { LanguageResourceKey } from './i18n/language-resource-key';
import { NgOptimizedImage } from '@angular/common';
import { RootLanguageResourceKey } from '../i18n/language-resource-key';
import { Config } from '@ccchymns.com/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    RouterLink,
    NgOptimizedImage,
    NgMaterialButtonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  phone = Contact.PHONE;
  email = Contact.EMAIL;
  year = new Date().getFullYear();
  route = Route;
  root = Route.ROOT;
  appStoreURL = Config.APP_STORE_URL;
  playStoreURL = Config.PLAY_STORE_URL;
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;

  showCookieNotice: string | boolean | null = localStorage.getItem(
    Preference.SHOW_COOKIE_NOTICE
  );
  closeCookie() {
    this.showCookieNotice = 'false';
    localStorage.setItem(Preference.SHOW_COOKIE_NOTICE, 'false');
  }
}

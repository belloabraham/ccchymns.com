import { Injectable } from '@angular/core';
import { Providers } from '../providers';
import { LanguageResourceService } from '../i18n/language-resource.service';
import { Language } from '../i18n/language';

@Injectable({
  providedIn: Providers.ROOT,
})
export class LanguageUseCaseService {
  constructor(private languageService: LanguageResourceService) {}

  getPageTitle(pageTitleKey: string, appNameKey: string = Language.APP_NAME) {
    const appName = this.languageService.getString(appNameKey);
    const pageTitle = this.languageService.getStringWithParameter(
      pageTitleKey,
      {
        value: appName,
      }
    );
    return pageTitle;
  }
}

import { provideTransloco, TranslocoModule } from '@ngneat/transloco';
import { isDevMode, NgModule } from '@angular/core';
import { TranslocoLoaderService } from './transloco-loader.service';
import { Language } from '../i18n/language';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
      config: {
        availableLangs: [Language.ENGLISH, Language.FRENCH],
        defaultLang: Language.ENGLISH,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoLoaderService,
    }),
  ],
})
export class TranslocoRootModule {}

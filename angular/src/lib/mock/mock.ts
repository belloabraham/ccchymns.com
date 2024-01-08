import {
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from '@ngneat/transloco';
import en from './en.json';

export function getTranslocoTestingModule(
  options: TranslocoTestingOptions = {}
) {
  return TranslocoTestingModule.forRoot({
    langs: { en },
    translocoConfig: {
      availableLangs: ['en'],
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options,
  });
}

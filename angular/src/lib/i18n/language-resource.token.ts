import { InjectionToken, inject } from '@angular/core';
import { ILanguageResourceService } from './language-resource.interface';
import { Providers } from '../providers';
import { LanguageResourceService } from './language-resource.service';
import { TranslocoService } from '@ngneat/transloco';

export const LANGUAGE_RESOURCE_TOKEN =
  new InjectionToken<ILanguageResourceService>('language-resource', {
    providedIn: Providers.ROOT,
    factory: () => new LanguageResourceService(inject(TranslocoService)),
  });

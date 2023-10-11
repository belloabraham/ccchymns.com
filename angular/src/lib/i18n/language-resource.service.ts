import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ReplaySubject } from 'rxjs';
import { Providers } from '../providers';
import { ILanguageResourceService } from './language-resource.interface';

@Injectable({
  providedIn: Providers.ROOT,
})
export class LanguageResourceService implements ILanguageResourceService {
  private readonly NUMBER_OF_CACHED_DATA = 1;
  private isLangLoadSuccessfully$ = new ReplaySubject<boolean>(
    this.NUMBER_OF_CACHED_DATA
  );

  constructor(private translocoService: TranslocoService) {}

  setLanguageResourceLoadedSuccessfully(loaded: boolean) {
    this.isLangLoadSuccessfully$.next(loaded);
  }

  getLanguageLoadSuccessfully$() {
    return this.isLangLoadSuccessfully$;
  }

  loadLanguageResource(language: string) {
    return this.translocoService.load(language);
  }

  getStringWithParameter(key: string, params: { key: string } | object) {
    return this.translocoService.translate(key, params);
  }

  getString(key: string): string {
    return this.translocoService.translate(key);
  }
}

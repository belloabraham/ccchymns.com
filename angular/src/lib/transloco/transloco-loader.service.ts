import { inject, Injectable } from '@angular/core';
import { Translation } from '@ngneat/transloco';
import { HttpClient } from '@angular/common/http';
import { Providers } from '../providers';

@Injectable({
  providedIn: Providers.ROOT,
})
export class TranslocoLoaderService {
  private http = inject(HttpClient);

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

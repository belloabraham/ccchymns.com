import { Routes } from '@angular/router';
import { Route } from '@ccchymns.com/common';
import { LyricsComponent } from '../lyrics/lyrics.component';
import { RootLanguageResourceKey } from '../../../core/i18n/language-resource-key';

export const LYRICS_ROUTES: Routes = [
  {
    path: Route.ROOT,
    component: LyricsComponent,
    children: [
      {
        path: Route.ROOT,
        pathMatch: 'full',
        redirectTo: Route.YORUBA,
      },
      {
        path: Route.YORUBA,
        data: {
          breadcrumb: RootLanguageResourceKey.YORUBA,
        },
        loadComponent: () =>
          import('./yoruba/yoruba.component').then(
            (mod) => mod.YorubaComponent
          ),
      },
      {
        path: Route.ENGLISH,
        data: {
          breadcrumb: RootLanguageResourceKey.ENGLISH,
        },
        loadComponent: () =>
          import('./english/english.component').then(
            (mod) => mod.EnglishComponent
          ),
      },
      {
        path: Route.FRENCH,
        data: {
          breadcrumb: RootLanguageResourceKey.FRENCH,
        },
        loadComponent: () =>
          import('./french/french.component').then(
            (mod) => mod.FrenchComponent
          ),
      },
    ],
  },
];

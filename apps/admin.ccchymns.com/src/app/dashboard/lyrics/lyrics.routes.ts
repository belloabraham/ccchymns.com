import { Routes } from '@angular/router';
import { RootLanguageResourceKey, Route } from '@ccchymns.com/common';
import { LyricsComponent } from '../lyrics/lyrics.component';
import { provideState } from '@ngrx/store';
import {
  egunLyricsFeature,
  englishLyricsFeature,
  frenchLyricsFeature,
  yorubaLyricsFeature,
} from 'apps/admin.ccchymns.com/src/store';

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
        providers: [provideState(yorubaLyricsFeature)],
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
        providers: [provideState(englishLyricsFeature)],
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
        providers: [provideState(frenchLyricsFeature)],
        data: {
          breadcrumb: RootLanguageResourceKey.FRENCH,
        },
        loadComponent: () =>
          import('./french/french.component').then(
            (mod) => mod.FrenchComponent
          ),
      },
      {
        path: Route.EGUN,
        providers: [provideState(egunLyricsFeature)],
        data: {
          breadcrumb: RootLanguageResourceKey.EGUN,
        },
        loadComponent: () =>
          import('./egun/egun.component').then((mod) => mod.EgunComponent),
      },
    ],
  },
];

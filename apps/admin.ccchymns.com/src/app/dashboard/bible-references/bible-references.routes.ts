import { Routes } from '@angular/router';
import { Route } from '@ccchymns.com/common';
import { LyricsComponent } from '../lyrics/lyrics.component';

export const BIBLE_REFERENCES_ROUTES: Routes = [
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
        pathMatch: 'full',
        loadComponent: () =>
          import('./yoruba/yoruba.component').then(
            (mod) => mod.YorubaComponent
          ),
      },
      {
        path: Route.ENGLISH,
        loadComponent: () =>
          import('./english/english.component').then(
            (mod) => mod.EnglishComponent
          ),
      },
      {
        path: Route.FRENCH,
        loadComponent: () =>
          import('./french/french.component').then(
            (mod) => mod.FrenchComponent
          ),
      },
    ],
  },
];

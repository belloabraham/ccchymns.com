import { Routes } from '@angular/router';
import { Route } from '@ccchymns.com/common';
import { LyricsComponent } from '../lyrics/lyrics.component';

export const LYRICS_ROUTES: Routes = [
  {
    path: Route.ROOT,
    component: LyricsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./yoruba/yoruba.component').then(
            (mod) => mod.YorubaComponent
          ),
      },
    ],
  },
];

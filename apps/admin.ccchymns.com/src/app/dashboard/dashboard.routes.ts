import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Route } from '@ccchymns.com/common';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: Route.ROOT,
    component: DashboardComponent,
    children: [
      {
        path: Route.ROOT,
        pathMatch: 'full',
        redirectTo: Route.LYRICS,
      },
      {
        path: Route.LYRICS,
        loadChildren: () =>
          import('./lyrics/lyrics.routes').then((mod) => mod.LYRICS_ROUTES),
      },
      {
        path: Route.BIBLE_REFERENCES,
        loadChildren: () =>
          import('./bible-references/bible-references.routes').then(
            (mod) => mod.BIBLE_REFERENCES_ROUTES
          ),
      },
      {
        path: Route.TONIC_SOLFA,
        loadChildren: () =>
          import('./tonic-solfa/tonic-solfa.routes').then(
            (mod) => mod.TONIC_SOLFA_ROUTES
          ),
      },
      {
        path: Route.AUDIO_HYMNS,
        loadChildren: () =>
          import('./audio-hymns/audio-hymns.routes').then(
            (mod) => mod.AUDIO_HYMNS_ROUTES
          ),
      },
      {
        path: Route.AUDIO_SPACE,
        loadChildren: () =>
          import('./audio-space/audio-space.routes').then(
            (mod) => mod.AUDIO_SPACE_ROUTES
          ),
      },
      {
        path: Route.ALL_HYMNS,
        loadComponent: () =>
          import('./all-hymns/all-hymns.component').then(
            (mod) => mod.AllHymnsComponent
          ),
      },
    ],
  },
];

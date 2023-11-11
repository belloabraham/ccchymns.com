import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Route } from '../../core/data/route';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: Route.ROOT,
    component: DashboardComponent,
    children: [
      {
        pathMatch: 'full',
        path: '',
        loadComponent: () =>
          import('./lyrics/lyrics.component').then(
            (mod) => mod.LyricsComponent
          ),
      },
      {
        path: Route.BIBLE_REFERENCES,
        loadComponent: () =>
          import('./bible-references/bible-references.component').then(
            (mod) => mod.BibleReferencesComponent
          ),
      },
      {
        path: Route.TONIC_SOLFA,
        loadComponent: () =>
          import('./tonic-solfa/tonic-solfa.component').then(
            (mod) => mod.TonicSolfaComponent
          ),
      },
      {
        path: Route.AUDIO_HYMNS,
        loadComponent: () =>
          import('./audio-hymns/audio-hymns.component').then(
            (mod) => mod.AudioHymnsComponent
          ),
      },
      {
        path: Route.AUDIO_SPACE,
        loadComponent: () =>
          import('./audio-space/audio-space.component').then(
            (mod) => mod.AudioSpaceComponent
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

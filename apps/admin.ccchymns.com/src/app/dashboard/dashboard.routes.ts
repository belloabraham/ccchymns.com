import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Route } from '@ccchymns.com/common';
import { RootLanguageResourceKey } from '../../core/i18n/language-resource-key';
import { LanguageResourceKey } from './i18n/language-resource-key';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: Route.ROOT,
    component: DashboardComponent,
    data: {
      breadcrumb: LanguageResourceKey.DASHBOARD,
    },
    children: [
      {
        path: Route.ROOT,
        pathMatch: 'full',
        redirectTo: Route.LYRICS,
      },
      {
        path: Route.LYRICS,
        data: {
          breadcrumb: RootLanguageResourceKey.LYRICS,
        },
        loadChildren: () =>
          import('./lyrics/lyrics.routes').then((mod) => mod.LYRICS_ROUTES),
      },
      {
        path: Route.BIBLE_REFERENCES,
        data: {
          breadcrumb: RootLanguageResourceKey.BIBLE_REFERENCES,
        },
        loadChildren: () =>
          import('./bible-references/bible-references.routes').then(
            (mod) => mod.BIBLE_REFERENCES_ROUTES
          ),
      },
      {
        path: Route.TONIC_SOLFA,
        data: {
          breadcrumb: RootLanguageResourceKey.TONIC_SOLFA,
        },
        loadChildren: () =>
          import('./tonic-solfa/tonic-solfa.routes').then(
            (mod) => mod.TONIC_SOLFA_ROUTES
          ),
      },
      {
        path: Route.AUDIO_HYMNS,
        data: {
          breadcrumb: RootLanguageResourceKey.AUDIO_HYMNS,
        },
        loadChildren: () =>
          import('./audio-hymns/audio-hymns.routes').then(
            (mod) => mod.AUDIO_HYMNS_ROUTES
          ),
      },
      {
        path: Route.AUDIO_SPACE,
        data: {
          breadcrumb: RootLanguageResourceKey.AUDIO_SPACE,
        },
        loadChildren: () =>
          import('./audio-space/audio-space.routes').then(
            (mod) => mod.AUDIO_SPACE_ROUTES
          ),
      },
      {
        path: Route.ALL_HYMNS,
        data: {
          breadcrumb: RootLanguageResourceKey.ALL_HYMNS,
        },
        loadComponent: () =>
          import('./all-hymns/all-hymns.component').then(
            (mod) => mod.AllHymnsComponent
          ),
      },
    ],
  },
];

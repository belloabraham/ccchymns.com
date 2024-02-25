import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RootLanguageResourceKey, Route } from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from './i18n/language-resource-key';
import { inject } from '@angular/core';
import { LyricsDataService } from './lyrics/lyrics.data.service';
import { delay, from, retryWhen, take, tap } from 'rxjs';
import { LoggerUtil } from '@ccchymns.com/core';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: Route.ROOT,
    component: DashboardComponent,
    data: {
      breadcrumb: DashboardLanguageResourceKey.DASHBOARD,
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
      /*   resolve: {
          editorsHymns: () => {
            let i = 0;
            const lyricsDataService = inject(LyricsDataService);
            return from(lyricsDataService.getAllEditorsHymns()).pipe(
              retryWhen((errors) =>
                errors.pipe(
                  tap(() =>
                    LoggerUtil.error(
                      'DasboardRoute',
                      'EditorsHymnsResolver',
                      errors
                    )
                  ),
                  delay(++i * 1000),
                  take(100)
                )
              )
            );
          },
        }, */
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
        loadComponent: () =>
          import('./tonic-solfa/tonic-solfa.component').then(
            (mod) => mod.TonicSolfaComponent
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

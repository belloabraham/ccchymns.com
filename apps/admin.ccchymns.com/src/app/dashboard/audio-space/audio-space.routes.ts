import { Routes } from '@angular/router';
import { RootLanguageResourceKey, Route } from '@ccchymns.com/common';
import { AudioSpaceComponent } from './audio-space.component';
import { provideState } from '@ngrx/store';
import { englishAudioSpaceFeature } from 'apps/admin.ccchymns.com/src/store';

export const AUDIO_SPACE_ROUTES: Routes = [
  {
    path: Route.ROOT,
    component: AudioSpaceComponent,
    children: [
      {
        path: Route.ROOT,
        pathMatch: 'full',
        redirectTo: Route.ENGLISH,
      },
      {
        path: Route.ENGLISH,
        providers: [provideState(englishAudioSpaceFeature)],
        data: {
          breadcrumb: RootLanguageResourceKey.ENGLISH,
        },
        loadComponent: () =>
          import('./english/english.component').then(
            (mod) => mod.EnglishComponent
          ),
      },
    ],
  },
];

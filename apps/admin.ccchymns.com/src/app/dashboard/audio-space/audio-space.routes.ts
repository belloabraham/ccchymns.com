import { Routes } from '@angular/router';
import { RootLanguageResourceKey, Route } from '@ccchymns.com/common';
import { AudioSpaceComponent } from './audio-space.component';


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

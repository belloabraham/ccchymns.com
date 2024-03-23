import { Routes } from '@angular/router';
import { RootLanguageResourceKey, Route } from '@ccchymns.com/common';
import { AudioHymnsComponent } from './audio-hymns.component';
import { provideState } from '@ngrx/store';
import {
  egunAudioHymnsFeature,
  englishAudioHymnsFeature,
  frenchAudioHymnsFeature,
  yorubaAudioHymnsFeature,
} from '../../../store';

export const AUDIO_HYMNS_ROUTES: Routes = [
  {
    path: Route.ROOT,
    component: AudioHymnsComponent,
    children: [
      {
        path: Route.ROOT,
        pathMatch: 'full',
        redirectTo: Route.YORUBA,
      },
      {
        path: Route.YORUBA,
        providers: [provideState(yorubaAudioHymnsFeature)],
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
        providers: [provideState(englishAudioHymnsFeature)],
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
        providers: [provideState(frenchAudioHymnsFeature)],
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
        providers: [provideState(egunAudioHymnsFeature)],
        data: {
          breadcrumb: RootLanguageResourceKey.EGUN,
        },
        loadComponent: () =>
          import('./egun/egun.component').then((mod) => mod.EgunComponent),
      },
    ],
  },
];

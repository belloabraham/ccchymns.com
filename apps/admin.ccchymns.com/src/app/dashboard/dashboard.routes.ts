import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RootLanguageResourceKey, Route } from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from './i18n/language-resource-key';
import { inject } from '@angular/core';
import { LyricsDataService } from './lyrics/lyrics.data.service';
import { BibleReferencesDataService } from './bible-references/bible-references.data.service';
import { TonicSolfaDataService } from './tonic-solfa/tonic-solfa.data.service';
import { AudioSpaceDataService } from './audio-space/audio-space.data.service';
import { AllHymnsDataService } from './all-hymns/all-hymns.data.service';
import { AudioHymnsDataService } from './audio-hymns/audio-hymns.data.service';

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
        providers: [LyricsDataService],
        resolve: {
          editorsHymns: () => inject(LyricsDataService).getAllEditorsHymns$(),
        },
        data: {
          breadcrumb: RootLanguageResourceKey.LYRICS,
        },
        loadChildren: () =>
          import('./lyrics/lyrics.routes').then((mod) => mod.LYRICS_ROUTES),
      },
      {
        path: Route.BIBLE_REFERENCES,
        providers: [BibleReferencesDataService],
        resolve: {
          bibleReferences: () =>
            inject(BibleReferencesDataService).getAllBibleReferences$(),
        },
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
        providers: [TonicSolfaDataService],
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
        providers: [AudioHymnsDataService],
        resolve: {
          audioHymns: () => inject(AudioHymnsDataService).getAllAudioHymns$(),
        },
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
        providers: [AudioSpaceDataService],
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
        providers: [AllHymnsDataService],
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

import { Routes } from '@angular/router';
import { RootLanguageResourceKey, Route } from '@ccchymns.com/common';
import { BibleReferencesComponent } from './bible-references.component';


export const BIBLE_REFERENCES_ROUTES: Routes = [
  {
    path: Route.ROOT,
    component: BibleReferencesComponent,
    children: [
      {
        path: Route.ROOT,
        pathMatch: 'full',
        redirectTo: Route.YORUBA,
      },
      {
        path: Route.YORUBA,
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
        data: {
          breadcrumb: RootLanguageResourceKey.EGUN,
        },
        loadComponent: () =>
          import('./egun/egun.component').then(
            (mod) => mod.EgunComponent
          ),
      },
    ],
  },
];

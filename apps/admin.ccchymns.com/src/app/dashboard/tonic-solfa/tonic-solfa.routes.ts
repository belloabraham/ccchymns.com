import { Routes } from '@angular/router';
import { RootLanguageResourceKey, Route } from '@ccchymns.com/common';
import { TonicSolfaComponent } from './tonic-solfa.component';

export const TONIC_SOLFA_ROUTES: Routes = [
  {
    path: Route.ROOT,
    component: TonicSolfaComponent,
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
    ],
  },
];

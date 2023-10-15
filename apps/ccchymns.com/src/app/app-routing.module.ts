import { NgModule, isDevMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '../core/data/route';

const routes: Routes = [
  {
    path: Route.PRIVACY,
    loadComponent: () =>
      import('./privacy/privacy.component').then((mod) => mod.PrivacyComponent),
  },
  {
    path: Route.TERMS,
    loadComponent: () =>
      import('./terms/terms.component').then((mod) => mod.TermsComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./404/page-not-found.component').then(
        (mod) => mod.PageNotFoundComponent
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      // enableTracing: isDevMode(),
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '../core/data/route';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: Route.ROOT,
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: Route.ABOUT,
    loadComponent: () =>
      import('./about/about.component').then((mod) => mod.AboutComponent),
  },
  {
    path: Route.REFUND,
    loadComponent: () =>
      import('./refund/refund.component').then((mod) => mod.RefundComponent),
  },
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
      import('./404/page-not-found.component').then((mod) => mod.PageNotFoundComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

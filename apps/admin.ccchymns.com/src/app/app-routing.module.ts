import { NgModule, isDevMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '../core/data/route';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './404/page-not-found.component';

const routes: Routes = [
  {
    path: Route.ROOT,
    pathMatch: 'full',
    component: AuthComponent,
  },
  {
    path: Route.DASHBOARD,
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (mod) => mod.DashboardComponent
      ),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
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

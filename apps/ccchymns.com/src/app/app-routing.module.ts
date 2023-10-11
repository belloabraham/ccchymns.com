import { NgModule, isDevMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
      enableTracing: isDevMode(),
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

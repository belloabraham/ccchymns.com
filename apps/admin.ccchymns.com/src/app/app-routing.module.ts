import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AUTH_IJTOKEN } from '../core/auth';
import { map } from 'rxjs';
import { Route } from '@ccchymns.com/common';
import { StorageService } from './dashboard/storage.service';
import { CLOUD_STORAGE_IJTOKEN, CloudStorageService } from '../core';

const routes: Routes = [
  // {
  //   path: Route.ROOT,
  //   pathMatch: 'full',
  //   canMatch: [
  //     //Match route if authenticated user does not exist
  //     () =>
  //       inject(AUTH_TOKEN)
  //         .getAuthSate$()
  //         .pipe(
  //           map((userIsAuthenticated) => (userIsAuthenticated ? false : true))
  //         ),
  //   ],
  //   component: AuthComponent,
  // },
  {
    path: Route.ROOT,
    providers: [
      {
        provide: CLOUD_STORAGE_IJTOKEN,
        useClass: CloudStorageService,
      },
      StorageService,
    ],
    // canMatch: [
    //   //Match route only if authenticated user exist
    //   () =>
    //     inject(AUTH_TOKEN)
    //       .getAuthSate$()
    //       .pipe(
    //         map((userIsAuthenticated) => (userIsAuthenticated ? true : false))
    //       ),
    // ],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then(
        (mod) => mod.DASHBOARD_ROUTES
      ),
  },
  {
    path: Route.VERIFY_EMAIL,
    canMatch: [
      (router: Router) =>
        inject(AUTH_IJTOKEN)
          .getAuthSate$()
          .pipe(
            map((userIsAuthenticated) => {
              if (userIsAuthenticated) {
                router.navigate([Route.ROOT]);
                return false;
              }
              return true;
            })
          ),
    ],
    loadComponent: () =>
      import('./verify-email/verify-email.component').then(
        (mod) => mod.VerifyEmailComponent
      ),
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

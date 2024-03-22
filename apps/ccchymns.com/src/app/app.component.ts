import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';

import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  Router,
} from '@angular/router';
import { Observable, filter, map, merge, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  shouldShowPreloader$!: Observable<boolean>;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {

    const routerNavigationStoppedEvent$ = this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      map(() => false)
    );

    const isInitialAppStart$ = of(true);
    this.shouldShowPreloader$ = merge(
      routerNavigationStoppedEvent$,
      isInitialAppStart$
    );
  }

}

import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
  Language,
} from '@ccchymns.com/angular';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import {
  LoadLanguageResourceActionState,
  getLoadLanguageResourceActionGroup,
} from '../store/actions';
import { Observable, filter, map, merge, of } from 'rxjs';
import { IConnectionUtil } from '@ccchymns.com/core';
import { CONNECTION_UTIL_TOKEN } from '../core/di/connection-service.token';
import { LanguageResourceKey } from './i18n/language-resource-key';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  DisplayPercentage,
  DisplayService,
  DisplaySize,
} from '@ccchymns.com/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy, OnInit {
  private subscriptions = new SubSink();
  routerIsNavigating$!: Observable<boolean>;
  shouldShowPreloader$!: Observable<boolean>;
  deviceIsConnectedToTheInternet$!: Observable<boolean>;
  languageResourceKey = LanguageResourceKey;
  appNameKey = Language.APP_NAME;

  constructor(
    private ngrxStore: Store,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    @Inject(CONNECTION_UTIL_TOKEN)
    private connectionUtil: IConnectionUtil,
    private router: Router,
    private displayService: DisplayService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.observeChangesInDisplaySize();
  }

  ngOnInit(): void {
    this.loadLanguageResource(Language.ENGLISH, () => {
      this.onLanguageResourceLoaded();
    });

    this.deviceIsConnectedToTheInternet$ =
      this.connectionUtil.observeDeviceInternetConnectionState();

    const routerNavigationStartEvent$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationStart),
      map(() => true)
    );

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

    this.routerIsNavigating$ = merge(
      routerNavigationStoppedEvent$,
      routerNavigationStartEvent$
    );
  }

  private loadLanguageResource(
    language: string,
    onLanguageResourceLoaded: () => void
  ) {
    this.subscriptions.sink = this.languageResourceService
      .loadLanguageResource(language)
      .subscribe(() => {
        onLanguageResourceLoaded();
      });
  }

  onLanguageResourceLoaded() {
    const loadLanguageResourceActionState: LoadLanguageResourceActionState = {
      loaded: true,
    };
    const loadLanguageResourceAction =
      getLoadLanguageResourceActionGroup().loadLanguageResourceAction(
        loadLanguageResourceActionState
      );
    this.ngrxStore.dispatch(loadLanguageResourceAction);
  }

  private observeChangesInDisplaySize() {
    const displaySize = new Map([
      [Breakpoints.XSmall, 'XSmall'],
      [Breakpoints.Small, 'Small'],
      [Breakpoints.Medium, 'Medium'],
      [Breakpoints.Large, 'Large'],
      [Breakpoints.XLarge, 'XLarge'],
      ['(min-width: 2560px)', 'XXLarge'],
    ]);

    const displayPercent = new Map([
      [Breakpoints.XSmall, 0.85],
      [Breakpoints.Small, 0.85],
      [Breakpoints.Medium, 0.95],
      [Breakpoints.Large, 1.0],
      [Breakpoints.XLarge, 1.05],
      ['(min-width: 2560px)', 1.4],
    ]);
    this.subscriptions.sink = this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
        '(min-width: 2560px)',
      ])
      .subscribe((state) => {
        for (const query of Object.keys(state.breakpoints)) {
          if (state.breakpoints[query]) {
            this.displayService.size = (displaySize.get(query) ??
              'Large') as DisplaySize;
            this.displayService.percent = (displayPercent.get(query) ??
              1) as DisplayPercentage;
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

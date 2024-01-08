import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
  NgMaterialButtonModule,
  SharedModule,
} from '@ccchymns.com/angular';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { getLanguageLoadedSelector } from '../../store/selectors';
import { Config, DisplayService, RootLanguageResourceKey, Route, Size } from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from './i18n/language-resource-key';
import { CCCIconDirective, SidenavModule } from '@ccchymns.com/ui';
import { NgOptimizedImage } from '@angular/common';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { distinctUntilChanged, filter, map, merge } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

export interface IBreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    NgOptimizedImage,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    SidenavModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', './toggle-arrow.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnDestroy, OnInit {
  private subscriptions = new SubSink();
  displayIsMobile = false;
  config = Config;
  languageResourceKey = DashboardLanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  route = Route;

  openLyrics = signal(false);
  openAudio = signal(false);
  openTonicSolfa = signal(false);
  openBibleReference = signal(false);
  openAudioSpace = signal(false);

  routerIsNavigating!: Signal<boolean | undefined>;
  breadcrumbs: IBreadCrumb[] = [];
  readonly BREADCRUMB_ROUTE_DATA_KEY = 'breadcrumb';

  constructor(
    private ngrxStore: Store,
    private router: Router,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private title: Title,
    private displayService: DisplayService,
    private activatedRoute: ActivatedRoute
  ) {
    this.openSidebarCollapseButtonForTheInitialRoute();

    this.subscriptions.sink = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.breadcrumbs = this.createBreadCrumbs(this.activatedRoute);
      });

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

    this.routerIsNavigating = toSignal(
      merge(routerNavigationStoppedEvent$, routerNavigationStartEvent$)
    );

  }

  ngOnInit(): void {
    this.getIsDeviceDisplayMobileAsync();
    this.onLanguageResourceLoaded();
  }

  getIsDeviceDisplayMobileAsync() {
    this.subscriptions.sink = this.displayService.size$.subscribe(
      (displaySize) => {
        this.displayIsMobile =
          displaySize === Size.Small || displaySize === Size.XSmall;
      }
    );
  }

  openSidebarCollapseButtonForTheInitialRoute() {
    this.subscriptions.sink = this.activatedRoute.firstChild?.url.subscribe(
      (childUrlSegments) => {
        const initialChildRoutePath = childUrlSegments
          .map((segment) => segment.path)
          .join('');
        this.openLyrics.set(initialChildRoutePath === Route.LYRICS);
        this.openAudio.set(initialChildRoutePath === Route.AUDIO_HYMNS);
        this.openBibleReference.set(
          initialChildRoutePath === Route.BIBLE_REFERENCES
        );
        this.openTonicSolfa.set(initialChildRoutePath === Route.TONIC_SOLFA);
        this.openAudioSpace.set(initialChildRoutePath === Route.AUDIO_SPACE);
      }
    );
  }

  navigateBack() {
    window.history.back();
  }

  onLanguageResourceLoaded() {
    this.subscriptions.sink = this.ngrxStore
      .select(getLanguageLoadedSelector())
      .subscribe((loaded) => {
        if (loaded) {
          this.setPageTitle();
          this.getStringResourceForFirstRouteBreadcrumb();
        }
      });
  }

  private createBreadCrumbs(
    route: ActivatedRoute,
    url = '',
    breadcrumbs: IBreadCrumb[] = []
  ): IBreadCrumb[] {
    //If no routeConfig is available we are on the root path
    let path = route.routeConfig ? route.routeConfig.path : '';

    let label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data[this.BREADCRUMB_ROUTE_DATA_KEY]
        : '';

    //If label is not empty
    if (label) {
      label = this.languageResourceService.getString(label);
    }

    // If path contains a dynamic route such as ':id', get :id from path
    const dynamicRouteInPath = path?.split('/').pop();
    const isDynamicRoute = dynamicRouteInPath?.startsWith(':');

    if (isDynamicRoute && route.snapshot) {
      //Get id from :id
      const paramName = dynamicRouteInPath?.split(':')[1];
      //Get parameter of :id e.g like 2
      const dynamicRouteParameter = route.snapshot.params[paramName!];
      //Change path from lyrics/:id to lyrics/2
      path = path?.replace(dynamicRouteInPath!, dynamicRouteParameter);
      //Change label from Lyrics to Lyrics/2
      label = `${label}/${dynamicRouteParameter}`;
    }

    //In the routeConfig the complete path is not available,
    //so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label: label,
      url: nextUrl,
    };
    // Add only route with non-empty label to array of breadcrumb
    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    const thereAreMoreChildRoutes = !!route.firstChild;
    if (thereAreMoreChildRoutes) {
      return this.createBreadCrumbs(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

  private getStringResourceForFirstRouteBreadcrumb() {
    /* This is required after the string resources loads to translate the breadcrumb key to value as the breadcrumb for the initial route will not be translated, because language resource is not loaded yet */
    const newBreadCrumbs: IBreadCrumb[] = [];
    for (let index = 0; index < this.breadcrumbs.length; index++) {
      const breadcrumb = this.breadcrumbs[index];
      const languageResourceLabel = this.languageResourceService.getString(
        breadcrumb.label
      );
      newBreadCrumbs.push({
        ...breadcrumb,
        label: languageResourceLabel,
      });
    }
    this.breadcrumbs = newBreadCrumbs;
  }

  private setPageTitle() {
    const pageTitle = this.languageResourceService.getStringWithParameter(
      DashboardLanguageResourceKey.PAGE_TITLE,
      { value: Config.APP_NAME }
    );
    this.title.setTitle(pageTitle);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

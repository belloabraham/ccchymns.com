import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
  NgMatTooltipModule,
  NgMaterialButtonModule,
  SharedModule,
} from '@ccchymns.com/angular';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { getLanguageLoadedSelector } from '../../store/selectors';
import { Config, DisplayService, Route, Size } from '@ccchymns.com/common';
import { LanguageResourceKey } from './i18n/language-resource-key';
import { CCCIconDirective } from '@ccchymns.com/ui';
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
import { RootLanguageResourceKey } from '../../core/i18n/language-resource-key';
import { Observable, filter, map, merge } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    NgOptimizedImage,
    NgMatTooltipModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnDestroy, OnInit {
  private subscriptions = new SubSink();
  isMobile = false;
  openSideBar = false;
  config = Config;
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  route = Route;

  openLyrics = false;
  openAudio = false;
  openTonicSolfa = false;
  openBibleReference = false;
  openAudioSpace = false;

  routerIsNavigating$!: Observable<boolean>;

  constructor(
    private ngrxStore: Store,
    private router: Router,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private title: Title,
    private displayService: DisplayService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getIsDeviceDisplayMobileAsync();

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

    this.routerIsNavigating$ = merge(
      routerNavigationStoppedEvent$,
      routerNavigationStartEvent$
    );

    this.toggleSidebarDropdownForActivatedRoute();
    this.onLanguageResourceLoad();
    this.collapseMobileSideBarOnNavigating(routerNavigationStartEvent$);
  }

  getIsDeviceDisplayMobileAsync() {
    this.subscriptions.sink = this.displayService.size$.subscribe(
      (displaySize) => {
        this.isMobile =
          displaySize === Size.Small || displaySize === Size.XSmall;
      }
    );
  }

  toggleSidebarDropdownForActivatedRoute() {
    this.subscriptions.sink = this.activatedRoute.firstChild?.url.subscribe(
      (childUrlSegments) => {
        const initialChildRoutePath = childUrlSegments
          .map((segment) => segment.path)
          .join('');
        this.openLyrics = initialChildRoutePath === Route.LYRICS;
        this.openAudio = initialChildRoutePath === Route.AUDIO_HYMNS;
        this.openBibleReference =
          initialChildRoutePath === Route.BIBLE_REFERENCES;
        this.openTonicSolfa = initialChildRoutePath === Route.TONIC_SOLFA;
        this.openAudioSpace = initialChildRoutePath === Route.AUDIO_SPACE;
      }
    );
  }

  collapseMobileSideBarOnNavigating(
    routerNavigationStartEvent$: Observable<boolean>
  ) {
    this.subscriptions.sink = routerNavigationStartEvent$.subscribe(() => {
      if (this.isMobile && this.openSideBar) {
        this.openSideBar = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['..']);
  }

  onLanguageResourceLoad() {
    this.subscriptions.sink = this.ngrxStore
      .select(getLanguageLoadedSelector())
      .subscribe((loaded) => {
        if (loaded) {
          this.setPageTitle();
        }
      });
  }

  private setPageTitle() {
    const pageTitle = this.languageResourceService.getStringWithParameter(
      LanguageResourceKey.PAGE_TITLE,
      { value: Config.APP_NAME }
    );
    this.title.setTitle(pageTitle);
  }

  toggleSideBar() {
    this.openSideBar = !this.openSideBar;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

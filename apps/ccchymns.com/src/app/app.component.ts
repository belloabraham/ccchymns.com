import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ILanguageResourceService, LANGUAGE_RESOURCE_TOKEN, Language } from '@ccchymns.com/angular';
import { SubSink } from 'subsink';
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
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink();
  shouldShowPreloader$!: Observable<boolean>;

  constructor(
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLanguageResource(Language.ENGLISH, () => {
      this.onLanguageLoaded();
    });

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

  onLanguageLoaded() {
    this.languageResourceService.setLanguageResourceLoadedSuccessfully(true);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

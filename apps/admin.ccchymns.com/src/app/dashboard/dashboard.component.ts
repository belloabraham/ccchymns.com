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
import { Config, DisplayService, Size } from '@ccchymns.com/common';
import { LanguageResourceKey } from './i18n/language-resource-key';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
    RouterLink
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
  openLyrics = true;

  constructor(
    private ngrxStore: Store,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private title: Title,
    private displayService: DisplayService
  ) {}

  ngOnInit(): void {
    this.subscriptions.sink = this.displayService.size$.subscribe(
      (displaySize) => {
        this.isMobile =
          displaySize === Size.Small || displaySize === Size.XSmall;
      }
    );
    this.onLanguageResourceLoad();
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

import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CCCHymnsPageNotFoundComponent,
  LanguageResourceKey,
} from '@ccchymns.com/common';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
} from '@ccchymns.com/angular';
import { Title } from '@angular/platform-browser';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import { getLanguageLoadedSelector } from '../../store/selectors/language-resource.selector';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, CCCHymnsPageNotFoundComponent],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink();

  constructor(
    private ngrxStore: Store,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.onLanguageResourceLoad();
  }

  onLanguageResourceLoad() {
    this.subscriptions.sink = this.ngrxStore
      .select(getLanguageLoadedSelector())
      .subscribe((loaded) => {
        if (loaded) {
          const pageTitle = this.languageResourceService.getString(
            LanguageResourceKey.PAGE_TITLE
          );
          this.title.setTitle(pageTitle);
        }
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

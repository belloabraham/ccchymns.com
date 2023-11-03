import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CCCPageNotFoundComponent,
  LanguageResourceKey,
} from '@ccchymns.com/common';
import { getLanguageLoadedSelector } from '../../store/selectors';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
} from '@ccchymns.com/angular';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, CCCPageNotFoundComponent],
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

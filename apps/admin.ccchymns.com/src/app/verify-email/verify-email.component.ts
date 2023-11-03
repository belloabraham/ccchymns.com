import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
} from '@ccchymns.com/angular';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { getLanguageLoadedSelector } from '../../store/selectors';
import { LanguageResourceKey } from './i18n/language-resource-key';
import { Config } from '@ccchymns.com/common';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyEmailComponent implements OnInit, OnDestroy {
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
          const pageTitle = this.languageResourceService.getStringWithParameter(
            LanguageResourceKey.PAGE_TITLE,
            { value: Config.APP_NAME }
          );
          this.title.setTitle(pageTitle);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

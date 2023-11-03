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
import { Preference } from '../../core/data/preference';
import { AUTH_TOKEN, IAuth } from '../../core/auth';
import { Router } from '@angular/router';
import { Route } from '../../core/data/route';
import { LoggerUtil } from '@ccchymns.com/core';

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
  private signInMail = localStorage.getItem(Preference.SIGN_IN_MAIL);

  constructor(
    private ngrxStore: Store,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private title: Title,
    @Inject(AUTH_TOKEN) private auth: IAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onLanguageResourceLoad();
    if (this.signInMail) {
      this.verifyEmailWithLink(this.signInMail);
    }
  }

  private async verifyEmailWithLink(email: string) {
    try {
      await this.auth.signInWithEmailLink(email, location.href);
      localStorage.removeItem(Preference.SIGN_IN_MAIL);
      this.router.navigate([Route.ROOT]);
    } catch (error: any) {
      LoggerUtil.error(this, this.verifyEmailWithLink.name, error);
    }
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

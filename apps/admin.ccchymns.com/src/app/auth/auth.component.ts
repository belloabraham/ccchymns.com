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
  NgMaterialButtonModule,
  NgMaterialElevationDirective,
  SharedModule,
} from '@ccchymns.com/angular';
import { SubSink } from 'subsink';
import { AUTH_TOKEN, IAuth } from '../../core/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { getLanguageLoadedSelector } from '../../store/selectors';
import { LanguageResourceKey } from './i18n/language-resource-key';
import {
  Config,
  DisplayService,
  RootLanguageResourceKey,
  Route,
} from '@ccchymns.com/common';
import { NgOptimizedImage } from '@angular/common';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlertDialog, LoggerUtil, Regex, Shield } from '@ccchymns.com/core';
import { Preference } from '../../core/data/preference';
import { AuthError } from '../../core/auth/auth-error';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    SharedModule,
    NgMaterialButtonModule,
    NgMaterialElevationDirective,
    NgOptimizedImage,
    ReactiveFormsModule,
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnDestroy, OnInit {
  private subscriptions = new SubSink();
  private authState$ = this.auth.getAuthSate$();
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;

  formSubmitted = false;
  // loginForm!: FormGroup;
  emailFC = new FormControl<string | null>(null, [
    Validators.required,
    Validators.pattern(Regex.EMAIL),
  ]);

  loginErrorTitle = '';
  ok = '';

  constructor(
    @Inject(AUTH_TOKEN) private auth: IAuth,
    private router: Router,
    private ngrxStore: Store,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private title: Title,
    private displayService: DisplayService
  ) {
    this.subscriptions.sink = this.authState$.subscribe((authenticatedUser) => {
      if (authenticatedUser) {
        this.router.navigate([Route.ROOT]);
      }
    });
  }

  ngOnInit(): void {
    this.onLanguageResourceLoad();
  }

  emailIsInvalid() {
    return this.formSubmitted && this.emailFC.invalid;
  }

  onLanguageResourceLoad() {
    this.subscriptions.sink = this.ngrxStore
      .select(getLanguageLoadedSelector())
      .subscribe((loaded) => {
        if (loaded) {
          this.setPageTitle();
          this.getStringResources();
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

  private getStringResources() {
    this.loginErrorTitle = this.languageResourceService.getString(
      RootLanguageResourceKey.LOGIN_ERROR_TITLE
    );
    this.ok = this.languageResourceService.getString(
      RootLanguageResourceKey.OK
    );
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.emailFC.valid) {
      const email = this.emailFC.value?.trim();
      this.sendLoginLinkTo(email!);
    }
  }

  private async sendLoginLinkTo(email: string) {
    if (this.auth.emailIsAuthorized(email)) {
      await this.sendSignInLinkTo(email);
    }

    if (!this.auth.emailIsAuthorized(email)) {
      const unAuthorizedLoginErrorMsg = this.languageResourceService.getString(
        LanguageResourceKey.UNAUTHORIZED_LOGIN_ERROR_MSG
      );
      AlertDialog.error(
        unAuthorizedLoginErrorMsg,
        this.loginErrorTitle,
        this.ok
      );
    }
  }

  async sendSignInLinkTo(email: string) {
    const responsiveSvgSize = this.displayService.percentage * 60;
    Shield.standard(responsiveSvgSize);
    try {
      await this.auth.sendSignInLinkTo(email);
      localStorage.setItem(Preference.SIGN_IN_MAIL, email);
      this.showMailSentSuccessAlert(email);
    } catch (error: any) {
      LoggerUtil.error(this, this.sendSignInLinkTo.name, error);
      const message = AuthError.message(error.code);
      AlertDialog.error(message, this.loginErrorTitle, this.ok);
    } finally {
      Shield.remove();
    }
  }

  private showMailSentSuccessAlert(email: string) {
    const title = this.languageResourceService.getString(
      LanguageResourceKey.LOGIN_LINK_SENT_TITLE
    );
    const message = this.languageResourceService.getStringWithParameter(
      LanguageResourceKey.LOGIN_LINK_SENT_MSG,
      {
        value: email,
      }
    );

    AlertDialog.success(message, title, this.ok, {
      plainText: false,
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

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
import { Route } from '../../core/data/route';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { getLanguageLoadedSelector } from '../../store/selectors';
import { LanguageResourceKey } from './i18n/language-resource-key';
import { Config, DisplayService } from '@ccchymns.com/common';
import { NgOptimizedImage } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlertDialog, LoggerUtil, Regex, Shield } from '@ccchymns.com/core';
import { Preference } from '../../core/data/preference';
import { RootLanguageResourceKey } from '../../core/i18n/language-resource-key';
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

  formSubmitted = false;
  loginForm!: FormGroup;
  emailFormControl = new FormControl(undefined, [
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
    this.subscriptions.sink = this.auth.getAuthSate$().subscribe((user) => {
      if (user) {
        this.router.navigate([Route.ROOT]);
      }
    });
  }

  private createLoginForm() {
    this.loginForm = new FormGroup({
      email: this.emailFormControl,
    });
  }

  ngOnInit(): void {
    this.createLoginForm();
    this.onLanguageResourceLoad();
  }

  formIsInvalid() {
    return (
      this.formSubmitted &&
      this.emailFormControl.invalid &&
      (this.emailFormControl.dirty || this.emailFormControl.touched)
    );
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
      LanguageResourceKey.LOGIN_ERROR_TITLE
    );
    this.ok = this.languageResourceService.getString(
      RootLanguageResourceKey.OK
    );
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email.trim();

      if (this.emailIsAuthorized(email)) {
        await this.sendSignInLinkTo(email);
      }

      if (!this.emailIsAuthorized(email)) {
        const unAuthorizedLoginErrorMsg =
          this.languageResourceService.getString(
            LanguageResourceKey.UNAUTHORIZED_LOGIN_ERROR_MSG
          );
        AlertDialog.error(
          unAuthorizedLoginErrorMsg,
          this.loginErrorTitle,
          this.ok
        );
      }
    }
  }

  private emailIsAuthorized(email: string) {
    return email.endsWith(Config.DOMAIN);
  }

  async sendSignInLinkTo(email: string) {
    const svgSize = this.displayService.percent * 60;
    Shield.standard(svgSize);
    try {
      await this.auth.sendSignInLinkToEmail(email);
      localStorage.setItem(Preference.SIGN_IN_MAIL, email);
      Shield.remove();
      this.showMailSentSuccessAlert(email);
    } catch (error: any) {
      Shield.remove();
      LoggerUtil.error(this, this.sendSignInLinkTo.name, error);
      const message = AuthError.message(error.code);
      AlertDialog.error(message, this.loginErrorTitle, this.ok);
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

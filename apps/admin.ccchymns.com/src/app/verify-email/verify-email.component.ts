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
  NgMaterialButtonModule,
  NgMaterialElevationDirective,
} from '@ccchymns.com/angular';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { getLanguageLoadedSelector } from '../../store/selectors';
import { LanguageResourceKey } from './i18n/language-resource-key';
import { Config, DisplayService, Route } from '@ccchymns.com/common';
import { Preference } from '../../core/data/preference';
import { AUTH_TOKEN, IAuth } from '../../core/auth';
import { Router, RouterLink } from '@angular/router';
import { AlertDialog, LoggerUtil, Regex, Shield } from '@ccchymns.com/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { RootLanguageResourceKey } from '../../core/i18n/language-resource-key';
import { AuthError } from '../../core/auth/auth-error';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [
    SharedModule,
    NgMaterialButtonModule,
    NgMaterialElevationDirective,
    NgOptimizedImage,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyEmailComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink();
  private signInMail = localStorage.getItem(Preference.SIGN_IN_MAIL);
  rootLanguageResourceKey = RootLanguageResourceKey;
  languageResourceKey = LanguageResourceKey;
  root = Route.ROOT;

  formSubmitted = false;
  verifyEmailForm!: FormGroup;
  emailFormControl = new FormControl(undefined, [
    Validators.required,
    Validators.pattern(Regex.EMAIL),
  ]);
  loginErrorTitle = '';
  ok = '';

  constructor(
    private ngrxStore: Store,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private title: Title,
    @Inject(AUTH_TOKEN) private auth: IAuth,
    private router: Router,
    private displayService: DisplayService
  ) {}

  ngOnInit(): void {
    this.onLanguageResourceLoad();
    if (this.signInMail) {
      this.verifyEmail(this.signInMail);
    }
    this.createVerifyEmailForm();
  }

  emailIsValid() {
    return this.formSubmitted && this.emailFormControl.invalid;
  }

  private async verifyEmail(email: string) {
    const responsiveSvgSize = this.displayService.percentage * 60;
    Shield.standard(responsiveSvgSize);
    try {
      if (!this.auth.emailIsAuthorized(email)) {
        throw new Error('UnAuthorized email');
      }
      await this.auth.signInWithEmailLink(email, location.href);
      localStorage.removeItem(Preference.SIGN_IN_MAIL);
      this.router.navigate([Route.ROOT]);
    } catch (error: any) {
      const message = AuthError.message(error.code);
      AlertDialog.error(message, this.loginErrorTitle, this.ok);
      LoggerUtil.error(this, this.onSubmit.name, error);
    } finally {
      Shield.remove();
    }
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.verifyEmailForm.valid) {
      const email = this.verifyEmailForm.value.email.trim();
      this.verifyEmail(email);
    }
  }

  private createVerifyEmailForm() {
    this.verifyEmailForm = new FormGroup({
      email: this.emailFormControl,
    });
  }

  onLanguageResourceLoad() {
    this.subscriptions.sink = this.ngrxStore
      .select(getLanguageLoadedSelector())
      .subscribe((loaded) => {
        if (loaded) {
          this.setPageTitle();
          this.getStringResource();
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

  private getStringResource() {
    this.loginErrorTitle = this.languageResourceService.getString(
      RootLanguageResourceKey.LOGIN_ERROR_TITLE
    );
    this.ok = this.languageResourceService.getString(
      RootLanguageResourceKey.OK
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

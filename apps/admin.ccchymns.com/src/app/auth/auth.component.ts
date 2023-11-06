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
import { Config } from '@ccchymns.com/common';
import { NgOptimizedImage } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Regex } from '@ccchymns.com/core';

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

  constructor(
    @Inject(AUTH_TOKEN) private auth: IAuth,
    private router: Router,
    private ngrxStore: Store,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private title: Title
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

  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      const emailValue = this.loginForm.value.email;
    }
  }
}

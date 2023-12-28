import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
import {
  LANGUAGE_RESOURCE_TOKEN,
  LanguageResourceService,
  NgMaterialButtonModule,
  NgMaterialElevationDirective,
  SharedModule,
} from '@ccchymns.com/angular';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayService } from '@ccchymns.com/common';
import { Router } from '@angular/router';
import { AUTH_TOKEN, AuthService } from '../../core/auth';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AuthComponent,
        SharedModule,
        NgMaterialButtonModule,
        NgMaterialElevationDirective,
        NgOptimizedImage,
        ReactiveFormsModule,
      ],
      providers: [
        DisplayService,
        Router,
        Title,
        Store,
        {
          provide: AUTH_TOKEN,
          useClass: AuthService,
        },
        {
          provide: LANGUAGE_RESOURCE_TOKEN,
          useClass:LanguageResourceService
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

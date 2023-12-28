import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyEmailComponent } from './verify-email.component';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LANGUAGE_RESOURCE_TOKEN, LanguageResourceService, NgMaterialButtonModule, NgMaterialElevationDirective } from '@ccchymns.com/angular';
import { SharedModule } from '@ccchymns.com/angular';
import { DisplayService } from '@ccchymns.com/common';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AUTH_TOKEN, AuthService } from '../../core/auth';

describe('VerifyEmailComponent', () => {
  let component: VerifyEmailComponent;
  let fixture: ComponentFixture<VerifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        VerifyEmailComponent,
        SharedModule,
        NgMaterialButtonModule,
        NgMaterialElevationDirective,
        NgOptimizedImage,
        ReactiveFormsModule,
        RouterLink,
      ],
      providers: [
        DisplayService,
        Router,
        Title,
        Store,
        {
          provide: AUTH_TOKEN,
          useValue: AuthService,
        },
        {
          provide: LANGUAGE_RESOURCE_TOKEN,
          useClass: LanguageResourceService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

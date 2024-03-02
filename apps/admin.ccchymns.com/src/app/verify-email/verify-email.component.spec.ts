import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyEmailComponent } from './verify-email.component';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LANGUAGE_RESOURCE_TOKEN,
  LanguageResourceService,
  NgMaterialButtonModule,
  NgMaterialElevationDirective,
} from '@ccchymns.com/angular';
import { SharedModule } from '@ccchymns.com/angular';
import { DisplayService } from '@ccchymns.com/common';
import { AUTH_IJTOKEN, AuthService } from '../../core';
import { provideMockStore } from '@ngrx/store/testing';
import { getTranslocoTestingModule, initialState } from '../mock';
import { RouterTestingModule } from '@angular/router/testing';

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
        RouterTestingModule,
        getTranslocoTestingModule(),
      ],
      providers: [
        DisplayService,
        provideMockStore({ initialState }),
        {
          provide: AUTH_IJTOKEN,
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

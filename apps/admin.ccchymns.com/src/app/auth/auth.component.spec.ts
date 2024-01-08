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
import { AUTH_TOKEN } from '../../core/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoTestingModule, initialState } from '../mock';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

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
        RouterTestingModule,
        getTranslocoTestingModule(),
      ],
      providers: [
        provideMockStore({ initialState }),
        DisplayService,
        {
          provide: AUTH_TOKEN,
          useValue: {
            getAuthSate$: () => {
              return of(null);
            },
          },
        },
        {
          provide: LANGUAGE_RESOURCE_TOKEN,
          useClass: LanguageResourceService,
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

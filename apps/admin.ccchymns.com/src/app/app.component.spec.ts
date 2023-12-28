import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from './app.module';
import { Store, StoreModule } from '@ngrx/store';
import { languageLoadedFeature } from '../store/selectors/language-resource.selector';
import { Router } from '@angular/router';
import { DisplayService } from '@ccchymns.com/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  LANGUAGE_RESOURCE_TOKEN,
  LanguageResourceService,
} from '@ccchymns.com/angular';
import { CONNECTION_UTIL_TOKEN } from '../core/di/connection-service.token';
import { ConnectionUtil } from '@ccchymns.com/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(languageLoadedFeature),
      ],
      declarations: [AppComponent],
      providers: [
        Router,
        DisplayService,
        BreakpointObserver,
        Store,
        {
          provide: CONNECTION_UTIL_TOKEN,
          useClass: ConnectionUtil,
        },
        {
          provide: LANGUAGE_RESOURCE_TOKEN,
          useClass: LanguageResourceService,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

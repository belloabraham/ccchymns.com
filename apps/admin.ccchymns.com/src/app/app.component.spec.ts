import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from './app.module';
import { DisplayService } from '@ccchymns.com/common';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import {
  LANGUAGE_RESOURCE_TOKEN,
  LanguageResourceService,
} from '@ccchymns.com/angular';
import { CONNECTION_UTIL_TOKEN } from '../core/di/connection-service.token';
import { ConnectionUtil } from '@ccchymns.com/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from './mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule,
        HttpClientTestingModule,
        LayoutModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
      ],
      declarations: [AppComponent],
      providers: [
        DisplayService,
        BreakpointObserver,
        provideMockStore({ initialState }),
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorStateComponent } from './error-state.component';
import { TranslocoModule } from '@ngneat/transloco';
import { NgMaterialButtonModule, NgMaterialElevationDirective, TranslocoRootModule } from '@ccchymns.com/angular';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ErrorStateComponent', () => {
  let component: ErrorStateComponent;
  let fixture: ComponentFixture<ErrorStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ErrorStateComponent,
        TranslocoModule,
        NgMaterialButtonModule,
        NgOptimizedImage,
        NgMaterialElevationDirective,
        HttpClientTestingModule,
        TranslocoRootModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

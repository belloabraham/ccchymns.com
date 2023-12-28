import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateComponent } from './empty-state.component';
import { TranslocoModule } from '@ngneat/transloco';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgOptimizedImage } from '@angular/common';
import { TranslocoRootModule } from '@ccchymns.com/angular';

describe('EmptySateComponent', () => {
  let component: EmptyStateComponent;
  let fixture: ComponentFixture<EmptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateComponent, TranslocoModule, NgOptimizedImage, HttpClientTestingModule, TranslocoRootModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

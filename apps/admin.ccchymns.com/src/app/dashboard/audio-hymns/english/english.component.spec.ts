import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishComponent } from './english.component';
import { SharedModule } from '../../shared';
import { CommonComponent } from '../shared/common/common.component';
import { getTranslocoTestingModule } from '../../../mock';

describe('EnglishComponent', () => {
  let component: EnglishComponent;
  let fixture: ComponentFixture<EnglishComponent>;

    const observe = jest.fn();
    const unobserve = jest.fn();

    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    })) as any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EnglishComponent,
        SharedModule,
        CommonComponent,
        getTranslocoTestingModule(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

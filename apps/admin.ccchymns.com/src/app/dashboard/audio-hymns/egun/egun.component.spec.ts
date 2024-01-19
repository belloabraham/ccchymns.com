import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgunComponent } from './egun.component';
import { SharedModule } from '../../shared';
import { CommonComponent } from '../shared/common/common.component';
import { getTranslocoTestingModule } from '../../../mock';

describe('EgunComponent', () => {
  let component: EgunComponent;
  let fixture: ComponentFixture<EgunComponent>;

  const observe = jest.fn();
  const unobserve = jest.fn();

  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
  })) as any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EgunComponent,
        SharedModule,
        CommonComponent,
        getTranslocoTestingModule(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EgunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

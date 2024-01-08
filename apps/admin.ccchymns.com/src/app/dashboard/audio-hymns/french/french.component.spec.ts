import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchComponent } from './french.component';
import { getTranslocoTestingModule } from '../../../mock';

describe('FrenchComponent', () => {
  let component: FrenchComponent;
  let fixture: ComponentFixture<FrenchComponent>;

   const observe = jest.fn();
   const unobserve = jest.fn();

   window.IntersectionObserver = jest.fn(() => ({
     observe,
     unobserve,
   })) as any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrenchComponent, getTranslocoTestingModule()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

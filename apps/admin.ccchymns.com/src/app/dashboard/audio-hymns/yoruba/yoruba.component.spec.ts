import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YorubaComponent } from './yoruba.component';
import { getTranslocoTestingModule } from '../../../mock';
import { CommonComponent } from '../shared/common/common.component';


describe('YorubaComponent', () => {
  let component: YorubaComponent;
  let fixture: ComponentFixture<YorubaComponent>;

   const observe = jest.fn();
   const unobserve = jest.fn();

   window.IntersectionObserver = jest.fn(() => ({
     observe,
     unobserve,
   })) as any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YorubaComponent, CommonComponent, getTranslocoTestingModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(YorubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

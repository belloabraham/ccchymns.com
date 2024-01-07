import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YorubaComponent } from './yoruba.component';
import { CommonComponent } from '../shared/common/common.component';

describe('YorubaComponent', () => {
  let component: YorubaComponent;
  let fixture: ComponentFixture<YorubaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YorubaComponent, CommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YorubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

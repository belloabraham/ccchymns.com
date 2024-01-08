import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonComponent } from './common.component';
import { getTranslocoTestingModule } from '../../../../mock';

describe('CommonComponent', () => {
  let component: CommonComponent;
  let fixture: ComponentFixture<CommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonComponent, getTranslocoTestingModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

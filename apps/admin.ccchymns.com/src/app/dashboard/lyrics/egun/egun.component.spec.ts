import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgunComponent } from './egun.component';
import { CommonComponent } from '../shared/common/common.component';
import { getTranslocoTestingModule } from '../../../mock';

describe('EgunComponent', () => {
  let component: EgunComponent;
  let fixture: ComponentFixture<EgunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgunComponent, CommonComponent, getTranslocoTestingModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(EgunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

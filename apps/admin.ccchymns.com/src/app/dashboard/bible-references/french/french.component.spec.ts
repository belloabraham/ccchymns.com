import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchComponent } from './french.component';
import { CommonComponent } from '../shared/common/common.component';
import { getTranslocoTestingModule } from '../../../mock';

describe('FrenchComponent', () => {
  let component: FrenchComponent;
  let fixture: ComponentFixture<FrenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrenchComponent, CommonComponent, getTranslocoTestingModule()]
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

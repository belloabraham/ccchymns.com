import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishComponent } from './english.component';
import { SharedModule } from '../../shared';
import { CommonComponent } from '../shared/common/common.component';

describe('EnglishComponent', () => {
  let component: EnglishComponent;
  let fixture: ComponentFixture<EnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishComponent, SharedModule, CommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

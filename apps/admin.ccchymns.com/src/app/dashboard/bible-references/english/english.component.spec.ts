import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishComponent } from './english.component';
import { getTranslocoTestingModule } from '../../../mock';

describe('EnglishComponent', () => {
  let component: EnglishComponent;
  let fixture: ComponentFixture<EnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishComponent, getTranslocoTestingModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(EnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

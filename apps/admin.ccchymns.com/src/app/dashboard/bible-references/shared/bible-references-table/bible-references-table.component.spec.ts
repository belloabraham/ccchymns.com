import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleReferencesTableComponent } from './bible-references-table.component';
import { getTranslocoTestingModule } from '../../../../mock';

describe('BibleReferencesTableComponent', () => {
  let component: BibleReferencesTableComponent;
  let fixture: ComponentFixture<BibleReferencesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleReferencesTableComponent, getTranslocoTestingModule()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibleReferencesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

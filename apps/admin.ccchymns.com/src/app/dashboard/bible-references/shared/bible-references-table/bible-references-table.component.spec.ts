import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleReferencesTableComponent } from './bible-references-table.component';

describe('BibleReferencesTableComponent', () => {
  let component: BibleReferencesTableComponent;
  let fixture: ComponentFixture<BibleReferencesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleReferencesTableComponent]
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleReferencesPlaceholderComponent } from './bible-references-placeholder.component';

describe('BibleReferencesPlaceholderComponent', () => {
  let component: BibleReferencesPlaceholderComponent;
  let fixture: ComponentFixture<BibleReferencesPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleReferencesPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BibleReferencesPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

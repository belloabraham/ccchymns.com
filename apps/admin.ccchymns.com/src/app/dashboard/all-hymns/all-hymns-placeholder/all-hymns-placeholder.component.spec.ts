import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHymnsPlaceholderComponent } from './all-hymns-placeholder.component';

describe('AllHymnsPlaceholderComponent', () => {
  let component: AllHymnsPlaceholderComponent;
  let fixture: ComponentFixture<AllHymnsPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllHymnsPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllHymnsPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

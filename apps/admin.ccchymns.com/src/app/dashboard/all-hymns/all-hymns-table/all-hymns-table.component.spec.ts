import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHymnsTableComponent } from './all-hymns-table.component';

describe('AllHymnsTableComponent', () => {
  let component: AllHymnsTableComponent;
  let fixture: ComponentFixture<AllHymnsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllHymnsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllHymnsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

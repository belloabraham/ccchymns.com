import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllHymnsComponent } from './all-hymns.component';

describe('AllHymnsComponent', () => {
  let component: AllHymnsComponent;
  let fixture: ComponentFixture<AllHymnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllHymnsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllHymnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

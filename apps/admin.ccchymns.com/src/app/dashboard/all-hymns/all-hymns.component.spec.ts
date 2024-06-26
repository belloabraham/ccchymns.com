import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllHymnsComponent } from './all-hymns.component';
import { getTranslocoTestingModule } from '../../mock';

describe('AllHymnsComponent', () => {
  let component: AllHymnsComponent;
  let fixture: ComponentFixture<AllHymnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllHymnsComponent, getTranslocoTestingModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(AllHymnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

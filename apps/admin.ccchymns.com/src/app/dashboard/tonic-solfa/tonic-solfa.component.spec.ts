import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TonicSolfaComponent } from './tonic-solfa.component';

describe('TonicSolfaComponent', () => {
  let component: TonicSolfaComponent;
  let fixture: ComponentFixture<TonicSolfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TonicSolfaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TonicSolfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CCCPageNotFoundComponent } from './ccc-page-not-found.component';

describe('CCCPageNotFoundComponent', () => {
  let component: CCCPageNotFoundComponent;
  let fixture: ComponentFixture<CCCPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCCPageNotFoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CCCPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

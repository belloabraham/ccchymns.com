import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CccPageNotFoundComponent } from './ccc-page-not-found.component';

describe('CccPageNotFoundComponent', () => {
  let component: CccPageNotFoundComponent;
  let fixture: ComponentFixture<CccPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CccPageNotFoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CccPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

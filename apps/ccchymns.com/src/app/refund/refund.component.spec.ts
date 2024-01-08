import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefundComponent } from './refund.component';
import { getTranslocoTestingModule } from '../mock';

describe('RefundComponent', () => {
  let component: RefundComponent;
  let fixture: ComponentFixture<RefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefundComponent, getTranslocoTestingModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(RefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CCCRoundedBadgeComponent } from './rounded-badge.component';

describe('BadgeComponent', () => {
  let component: CCCRoundedBadgeComponent;
  let fixture: ComponentFixture<CCCRoundedBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCCRoundedBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CCCRoundedBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

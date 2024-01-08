import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCCDrawerComponent } from './ccc-drawer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CCCDrawerComponent', () => {
  let component: CCCDrawerComponent;
  let fixture: ComponentFixture<CCCDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCCDrawerComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CCCDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCCSidenavComponent } from './ccc-sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CCCSidenavComponent', () => {
  let component: CCCSidenavComponent;
  let fixture: ComponentFixture<CCCSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCCSidenavComponent],
      imports:[BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCCSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

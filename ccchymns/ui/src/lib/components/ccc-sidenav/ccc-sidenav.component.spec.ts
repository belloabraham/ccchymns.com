import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCCSidenavComponent } from './ccc-sidenav.component';

describe('CCCSidenavComponent', () => {
  let component: CCCSidenavComponent;
  let fixture: ComponentFixture<CCCSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCCSidenavComponent]
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

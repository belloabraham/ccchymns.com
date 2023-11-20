import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySateComponent } from './empty-sate.component';

describe('EmptySateComponent', () => {
  let component: EmptySateComponent;
  let fixture: ComponentFixture<EmptySateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptySateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptySateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

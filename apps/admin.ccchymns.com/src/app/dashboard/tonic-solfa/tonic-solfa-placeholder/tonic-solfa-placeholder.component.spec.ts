import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonicSolfaPlaceholderComponent } from './tonic-solfa-placeholder.component';

describe('TonicSolfaPlaceholderComponent', () => {
  let component: TonicSolfaPlaceholderComponent;
  let fixture: ComponentFixture<TonicSolfaPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TonicSolfaPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TonicSolfaPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonicSolfaTableComponent } from './tonic-solfa-table.component';

describe('TonicSolfaTableComponent', () => {
  let component: TonicSolfaTableComponent;
  let fixture: ComponentFixture<TonicSolfaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TonicSolfaTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TonicSolfaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonicSolfaDialogComponent } from './tonic-solfa-dialog.component';

describe('TonicSolfaDialogComponent', () => {
  let component: TonicSolfaDialogComponent;
  let fixture: ComponentFixture<TonicSolfaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TonicSolfaDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TonicSolfaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

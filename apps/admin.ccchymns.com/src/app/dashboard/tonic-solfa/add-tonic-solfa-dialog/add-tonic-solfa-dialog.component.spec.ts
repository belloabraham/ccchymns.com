import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTonicSolfaDialogComponent } from './add-tonic-solfa-dialog.component';

describe('TonicSolfaDialogComponent', () => {
  let component: AddTonicSolfaDialogComponent;
  let fixture: ComponentFixture<AddTonicSolfaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTonicSolfaDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTonicSolfaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

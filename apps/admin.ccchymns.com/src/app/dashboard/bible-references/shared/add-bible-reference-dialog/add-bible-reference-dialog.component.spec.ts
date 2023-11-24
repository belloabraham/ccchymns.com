import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBibleReferenceDialogComponent } from './add-bible-reference-dialog.component';

describe('AddBibleReferenceDialogComponent', () => {
  let component: AddBibleReferenceDialogComponent;
  let fixture: ComponentFixture<AddBibleReferenceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBibleReferenceDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBibleReferenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

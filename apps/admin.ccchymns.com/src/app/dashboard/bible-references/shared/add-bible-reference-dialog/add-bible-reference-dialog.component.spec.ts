import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBibleReferenceDialogComponent } from './add-bible-reference-dialog.component';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule, TranslocoRootModule } from '@ccchymns.com/angular';
import { TextFieldModule } from '@angular/cdk/text-field';

describe('AddBibleReferenceDialogComponent', () => {
  let component: AddBibleReferenceDialogComponent;
  let fixture: ComponentFixture<AddBibleReferenceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBibleReferenceDialogComponent, SharedModule, NgMaterialButtonModule, TextFieldModule, TranslocoRootModule]
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

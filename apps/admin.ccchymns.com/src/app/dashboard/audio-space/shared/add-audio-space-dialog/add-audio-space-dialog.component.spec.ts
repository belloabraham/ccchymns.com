import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAudioSpaceDialogComponent } from './add-audio-space-dialog.component';

describe('AddAudioSpaceDialogComponent', () => {
  let component: AddAudioSpaceDialogComponent;
  let fixture: ComponentFixture<AddAudioSpaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAudioSpaceDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAudioSpaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

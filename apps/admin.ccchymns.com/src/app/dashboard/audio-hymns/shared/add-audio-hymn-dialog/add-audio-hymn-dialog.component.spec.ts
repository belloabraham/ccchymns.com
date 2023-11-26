import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAudioHymnDialogComponent } from './add-audio-hymn-dialog.component';

describe('AddAudioHymnDialogComponent', () => {
  let component: AddAudioHymnDialogComponent;
  let fixture: ComponentFixture<AddAudioHymnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAudioHymnDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAudioHymnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

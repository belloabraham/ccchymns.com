import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAudioHymnDialogComponent } from './update-audio-hymn-dialog.component';

describe('UpdateAudioHymnDialogComponent', () => {
  let component: UpdateAudioHymnDialogComponent;
  let fixture: ComponentFixture<UpdateAudioHymnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAudioHymnDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAudioHymnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

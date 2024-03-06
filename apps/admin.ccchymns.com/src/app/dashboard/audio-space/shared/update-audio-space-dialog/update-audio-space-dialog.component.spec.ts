import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAudioSpaceDialogComponent } from './update-audio-space-dialog.component';

describe('UpdateAudioSpaceDialogComponent', () => {
  let component: UpdateAudioSpaceDialogComponent;
  let fixture: ComponentFixture<UpdateAudioSpaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAudioSpaceDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAudioSpaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

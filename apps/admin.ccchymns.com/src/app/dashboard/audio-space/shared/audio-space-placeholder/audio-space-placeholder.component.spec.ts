import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSpacePlaceholderComponent } from './audio-space-placeholder.component';

describe('AudioSpacePlaceholderComponent', () => {
  let component: AudioSpacePlaceholderComponent;
  let fixture: ComponentFixture<AudioSpacePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioSpacePlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioSpacePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

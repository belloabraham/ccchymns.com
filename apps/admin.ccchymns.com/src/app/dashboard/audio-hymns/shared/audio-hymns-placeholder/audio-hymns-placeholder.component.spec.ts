import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioHymnsPlaceholderComponent } from './audio-hymns-placeholder.component';

describe('AudioHymnsPlaceholderComponent', () => {
  let component: AudioHymnsPlaceholderComponent;
  let fixture: ComponentFixture<AudioHymnsPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioHymnsPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioHymnsPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

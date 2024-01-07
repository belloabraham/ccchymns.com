import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPlayerComponent } from './audio-player.component';

describe('AudioPlayerComponent', () => {
  let component: AudioPlayerComponent;
  let fixture: ComponentFixture<AudioPlayerComponent>;

    const observe = jest.fn();
    const unobserve = jest.fn();

    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    })) as any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

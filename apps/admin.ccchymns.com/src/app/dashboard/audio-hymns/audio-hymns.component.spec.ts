import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioHymnsComponent } from './audio-hymns.component';

describe('AudioHymnsComponent', () => {
  let component: AudioHymnsComponent;
  let fixture: ComponentFixture<AudioHymnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioHymnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioHymnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

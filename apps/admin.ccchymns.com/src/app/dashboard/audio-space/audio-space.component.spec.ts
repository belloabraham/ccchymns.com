import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioSpaceComponent } from './audio-space.component';

describe('AudioSpaceComponent', () => {
  let component: AudioSpaceComponent;
  let fixture: ComponentFixture<AudioSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioSpaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AudioSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

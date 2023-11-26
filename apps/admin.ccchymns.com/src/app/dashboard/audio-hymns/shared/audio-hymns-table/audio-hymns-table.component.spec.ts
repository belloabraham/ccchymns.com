import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioHymnsTableComponent } from './audio-hymns-table.component';

describe('AudioHymnsTableComponent', () => {
  let component: AudioHymnsTableComponent;
  let fixture: ComponentFixture<AudioHymnsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioHymnsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioHymnsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

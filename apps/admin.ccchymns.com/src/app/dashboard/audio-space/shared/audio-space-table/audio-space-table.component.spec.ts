import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSpaceTableComponent } from './audio-space-table.component';

describe('AudioSpaceTableComponent', () => {
  let component: AudioSpaceTableComponent;
  let fixture: ComponentFixture<AudioSpaceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioSpaceTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioSpaceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSpaceTableComponent } from './audio-space-table.component';
import { getTranslocoTestingModule } from '../../../../mock';

describe('AudioSpaceTableComponent', () => {
  let component: AudioSpaceTableComponent;
  let fixture: ComponentFixture<AudioSpaceTableComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioSpaceTableComponent, getTranslocoTestingModule()]
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

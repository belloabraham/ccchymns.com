import { TestBed } from '@angular/core/testing';

import { AudioSpaceDataService } from './audio-space.data.service';

describe('AudioSpaceDataService', () => {
  let service: AudioSpaceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioSpaceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

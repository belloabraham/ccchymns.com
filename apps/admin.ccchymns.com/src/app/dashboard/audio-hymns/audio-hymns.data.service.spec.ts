import { TestBed } from '@angular/core/testing';

import { AudioHymnsDataService } from './audio-hymns.data.service';

describe('AudioHymnsDataService', () => {
  let service: AudioHymnsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioHymnsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

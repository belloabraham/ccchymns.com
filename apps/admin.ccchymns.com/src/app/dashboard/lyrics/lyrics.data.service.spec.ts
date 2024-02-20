import { TestBed } from '@angular/core/testing';

import { LyricsDataService } from './lyrics.data.service';

describe('LyricsDataService', () => {
  let service: LyricsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LyricsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

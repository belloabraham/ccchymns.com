import { TestBed } from '@angular/core/testing';

import { AllHymnsDataService } from './all-hymns.data.service';

describe('AllHymnsDataService', () => {
  let service: AllHymnsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllHymnsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

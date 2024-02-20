import { TestBed } from '@angular/core/testing';

import { BibleReferencesDataService } from './bible-references.data.service';

describe('BibleReferencesDataService', () => {
  let service: BibleReferencesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleReferencesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TonicSolfaDataService } from './tonic-solfa.data.service';

describe('TonicSolfaDataService', () => {
  let service: TonicSolfaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TonicSolfaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

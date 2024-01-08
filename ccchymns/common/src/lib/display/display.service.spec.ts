import { TestBed } from '@angular/core/testing';

import { DisplayService } from './display.service';

describe('DisplayService', () => {
  let service: DisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[DisplayService]
    });
    service = TestBed.inject(DisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

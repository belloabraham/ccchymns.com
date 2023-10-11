import { TestBed } from '@angular/core/testing';

import { LanguageResourceService } from './language-resource.service';

describe('LanguageResourceService', () => {
  let service: LanguageResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

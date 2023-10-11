import { TestBed } from '@angular/core/testing';

import { LanguageUseCaseService } from './language-use-case.service';

describe('LanguageUseCaseService', () => {
  let service: LanguageUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

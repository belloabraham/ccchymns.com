import { TestBed } from '@angular/core/testing';

import { EmailAuthService } from './email.service';

describe('EmailAuthService', () => {
  let service: EmailAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

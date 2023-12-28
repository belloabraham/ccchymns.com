import { TestBed } from '@angular/core/testing';

import { EmailAuthService } from './email.service';
import { Auth } from '@angular/fire/auth';

describe('EmailAuthService', () => {
  let service: EmailAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[Auth]
    });
    service = TestBed.inject(EmailAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

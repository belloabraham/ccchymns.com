import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { EmailAuthService } from './firebase/email.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailAuthService, AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

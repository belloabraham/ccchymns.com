import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { EmailAuthService } from './firebase/email.service';

global.TextDecoder = jest.fn(() => ({
  decode: jest.fn(),
})) as any;

xdescribe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: EmailAuthService,
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

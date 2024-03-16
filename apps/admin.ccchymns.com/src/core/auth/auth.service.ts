import { Injectable } from '@angular/core';
import { EmailAuthService } from './firebase/email.service';
import { User, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { IAuth } from './auth.interface';
import { Config } from '@ccchymns.com/common';

@Injectable()
export class AuthService implements IAuth {
  constructor(private emailAuth: EmailAuthService) {}

  signInWithEmailLink(
    email: string,
    emailLink: string
  ): Promise<UserCredential> {
    if (!this.emailIsAuthorized(email)) {
      throw new Error('UnAuthorized email');
    }
    return this.emailAuth.signInWithEmailLink(email, emailLink);
  }

  getUser(): User | null {
    return this.emailAuth.getUser();
  }

  emailIsAuthorized(email: string) {
    return email.endsWith(Config.DOMAIN);
  }

  signOut(): Promise<void> {
    return this.emailAuth.signOut();
  }

  getAuthSate$(): Observable<User | null> {
    return this.emailAuth.getAuthSate$();
  }

  sendSignInLinkTo(email: string): Promise<void> {
    return this.emailAuth.sendSignInLinkToEmail(email);
  }
}

import { Injectable, Optional } from '@angular/core';
import {
  Auth,
  User,
  UserCredential,
  authState,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
} from '@angular/fire/auth';
import { Providers } from '@ccchymns.com/angular';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: Providers.ROOT,
})
export class EmailAuthService {
  constructor(@Optional() private auth: Auth) {}

  isSignInWithEmailLink(emailLink: string): boolean {
    return isSignInWithEmailLink(this.auth, emailLink);
  }

  signOut(): Promise<void> {
    return signOut(this.auth);
  }

  getUser(): User | null {
    return this.auth.currentUser;
  }

  getAuthSate$() {
    return authState(this.auth);
  }

  signInWithEmailLink(
    email: string,
    emailLink: string
  ): Promise<UserCredential> {
    return signInWithEmailLink(this.auth, email, emailLink);
  }

  sendSignInLinkToEmail(email: string): Promise<void> {
    const actionCodeSettings = {
      url: environment.firebase.email_verification_uri,
      handleCodeInApp: true,
    };
    return sendSignInLinkToEmail(this.auth, email, actionCodeSettings);
  }
}

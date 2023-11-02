import { Injectable, Optional } from '@angular/core';
import { UserCredential, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from '@angular/fire/auth';
import { Providers } from '@ccchymns.com/angular';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: Providers.ROOT,
})
export class EmailService {
  constructor(@Optional() private auth: Auth) {}

  isSignInWithEmailLink(emailLink: string): boolean {
    return isSignInWithEmailLink(this.auth, emailLink);
  }

  signInWithEmailLink(
    email: string,
    emailLink: string
  ): Promise<UserCredential> {
    return signInWithEmailLink(this.auth, email, emailLink);
  }

  sendSignInLinkToEmail(email: string): Promise<void> {
    const actionCodeSettings = {
      url: environment,
      handleCodeInApp: true,
    };
    return sendSignInLinkToEmail(this.auth, email, actionCodeSettings);
  }
}

import { User, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';

export interface IAuth {
  getAuthSate$: () => Observable<User | null>;
  signOut: () => Promise<void>;
  getUser: () => User | null;
  sendSignInLinkToEmail: (email: string) => Promise<void>;
  signInWithEmailLink: (
    email: string,
    emailLink: string
  ) => Promise<UserCredential>;
}

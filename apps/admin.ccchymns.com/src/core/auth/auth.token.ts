import { InjectionToken, inject } from "@angular/core";
import { Providers } from "@ccchymns.com/angular";
import { AuthService } from "./auth.service";
import { IAuth } from "./auth.interface";
import { EmailAuthService } from "./firebase/email.service";

export const AUTH_TOKEN = new InjectionToken<IAuth>('authentication', {
  providedIn: Providers.ROOT,
  factory: () =>
    new AuthService(
      inject(EmailAuthService),
    ),
});

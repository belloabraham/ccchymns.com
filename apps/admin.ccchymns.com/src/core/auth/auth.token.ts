import { InjectionToken, inject } from "@angular/core";
import { Providers } from "@ccchymns.com/angular";
import { AuthService } from "./auth.service";

export const AUTH_TOKEN = new InjectionToken<IUserAuth>('authentication', {
  providedIn: Providers.ROOT,
  factory: () =>
    new AuthService(
      inject(EmailAuthService),
    ),
});

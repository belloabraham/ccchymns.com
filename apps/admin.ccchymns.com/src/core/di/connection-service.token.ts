import { InjectionToken } from '@angular/core';
import { Providers } from '@ccchymns.com/angular';
import { ConnectionUtil, IConnectionUtil } from '@ccchymns.com/core';


export const CONNECTION_UTIL_TOKEN = new InjectionToken<IConnectionUtil>(
  'connection-util',
  {
    providedIn: Providers.ROOT,
    factory: () => new ConnectionUtil(),
  }
);

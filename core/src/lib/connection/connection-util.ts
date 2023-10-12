import { BehaviorSubject } from 'rxjs';
import { ConnectingHeader } from './connection-header';
import { ConnectionState } from './connection-state';
import { IConnectionUtil } from './connection-util.interface';
import { PingDomain } from './ping-domain';
import { LoggerUtil } from '../logger';

export class ConnectionUtil implements IConnectionUtil {
  private deviceIsConnectedToTheInternet = new BehaviorSubject<boolean>(true);

  observeDeviceInternetConnectionState() {
    window.addEventListener(ConnectionState.ONLINE, async () => {
      let retryCount = 0;
      const maxRetries = 3;
      while (retryCount < maxRetries) {
        try {
          const deviceIsConnectedToTheInternet =
            await this.checkInternetConnection();
          this.deviceIsConnectedToTheInternet.next(
            deviceIsConnectedToTheInternet
          );
          break;
        } catch (error) {
          LoggerUtil.error(
            this,
            this.observeDeviceInternetConnectionState.name,
            error
          );
          retryCount++;
          if (retryCount < maxRetries) {
            const twoSecond = 2000;
            await new Promise((resolve) => setTimeout(resolve, twoSecond));
          }
        }
      }
    });

    window.addEventListener(ConnectionState.OFFLINE, () => {
      this.deviceIsConnectedToTheInternet.next(false);
    });
    return this.deviceIsConnectedToTheInternet;
  }

  private async checkInternetConnection(): Promise<boolean> {
    try {
      // Attempt to fetch the header of a resource from the app toot domain
      // The { method: 'HEAD', cache: 'no-store' }
      // options are used to ensure that no actual data is fetched and that the cache is ignored.
      await fetch(PingDomain.ROOT, {
        method: ConnectingHeader.HEAD,
        cache: ConnectingHeader.CACHE,
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

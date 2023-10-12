import { BehaviorSubject } from 'rxjs';

export interface IConnectionUtil {
  /**
   * Observes the device's internet connection state and updates the BehaviorSubject accordingly.
   * @returns A BehaviorSubject emitting the internet connection status.
   * @example
   * const connectionUtil = new ConnectionUtil();
   * const connectionState$ = connectionUtil.observeDeviceInternetConnectionState();
   * connectionState$.subscribe((isConnected) => {
   *   if (isConnected === true) {
   *     console.log('Device is connected to the internet.');
   *   } else if (isConnected === false) {
   *     console.log('Device is not connected to the internet.');
   *   } else {
   *     console.log('Connection status cannot be determined.');
   *   }
   * });
   */
  observeDeviceInternetConnectionState: () => BehaviorSubject<boolean>;
}

import { Notification } from './notification';

export class NotificationBuilder {
  private _notification!: Notification;

  constructor() {
    this._notification = new Notification();
  }

  setIsPlainText(value: boolean) {
    this._notification.isPlainText = value;
    return this;
  }

  showBackOverlay(value: boolean) {
    this._notification.isBackOverlay = value;
    return this;
  }

  setClickToClose(value: boolean) {
    this._notification.isClickToClose = value;
    return this;
  }

  setPosition(
    value?:
      | 'right-top'
      | 'right-bottom'
      | 'left-top'
      | 'left-bottom'
      | 'center-top'
      | 'center-bottom'
      | 'center-center'
  ) {
    this._notification.position = value;
    return this;
  }
  setTimeOut(value: number) {
    this._notification.timeOut = value;
    return this;
  }

  setMessageLength(value: number) {
    this._notification.messageMaxLength = value;
    return this;
  }

  build() {
    return this._notification;
  }
}

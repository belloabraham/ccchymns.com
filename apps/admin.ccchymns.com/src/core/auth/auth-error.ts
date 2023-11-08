export class AuthError {
  static message(errorCode: string) {
    const invalidEmailMessage = 'Enter a valid email address.';
    switch (errorCode) {
      case 'auth/network-request-failed':
        return 'Make sure your device is connected to the internet and try again.';
      case 'auth/argument-error':
        return 'Enter the email address this login link was sent to.';
      case 'auth/invalid-email':
        return invalidEmailMessage;
      case 'auth/invalid-recipient-email':
        return invalidEmailMessage;
      case 'auth/too-many-requests':
        return 'Unable to authenticate at this moment, wait after some time and try again.';
      case 'auth/user-disabled':
        return 'Your account may have been disabled, you may have to contact the administrator for help or try again later.';
      case 'auth/web-storage-unsupported':
        return 'This browser is not supported or 3rd party cookies and data may be disabled.';
      default:
        return 'Unable to authenticate at this moment, try again after some time.';
    }
  }
}

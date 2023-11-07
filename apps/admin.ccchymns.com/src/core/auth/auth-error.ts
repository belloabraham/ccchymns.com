export class AuthError {
  static message(errorCode: string) {
    switch (errorCode) {
      case 'auth/network-request-failed':
        return 'Make sure your device is connected to the internet and try again.';
      case 'auth/argument-error':
        return 'Enter the email address this login link was sent to';
      default:
        return '';
    }
  }
}

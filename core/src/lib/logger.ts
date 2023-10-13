export class LoggerUtil {
  static error(context: any, action: any, error: any) {
    console.error(`Context: ${context}, Action: ${action}, Error: ${error}`);
  }
}

export class LoggerUtil {
  static error(context: any, action: string, error: any) {
    console.error(`Context: ${context} -> Action: ${action} -> ${error}`);
  }
}

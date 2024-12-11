export interface ILogger {
  logInfo(msg: string): void;
  logDebug(msg: string): void;
  logWarn(msg: string): void;
  logError(msg: string): void;
  setEnabled(enabled: boolean): void;
}

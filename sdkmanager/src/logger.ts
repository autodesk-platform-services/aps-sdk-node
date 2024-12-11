import { ILogger } from './iLogger';

export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3
}

export class Logger implements ILogger {
  private level: LogLevel;
  private enabled: boolean;

  constructor(level?: LogLevel, enabled?: boolean) {
    this.level = level ?? LogLevel.ERROR;
    this.enabled = enabled ?? true;
  }

  private getLevelPriority(level: LogLevel): number {
    switch (level) {
      case LogLevel.DEBUG:
        return 1;
      case LogLevel.INFO:
        return 2;
      case LogLevel.WARN:
        return 3;
      case LogLevel.ERROR:
        return 4;
      default:
        return 0;
    }
  }

  private initLogger(level: LogLevel): boolean {
    return (
      this.enabled &&
      this.getLevelPriority(level) >= this.getLevelPriority(this.level)
    );
  }

  public logDebug(message: string): void {
    if (this.initLogger(LogLevel.DEBUG)) {
      console.debug(`DEBUG: ${message}`);
    }
  }

  public logInfo(message: string): void {
    if (this.initLogger(LogLevel.INFO)) {
      console.log(`INFO: ${message}`);
    }
  }

  public logWarn(message: string): void {
    if (this.initLogger(LogLevel.WARN)) {
      console.warn(`WARN: ${message}`);
    }
  }

  public logError(message: string): void {
    if (this.initLogger(LogLevel.ERROR)) {
      console.error(`ERROR: ${message}`);
    }
  }

  public setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }
}

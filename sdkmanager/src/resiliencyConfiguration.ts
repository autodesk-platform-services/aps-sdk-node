import { IResiliencyConfiguration } from './iResiliencyConfiguration';

export class ResiliencyConfiguration implements IResiliencyConfiguration {
  private _retryCount: number;
  private _backoffInterval: number;
  private _circuitBreakerInterval: number;
  private _timeoutValue: number;

  constructor(
    retryCount: number = 5,
    backoffInterval: number = 10,
    circuitBreakerInterval: number = 60 * 1000,
    timeoutValue: number = 15000
  ) {
    this._retryCount = retryCount;
    this._backoffInterval = backoffInterval;
    this._circuitBreakerInterval = circuitBreakerInterval;
    this._timeoutValue = timeoutValue;
  }

  public get retryCount() {
    return this._retryCount;
  }

  public set retryCount(retryCount: number) {
    this._retryCount = retryCount;
  }

  public get backoffInterval() {
    return this._backoffInterval;
  }

  public get timeOutValue() {
    return this._timeoutValue;
  }

  public set timeOutValue(timeOutValue: number) {
    this._timeoutValue = timeOutValue;
  }

  public set backoffInterval(backoffInterval: number) {
    this._backoffInterval = backoffInterval;
  }

  public set circuitBreakerInterval(circuitBreakerInterval: number) {
    this._circuitBreakerInterval = circuitBreakerInterval;
  }

  public get circuitBreakerInterval() {
    return this._circuitBreakerInterval;
  }

  public toString = (): string => {
    return `ResiliencyConfiguration (TimeOutValue: ${this._timeoutValue}) RetryCount: ${this._retryCount}) (BackoffInterval: ${this._backoffInterval})  (CircuitBreakerInterval: ${this._circuitBreakerInterval}) `;
  };
}

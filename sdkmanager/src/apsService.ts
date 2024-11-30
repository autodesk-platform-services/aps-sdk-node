import axios, { AxiosError } from 'axios';
import {
  circuitBreaker,
  CircuitBreakerPolicy,
  ConsecutiveBreaker,
  ExponentialBackoff,
  handleAll,
  handleType,
  IDefaultPolicyContext,
  IMergedPolicy,
  IPolicy,
  retry,
  RetryPolicy,
  timeout,
  TimeoutPolicy,
  TimeoutStrategy,
  wrap
} from 'cockatiel';
import { ApsServiceRequestConfig } from './apsServiceRequestConfig';
import { IResiliencyConfiguration } from '../index';

export class ApsService {
  private readonly retryPolicy: RetryPolicy;
  private readonly circuitBreakerPolicy: CircuitBreakerPolicy;
  private readonly timeoutPolicy: TimeoutPolicy;
  private readonly resiliencePolicy: IMergedPolicy<
    IDefaultPolicyContext,
    IPolicy,
    IPolicy[]
  >;

  private static readonly RETRYABLE_STATUS_CODES = [408, 429, 502, 503, 504];

  constructor(config: IResiliencyConfiguration) {
    this.retryPolicy = this.createRetryPolicy(config);
    this.circuitBreakerPolicy = this.createCircuitBreakerPolicy(config);
    this.timeoutPolicy = this.createTimeoutPolicy(config);
    this.resiliencePolicy = wrap(
      this.circuitBreakerPolicy,
      this.retryPolicy,
      this.timeoutPolicy
    );
  }

  private createRetryPolicy(config: IResiliencyConfiguration) {
    return retry(
      handleType(AxiosError, (err) =>
        ApsService.RETRYABLE_STATUS_CODES.includes(err?.response?.status)
      ).orWhen((err) => {
        // check if err quacks like an ISDKError
        return (
          'httpStatusCode' in err &&
          err.httpStatusCode instanceof Function &&
          ApsService.RETRYABLE_STATUS_CODES.includes(err.httpStatusCode())
        );
      }),
      {
        maxAttempts: config.retryCount,
        backoff: new ExponentialBackoff({
          maxDelay: config.backoffInterval
        })
      }
    );
  }

  private createCircuitBreakerPolicy(config: IResiliencyConfiguration) {
    return circuitBreaker(handleAll, {
      breaker: new ConsecutiveBreaker(config.retryCount),
      halfOpenAfter: config.circuitBreakerInterval
    });
  }

  private createTimeoutPolicy(config: IResiliencyConfiguration) {
    return timeout(config.timeOutValue, TimeoutStrategy.Aggressive);
  }

  public async request(config: ApsServiceRequestConfig): Promise<any> {
    return this.resiliencePolicy.execute(() => axios.request(config));
  }
}

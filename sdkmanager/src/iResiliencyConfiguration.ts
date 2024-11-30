export interface IResiliencyConfiguration {
  retryCount: number;
  backoffInterval: number;
  circuitBreakerInterval: number;
  timeOutValue: number;
}

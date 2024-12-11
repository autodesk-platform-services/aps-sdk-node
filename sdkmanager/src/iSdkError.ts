/**
 * SDK Error Interface defining the shape we expect for errors thrown from generated SDKs
 * that use the SDK Manager.
 * This allows resiliency configuration in this library to distinguish errors thrown by the generated SDK from
 * standard library Error instances.
 */
export interface ISdkError {
  httpStatusCode(): number | null;
}

export interface ApsConfiguration {
  readonly baseAddress: URL;
  readonly baseOptions?: any;

  /**
   * The FormData constructor that will be used to create multipart form data
   * requests. You can inject this here so that execution environments that
   * do not support the FormData class can still run the generated client.
   *
   * @type {new () => FormData}
   */
  readonly formDataCtor?: new () => any;
}

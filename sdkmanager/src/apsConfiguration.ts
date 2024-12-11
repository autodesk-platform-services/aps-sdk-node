import { ApsConfiguration as IApsConfiguration } from './iApsConfiguration';

export enum AdskEnvironment {
  Dev = 0,
  Stg = 1,
  Prd = 2,
  Local = 3
}

export interface ApsConfigurationParams {
  environment?: AdskEnvironment;
  baseOptions?: any;
  formDataCtor?: new () => any;
}

export class ApsConfiguration implements IApsConfiguration {
  baseAddress: URL;

  /**
   * base options for axios calls
   *
   * @type {any}
   * @memberof Configuration
   */
  readonly baseOptions?: any;

  /**
   * The FormData constructor that will be used to create multipart form data
   * requests. You can inject this here so that execution environments that
   * do not support the FormData class can still run the generated client.
   *
   * @type {new () => FormData}
   */
  readonly formDataCtor?: new () => any;

  public get BaseAddress() {
    return this.baseAddress;
  }

  public set BaseAddress(baseAddress: URL) {
    this.baseAddress = baseAddress;
  }

  constructor(apsConfigurationParams: ApsConfigurationParams) {
    this.baseAddress = new URL('https://developer.api.autodesk.com');
    this.baseOptions = apsConfigurationParams.baseOptions;
    this.formDataCtor = apsConfigurationParams.formDataCtor;
    switch (apsConfigurationParams.environment) {
      case AdskEnvironment.Local: {
        this.baseAddress = new URL('http://localhost:1234');
        break;
      }
      case AdskEnvironment.Dev: {
        this.baseAddress = new URL('https://developer-dev.api.autodesk.com');
        break;
      }
      case AdskEnvironment.Stg: {
        this.baseAddress = new URL('https://developer-stg.api.autodesk.com');
        break;
      }
      default: {
        this.baseAddress = new URL('https://developer.api.autodesk.com');
        break;
      }
    }
  }
}

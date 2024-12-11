import { ApsConfiguration as IApsConfiguration } from './iApsConfiguration';
import { AuthClient as IAuthClient } from './iAuthClient';
import { IResiliencyConfiguration } from './iResiliencyConfiguration';
import { ISdkManager } from './iSdkManager';
import { ApsConfiguration } from './apsConfiguration';
import { ResiliencyConfiguration } from './resiliencyConfiguration';
import { ApsClient as IApsClient } from './iApsClient';
import { ApsClient } from './apsClient';
import { Logger, LogLevel } from './logger';
import { ILogger } from './iLogger';

export class SdkManager implements ISdkManager {
  private _apsConfiguration: IApsConfiguration;
  private _resiliencyConfiguration: IResiliencyConfiguration;
  private _authClient: IAuthClient;
  private _apsClient: IApsClient;
  private _logger: ILogger;

  private constructor(
    apsConfiguration: IApsConfiguration,
    resiliencyConfiguration: IResiliencyConfiguration,
    authClient: IAuthClient,
    logger: ILogger
  ) {
    this._apsConfiguration = apsConfiguration ?? new ApsConfiguration({});
    this._resiliencyConfiguration =
      resiliencyConfiguration ?? new ResiliencyConfiguration();
    this._logger = logger ?? new Logger();
    this._apsClient = new ApsClient(
      this._resiliencyConfiguration,
      this._logger
    );
    this._authClient = authClient;
  }

  public set logger(logger: ILogger) {
    this._logger = logger;
  }

  public get logger() {
    return this._logger;
  }

  public static getInstance(
    apsConfiguration: IApsConfiguration,
    resiliencyConfiguration: IResiliencyConfiguration,
    authClient: IAuthClient,
    logger: ILogger
  ): SdkManager {
    return new SdkManager(
      apsConfiguration,
      resiliencyConfiguration,
      authClient,
      logger
    );
  }

  public get apsClient(): IApsClient {
    return this._apsClient;
  }

  public get authClient(): IAuthClient {
    return this._authClient;
  }

  public get apsConfiguration(): IApsConfiguration {
    return this._apsConfiguration;
  }

  public set apsConfiguration(apsConfiguration: IApsConfiguration) {
    this._apsConfiguration = apsConfiguration;
  }

  public toggleLogging(enabled: boolean): void {
    this._logger.setEnabled(enabled);
  }
}

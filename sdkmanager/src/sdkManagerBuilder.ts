import { ApsConfiguration as IApsConfiguration } from './iApsConfiguration';
import { AuthClient as IAuthClient } from './iAuthClient';
import { Builder as IBuilder } from './iBuilder';
import { ILogger } from './iLogger';
import { IResiliencyConfiguration } from './iResiliencyConfiguration';
import { SdkManager } from './sdkManager';

export class SdkManagerBuilder implements IBuilder {
  private resiliencyConfiguration!: IResiliencyConfiguration;
  private authClient!: IAuthClient;
  private apsConfiguration!: IApsConfiguration;
  private logger!: ILogger;

  public static create(): SdkManagerBuilder {
    return new SdkManagerBuilder();
  }

  public addResiliencyConfiguration(
    resiliencyConfiguration: IResiliencyConfiguration
  ) {
    this.resiliencyConfiguration = resiliencyConfiguration;
    return this;
  }

  public addAuthClient(authClient: IAuthClient) {
    this.authClient = authClient;
    return this;
  }

  public addApsConfiguration(apsConfiguration: IApsConfiguration) {
    this.apsConfiguration = apsConfiguration;
    return this;
  }

  public addLogger(logger: ILogger) {
    this.logger = logger;
    return this;
  }

  public build(): SdkManager {
    return SdkManager.getInstance(
      this.apsConfiguration,
      this.resiliencyConfiguration,
      this.authClient,
      this.logger
    );
  }
}

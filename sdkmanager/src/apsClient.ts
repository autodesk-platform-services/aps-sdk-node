import { ApsService } from './apsService';
import { ApsClient as IApsClient } from './iApsClient';
import { IResiliencyConfiguration } from './iResiliencyConfiguration';
import { Logger } from './logger';
import { ILogger as ILogger } from './iLogger';
import { ResiliencyConfiguration } from './resiliencyConfiguration';

export class ApsClient implements IApsClient {
  resiliencyConfig: IResiliencyConfiguration = new ResiliencyConfiguration();
  private logger: ILogger;
  private _apsService: ApsService;

  constructor(resiliencyConfig: IResiliencyConfiguration, logger: ILogger) {
    this.resiliencyConfig = resiliencyConfig;
    this._apsService = new ApsService(this.resiliencyConfig);
    this.logger = logger;
    this.logger.logDebug(
      `Initializing resiliency config:  ${this.resiliencyConfig}`
    );
  }

  get apsService(): ApsService {
    return this._apsService;
  }
}

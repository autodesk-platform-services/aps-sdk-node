import { IResiliencyConfiguration } from './iResiliencyConfiguration';
import { AuthClient as IAuthClient } from './iAuthClient';
import { ApsConfiguration as IApsConfiguration } from './iApsConfiguration';
import { Logger } from './logger';
import { IBuilder } from '..';

export interface Builder {
  addResiliencyConfiguration(
    resiliencyConfiguration: IResiliencyConfiguration
  ): IBuilder;
  addAuthClient(authClient: IAuthClient): IBuilder;
  addApsConfiguration(apsConfiguration: IApsConfiguration): IBuilder;
  addLogger(logger: Logger): IBuilder;
}

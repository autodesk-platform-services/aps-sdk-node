import { ApsService } from './apsService';

export interface ApsClient {
  get apsService(): ApsService;
}

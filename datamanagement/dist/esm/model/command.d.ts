import { CommandData } from './command-data';
import { HubsJsonapi } from './hubs-jsonapi';
/**
 * Successful Retrieval of C4R Model Publish Status (200)
 * @export
 * @interface Command
 */
export interface Command {
    /**
     *
     * @type {CommandData}
     * @memberof Command
     */
    'data'?: CommandData;
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Command
     */
    'jsonapi'?: HubsJsonapi;
}

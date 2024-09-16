
import { CommandData } from './commandData';
import { JsonApiVersion } from './jsonApiVersion';

/**
 * Command Payload
 * @export
 * @interface Command
 */
export interface Command {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Command
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {CommandData}
     * @memberof Command
     */
    'data'?: CommandData;
}


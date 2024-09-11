
import { CommandData } from './commandData';
import { JsonApiVersion } from './jsonApiVersion';

/**
 * The request body\'s ``data`` object defines the command to execute and contains any required input data.
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


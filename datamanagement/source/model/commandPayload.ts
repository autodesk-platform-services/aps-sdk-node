
import { CommandPayloadData } from './commandPayloadData';
import { JsonApiVersion } from './jsonApiVersion';

/**
 * The request body\'s ``data`` object defines the command to execute and contains any required input data.
 * @export
 * @interface CommandPayload
 */
export interface CommandPayload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof CommandPayload
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {CommandPayloadData}
     * @memberof CommandPayload
     */
    'data'?: CommandPayloadData;
}


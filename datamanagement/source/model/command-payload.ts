/* tslint:disable */
/* eslint-disable */

import { CommandPayloadData } from './command-payload-data';
import { JsonApiVersion } from './json-api-version';

/**
 * Command Payload
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


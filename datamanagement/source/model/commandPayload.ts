/* tslint:disable */
/* eslint-disable */

import { CommandPayloadData } from './commandPayloadData';
import { JsonApiVersion } from './jsonApiVersion';

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


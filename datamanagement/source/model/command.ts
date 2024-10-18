/* tslint:disable */
/* eslint-disable */

import { CommandData } from './command-data';
import { JsonApiVersion } from './json-api-version';

/**
 * Commamd response
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


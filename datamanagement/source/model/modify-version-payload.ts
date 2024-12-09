/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './json-api-version';
import { ModifyVersionPayloadData } from './modify-version-payload-data';

/**
 * An object that contains the information on the version to be patched.
 * @export
 * @interface ModifyVersionPayload
 */
export interface ModifyVersionPayload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof ModifyVersionPayload
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {ModifyVersionPayloadData}
     * @memberof ModifyVersionPayload
     */
    'data': ModifyVersionPayloadData;
}

/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './json-api-version';
import { StoragePayloadData } from './storage-payload-data';

/**
 * An object representing a placeholder (storage location) for data.
 * @export
 * @interface StoragePayload
 */
export interface StoragePayload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof StoragePayload
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {StoragePayloadData}
     * @memberof StoragePayload
     */
    'data': StoragePayloadData;
}


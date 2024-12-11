/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './jsonApiVersion';
import { StoragePayloadData } from './storagePayloadData';

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


/* tslint:disable */
/* eslint-disable */

import { StoragePayloadDataAttributes } from './storage-payload-data-attributes';
import { StoragePayloadDataRelationships } from './storage-payload-data-relationships';
import { TypeObject } from './type-object';

/**
 * A container of data describing a storage location.
 * @export
 * @interface StoragePayloadData
 */
export interface StoragePayloadData {
    /**
     * 
     * @type {TypeObject}
     * @memberof StoragePayloadData
     */
    'type': TypeObject;
    /**
     * 
     * @type {StoragePayloadDataAttributes}
     * @memberof StoragePayloadData
     */
    'attributes': StoragePayloadDataAttributes;
    /**
     * 
     * @type {StoragePayloadDataRelationships}
     * @memberof StoragePayloadData
     */
    'relationships': StoragePayloadDataRelationships;
}




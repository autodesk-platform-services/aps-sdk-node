/* tslint:disable */
/* eslint-disable */

import { StorageDataRelationships } from './storage-data-relationships';
import { TypeObject } from './type-object';

/**
 * An object containing information on the storage location.
 * @export
 * @interface StorageData
 */
export interface StorageData {
    /**
     * 
     * @type {TypeObject}
     * @memberof StorageData
     */
    'type'?: TypeObject;
    /**
     * The ID to uniquely identify the storage location.
     * @type {string}
     * @memberof StorageData
     */
    'id'?: string;
    /**
     * 
     * @type {StorageDataRelationships}
     * @memberof StorageData
     */
    'relationships'?: StorageDataRelationships;
}




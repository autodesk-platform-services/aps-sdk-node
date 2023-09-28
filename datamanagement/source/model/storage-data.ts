/* tslint:disable */
/* eslint-disable */

import { StorageDataRelationships } from './storage-data-relationships';

/**
 * 
 * @export
 * @interface StorageData
 */
export interface StorageData {
    /**
     * 
     * @type {string}
     * @memberof StorageData
     */
    'type'?: string;
    /**
     * 
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


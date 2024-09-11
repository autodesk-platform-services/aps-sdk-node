
import { StorageDataRelationships } from './storageDataRelationships';
import { Type } from './type';

/**
 * An object containing information on the storage location.
 * @export
 * @interface StorageData
 */
export interface StorageData {
    /**
     * 
     * @type {Type}
     * @memberof StorageData
     */
    'type'?: Type;
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




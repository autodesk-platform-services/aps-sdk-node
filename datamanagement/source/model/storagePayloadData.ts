
import { StoragePayloadDataAttributes } from './storagePayloadDataAttributes';
import { StoragePayloadDataRelationships } from './storagePayloadDataRelationships';
import { Type } from './type';

/**
 * A container of data describing a storage location.
 * @export
 * @interface StoragePayloadData
 */
export interface StoragePayloadData {
    /**
     * 
     * @type {Type}
     * @memberof StoragePayloadData
     */
    'type': Type;
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




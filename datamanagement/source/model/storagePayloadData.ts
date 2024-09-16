
import { StoragePayloadDataAttributes } from './storagePayloadDataAttributes';
import { StoragePayloadDataRelationships } from './storagePayloadDataRelationships';
import { TypeObject } from './typeObject';

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




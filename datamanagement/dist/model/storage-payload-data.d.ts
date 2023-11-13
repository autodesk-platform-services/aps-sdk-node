import { StoragePayloadDataAttributes } from './storage-payload-data-attributes';
import { StoragePayloadDataRelationships } from './storage-payload-data-relationships';
import { Type } from './type';
/**
 *
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

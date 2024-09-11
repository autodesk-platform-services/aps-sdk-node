
import { Type } from './type';

/**
 * Contains information about the resources related to the item or version the storage location will contain.
 * @export
 * @interface StoragePayloadDataRelationshipsTargetData
 */
export interface StoragePayloadDataRelationshipsTargetData {
    /**
     * 
     * @type {Type}
     * @memberof StoragePayloadDataRelationshipsTargetData
     */
    'type': Type;
    /**
     * The ID to uniquely identify the resource.
     * @type {string}
     * @memberof StoragePayloadDataRelationshipsTargetData
     */
    'id': string;
}




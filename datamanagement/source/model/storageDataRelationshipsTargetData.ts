
import { Type } from './type';

/**
 * Contains information about the folder containing the item or version the storage location is reserved for.
 * @export
 * @interface StorageDataRelationshipsTargetData
 */
export interface StorageDataRelationshipsTargetData {
    /**
     * 
     * @type {Type}
     * @memberof StorageDataRelationshipsTargetData
     */
    'type'?: Type;
    /**
     * The ID to uniquely identify the resource.
     * @type {string}
     * @memberof StorageDataRelationshipsTargetData
     */
    'id'?: string;
}




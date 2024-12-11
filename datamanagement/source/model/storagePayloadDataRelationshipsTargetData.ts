/* tslint:disable */
/* eslint-disable */

import { TypeFolderItemsForStorage } from './typeFolderItemsForStorage';

/**
 * Contains information about the resources related to the item or version the storage location will contain.
 * @export
 * @interface StoragePayloadDataRelationshipsTargetData
 */
export interface StoragePayloadDataRelationshipsTargetData {
    /**
     * 
     * @type {TypeFolderItemsForStorage}
     * @memberof StoragePayloadDataRelationshipsTargetData
     */
    'type': TypeFolderItemsForStorage;
    /**
     * The ID to uniquely identify the resource.
     * @type {string}
     * @memberof StoragePayloadDataRelationshipsTargetData
     */
    'id': string;
}




/* tslint:disable */
/* eslint-disable */

import { TypeFolder } from './type-folder';

/**
 * Contains information about the folder containing the item or version the storage location is reserved for.
 * @export
 * @interface StorageDataRelationshipsTargetData
 */
export interface StorageDataRelationshipsTargetData {
    /**
     * 
     * @type {TypeFolder}
     * @memberof StorageDataRelationshipsTargetData
     */
    'type'?: TypeFolder;
    /**
     * The ID to uniquely identify the resource.
     * @type {string}
     * @memberof StorageDataRelationshipsTargetData
     */
    'id'?: string;
}




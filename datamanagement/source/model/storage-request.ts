/* tslint:disable */
/* eslint-disable */

import { ModifyFolderJsonapi } from './modify-folder-jsonapi';
import { StorageRequestData } from './storage-request-data';

/**
 * Successful creation of a storage location.
 * @export
 * @interface StorageRequest
 */
export interface StorageRequest {
    /**
     * 
     * @type {ModifyFolderJsonapi}
     * @memberof StorageRequest
     */
    'jsonapi': ModifyFolderJsonapi;
    /**
     * 
     * @type {StorageRequestData}
     * @memberof StorageRequest
     */
    'data': StorageRequestData;
}


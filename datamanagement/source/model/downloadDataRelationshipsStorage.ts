/* tslint:disable */
/* eslint-disable */

import { DownloadDataRelationshipsStorageData } from './downloadDataRelationshipsStorageData';
import { DownloadDataRelationshipsStorageMeta } from './downloadDataRelationshipsStorageMeta';

/**
 * Contains information about the location of the download.
 * @export
 * @interface DownloadDataRelationshipsStorage
 */
export interface DownloadDataRelationshipsStorage {
    /**
     * 
     * @type {DownloadDataRelationshipsStorageData}
     * @memberof DownloadDataRelationshipsStorage
     */
    'data'?: DownloadDataRelationshipsStorageData;
    /**
     * 
     * @type {DownloadDataRelationshipsStorageMeta}
     * @memberof DownloadDataRelationshipsStorage
     */
    'meta'?: DownloadDataRelationshipsStorageMeta;
}


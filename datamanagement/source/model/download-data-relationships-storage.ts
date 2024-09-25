/* tslint:disable */
/* eslint-disable */

import { DownloadDataRelationshipsStorageData } from './download-data-relationships-storage-data';
import { DownloadDataRelationshipsStorageMeta } from './download-data-relationships-storage-meta';

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


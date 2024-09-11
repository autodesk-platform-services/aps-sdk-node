
import { Type } from './type';

/**
 * Contains information about the storage location of the download.
 * @export
 * @interface DownloadDataRelationshipsStorageData
 */
export interface DownloadDataRelationshipsStorageData {
    /**
     * 
     * @type {Type}
     * @memberof DownloadDataRelationshipsStorageData
     */
    'type'?: Type;
    /**
     * The URN of the storage location.
     * @type {string}
     * @memberof DownloadDataRelationshipsStorageData
     */
    'id'?: string;
}




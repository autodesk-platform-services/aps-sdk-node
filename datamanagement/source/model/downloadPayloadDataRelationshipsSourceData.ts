
import { Type } from './type';

/**
 * Contains information about the version the download format is being created for.
 * @export
 * @interface DownloadPayloadDataRelationshipsSourceData
 */
export interface DownloadPayloadDataRelationshipsSourceData {
    /**
     * 
     * @type {Type}
     * @memberof DownloadPayloadDataRelationshipsSourceData
     */
    'type': Type;
    /**
     * The URN of the version the download is being created for.   **Note**: Must be the raw string, not the URL encoded string.
     * @type {string}
     * @memberof DownloadPayloadDataRelationshipsSourceData
     */
    'id': string;
}




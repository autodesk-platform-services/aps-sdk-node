
import { DownloadPayloadDataAttributes } from './downloadPayloadDataAttributes';
import { DownloadPayloadDataRelationships } from './downloadPayloadDataRelationships';
import { Type } from './type';

/**
 * Contains information about the desired download format and the version of the item to convert to this format.
 * @export
 * @interface DownloadPayloadData
 */
export interface DownloadPayloadData {
    /**
     * 
     * @type {Type}
     * @memberof DownloadPayloadData
     */
    'type': Type;
    /**
     * 
     * @type {DownloadPayloadDataAttributes}
     * @memberof DownloadPayloadData
     */
    'attributes': DownloadPayloadDataAttributes;
    /**
     * 
     * @type {DownloadPayloadDataRelationships}
     * @memberof DownloadPayloadData
     */
    'relationships': DownloadPayloadDataRelationships;
}




import { DownloadPayloadDataAttributes } from './download-payload-data-attributes';
import { DownloadPayloadDataRelationships } from './download-payload-data-relationships';
import { Type } from './type';
/**
 *
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

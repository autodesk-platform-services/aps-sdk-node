
import { DownloadPayloadData } from './downloadPayloadData';
import { JsonApiVersion } from './jsonApiVersion';

/**
 * The payload for creating a download of a specified format.
 * @export
 * @interface DownloadPayload
 */
export interface DownloadPayload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof DownloadPayload
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {DownloadPayloadData}
     * @memberof DownloadPayload
     */
    'data': DownloadPayloadData;
}


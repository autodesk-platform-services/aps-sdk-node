import { DownloadPayloadData } from './download-payload-data';
import { ModifyFolderPayloadJsonapi } from './modify-folder-payload-jsonapi';
/**
 * Describe the download to be created.
 * @export
 * @interface DownloadPayload
 */
export interface DownloadPayload {
    /**
     *
     * @type {ModifyFolderPayloadJsonapi}
     * @memberof DownloadPayload
     */
    'jsonapi': ModifyFolderPayloadJsonapi;
    /**
     *
     * @type {DownloadPayloadData}
     * @memberof DownloadPayload
     */
    'data': DownloadPayloadData;
}

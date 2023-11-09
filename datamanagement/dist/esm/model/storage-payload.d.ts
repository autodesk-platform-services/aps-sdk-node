import { ModifyFolderPayloadJsonapi } from './modify-folder-payload-jsonapi';
import { StoragePayloadData } from './storage-payload-data';
/**
 * Describe storage to be created.
 * @export
 * @interface StoragePayload
 */
export interface StoragePayload {
    /**
     *
     * @type {ModifyFolderPayloadJsonapi}
     * @memberof StoragePayload
     */
    'jsonapi': ModifyFolderPayloadJsonapi;
    /**
     *
     * @type {StoragePayloadData}
     * @memberof StoragePayload
     */
    'data': StoragePayloadData;
}

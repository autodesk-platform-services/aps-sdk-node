import { FolderPayloadData } from './folder-payload-data';
import { ModifyFolderPayloadJsonapi } from './modify-folder-payload-jsonapi';
/**
 * Describe the folder to be created.
 * @export
 * @interface FolderPayload
 */
export interface FolderPayload {
    /**
     *
     * @type {ModifyFolderPayloadJsonapi}
     * @memberof FolderPayload
     */
    'jsonapi': ModifyFolderPayloadJsonapi;
    /**
     *
     * @type {FolderPayloadData}
     * @memberof FolderPayload
     */
    'data': FolderPayloadData;
}

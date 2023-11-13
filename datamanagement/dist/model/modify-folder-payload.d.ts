import { ModifyFolderPayloadData } from './modify-folder-payload-data';
import { ModifyFolderPayloadJsonapi } from './modify-folder-payload-jsonapi';
/**
 * Modifies folder names.
 * @export
 * @interface ModifyFolderPayload
 */
export interface ModifyFolderPayload {
    /**
     *
     * @type {ModifyFolderPayloadJsonapi}
     * @memberof ModifyFolderPayload
     */
    'jsonapi': ModifyFolderPayloadJsonapi;
    /**
     *
     * @type {ModifyFolderPayloadData}
     * @memberof ModifyFolderPayload
     */
    'data': ModifyFolderPayloadData;
}

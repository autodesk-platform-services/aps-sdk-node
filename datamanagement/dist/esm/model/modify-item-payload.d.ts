import { ModifyFolderPayloadJsonapi } from './modify-folder-payload-jsonapi';
import { ModifyItemPayloadData } from './modify-item-payload-data';
/**
 * Describe the item to be patched.
 * @export
 * @interface ModifyItemPayload
 */
export interface ModifyItemPayload {
    /**
     *
     * @type {ModifyFolderPayloadJsonapi}
     * @memberof ModifyItemPayload
     */
    'jsonapi': ModifyFolderPayloadJsonapi;
    /**
     *
     * @type {ModifyItemPayloadData}
     * @memberof ModifyItemPayload
     */
    'data': ModifyItemPayloadData;
}

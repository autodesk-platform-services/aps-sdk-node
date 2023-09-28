import { ItemRequestData } from './item-request-data';
import { ModifyFolderJsonapi } from './modify-folder-jsonapi';
/**
 * Describe the item to be patched.
 * @export
 * @interface ItemRequest
 */
export interface ItemRequest {
    /**
     *
     * @type {ModifyFolderJsonapi}
     * @memberof ItemRequest
     */
    'jsonapi': ModifyFolderJsonapi;
    /**
     *
     * @type {ItemRequestData}
     * @memberof ItemRequest
     */
    'data': ItemRequestData;
}

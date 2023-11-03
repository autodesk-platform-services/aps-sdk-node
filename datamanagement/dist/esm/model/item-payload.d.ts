import { ItemPayloadData } from './item-payload-data';
import { ItemPayloadIncluded } from './item-payload-included';
import { ItemPayloadMeta } from './item-payload-meta';
import { ModifyFolderPayloadJsonapi } from './modify-folder-payload-jsonapi';
/**
 * Describe the item to be created.
 * @export
 * @interface ItemPayload
 */
export interface ItemPayload {
    /**
     *
     * @type {ModifyFolderPayloadJsonapi}
     * @memberof ItemPayload
     */
    'jsonapi': ModifyFolderPayloadJsonapi;
    /**
     *
     * @type {ItemPayloadData}
     * @memberof ItemPayload
     */
    'data': ItemPayloadData;
    /**
     *
     * @type {Set<ItemPayloadIncluded>}
     * @memberof ItemPayload
     */
    'included': Array<ItemPayloadIncluded>;
    /**
     *
     * @type {ItemPayloadMeta}
     * @memberof ItemPayload
     */
    'meta'?: ItemPayloadMeta;
}

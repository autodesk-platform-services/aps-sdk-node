/* tslint:disable */
/* eslint-disable */

import { CreateItemData } from './create-item-data';
import { CreateItemIncluded } from './create-item-included';
import { CreateItemMeta } from './create-item-meta';
import { ModifyFolderJsonapi } from './modify-folder-jsonapi';

/**
 * Describe the item to be created.
 * @export
 * @interface CreateItem
 */
export interface CreateItem {
    /**
     * 
     * @type {ModifyFolderJsonapi}
     * @memberof CreateItem
     */
    'jsonapi': ModifyFolderJsonapi;
    /**
     * 
     * @type {CreateItemData}
     * @memberof CreateItem
     */
    'data': CreateItemData;
    /**
     * 
     * @type {Set<CreateItemIncluded>}
     * @memberof CreateItem
     */
    'included': Set<CreateItemIncluded>;
    /**
     * 
     * @type {CreateItemMeta}
     * @memberof CreateItem
     */
    'meta'?: CreateItemMeta;
}


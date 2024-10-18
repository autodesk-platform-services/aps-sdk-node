/* tslint:disable */
/* eslint-disable */

import { ItemData } from './item-data';
import { TypeItem } from './type-item';

/**
 * 
 * @export
 * @interface ListItemsRelationshipsResourcesData
 */
export interface ListItemsRelationshipsResourcesData {
    /**
     * 
     * @type {TypeItem}
     * @memberof ListItemsRelationshipsResourcesData
     */
    'type'?: TypeItem;
    /**
     * The URN of the item.
     * @type {string}
     * @memberof ListItemsRelationshipsResourcesData
     */
    'id'?: string;
    /**
     * 
     * @type {ItemData}
     * @memberof ListItemsRelationshipsResourcesData
     */
    'meta'?: ItemData;
}




/* tslint:disable */
/* eslint-disable */

import { ItemData } from './item-data';
import { TypeItem } from './type-item';

/**
 * 
 * @export
 * @interface ListItemsResponseRelationshipsResourcesData
 */
export interface ListItemsResponseRelationshipsResourcesData {
    /**
     * 
     * @type {TypeItem}
     * @memberof ListItemsResponseRelationshipsResourcesData
     */
    'type'?: TypeItem;
    /**
     * The URN of the item.
     * @type {string}
     * @memberof ListItemsResponseRelationshipsResourcesData
     */
    'id'?: string;
    /**
     * 
     * @type {ItemData}
     * @memberof ListItemsResponseRelationshipsResourcesData
     */
    'meta'?: ItemData;
}




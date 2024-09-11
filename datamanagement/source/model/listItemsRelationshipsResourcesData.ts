
import { ItemData } from './itemData';
import { Type } from './type';

/**
 * 
 * @export
 * @interface ListItemsRelationshipsResourcesData
 */
export interface ListItemsRelationshipsResourcesData {
    /**
     * 
     * @type {Type}
     * @memberof ListItemsRelationshipsResourcesData
     */
    'type'?: Type;
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




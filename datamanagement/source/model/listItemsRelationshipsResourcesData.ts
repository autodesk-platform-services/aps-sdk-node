
import { ItemData } from './itemData';
import { TypeItem } from './typeItem';

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




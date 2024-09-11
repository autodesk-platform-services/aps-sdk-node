
import { ItemData } from './itemData';
import { ListItemsTestRelationshipsResourcesData } from './listItemsTestRelationshipsResourcesData';

/**
 * 
 * @export
 * @interface ListItemsTestRelationshipsResources
 */
export interface ListItemsTestRelationshipsResources {
    /**
     * 
     * @type {ItemData}
     * @memberof ListItemsTestRelationshipsResources
     */
    'meta'?: ItemData;
    /**
     * 
     * @type {Array<ListItemsTestRelationshipsResourcesData>}
     * @memberof ListItemsTestRelationshipsResources
     */
    'data'?: Array<ListItemsTestRelationshipsResourcesData>;
}


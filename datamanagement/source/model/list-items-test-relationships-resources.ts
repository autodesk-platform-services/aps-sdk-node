/* tslint:disable */
/* eslint-disable */

import { ItemData } from './item-data';
import { ListItemsTestRelationshipsResourcesData } from './list-items-test-relationships-resources-data';

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


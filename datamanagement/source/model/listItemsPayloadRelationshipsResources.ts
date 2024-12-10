/* tslint:disable */
/* eslint-disable */

import { ListItemsPayloadRelationshipsResourcesData } from './listItemsPayloadRelationshipsResourcesData';

/**
 * Contains the list of items  to check. The list can contain up to 50 versions.
 * @export
 * @interface ListItemsPayloadRelationshipsResources
 */
export interface ListItemsPayloadRelationshipsResources {
    /**
     * An array of objects, where each object  represents an item to check. 
     * @type {Array<ListItemsPayloadRelationshipsResourcesData>}
     * @memberof ListItemsPayloadRelationshipsResources
     */
    'data'?: Array<ListItemsPayloadRelationshipsResourcesData>;
}


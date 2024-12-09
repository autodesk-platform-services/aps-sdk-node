/* tslint:disable */
/* eslint-disable */

import { TypeItem } from './type-item';

/**
 * 
 * @export
 * @interface PublishModelJobPayloadRelationshipsResourcesData
 */
export interface PublishModelJobPayloadRelationshipsResourcesData {
    /**
     * The type of resource. Will always be: items
     * @type {TypeItem}
     * @memberof PublishModelJobPayloadRelationshipsResourcesData
     */
    'type'?: TypeItem;
    /**
     * The URN of the item to check. Use the  [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/)  operation to verify the URN.
     * @type {string}
     * @memberof PublishModelJobPayloadRelationshipsResourcesData
     */
    'id'?: string;
}




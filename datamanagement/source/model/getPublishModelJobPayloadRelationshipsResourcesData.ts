
import { Type } from './type';

/**
 * 
 * @export
 * @interface GetPublishModelJobPayloadRelationshipsResourcesData
 */
export interface GetPublishModelJobPayloadRelationshipsResourcesData {
    /**
     * 
     * @type {Type}
     * @memberof GetPublishModelJobPayloadRelationshipsResourcesData
     */
    'type'?: Type;
    /**
     * The URN of the item to check. Use the  [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/)  operation to verify the URN.
     * @type {string}
     * @memberof GetPublishModelJobPayloadRelationshipsResourcesData
     */
    'id'?: string;
}




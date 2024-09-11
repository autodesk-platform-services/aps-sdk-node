
import { Type } from './type';

/**
 * 
 * @export
 * @interface ListRefsPayloadRelationshipsResourcesData
 */
export interface ListRefsPayloadRelationshipsResourcesData {
    /**
     * 
     * @type {Type}
     * @memberof ListRefsPayloadRelationshipsResourcesData
     */
    'type'?: Type;
    /**
     * The URN of the version to check. Use the  [List all Versions of an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-versions-GET/)  operation to verify the URN.
     * @type {string}
     * @memberof ListRefsPayloadRelationshipsResourcesData
     */
    'id'?: string;
}




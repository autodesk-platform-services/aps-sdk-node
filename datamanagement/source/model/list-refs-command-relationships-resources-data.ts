/* tslint:disable */
/* eslint-disable */

import { TypeVersion } from './type-version';

/**
 * 
 * @export
 * @interface ListRefsCommandRelationshipsResourcesData
 */
export interface ListRefsCommandRelationshipsResourcesData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof ListRefsCommandRelationshipsResourcesData
     */
    'type'?: TypeVersion;
    /**
     * The URN of the version to check. Use the  [List all Versions of an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-versions-GET/)  operation to verify the URN.
     * @type {string}
     * @memberof ListRefsCommandRelationshipsResourcesData
     */
    'id'?: string;
}




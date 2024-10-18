/* tslint:disable */
/* eslint-disable */

import { ListRefsPayloadRelationshipsResourcesData } from './list-refs-payload-relationships-resources-data';

/**
 * Contains the list of versions  to check. The list can contain up to 50 versions.
 * @export
 * @interface ListRefsPayloadRelationshipsResources
 */
export interface ListRefsPayloadRelationshipsResources {
    /**
     * An array of objects, where each object  represents a version to check. 
     * @type {Array<ListRefsPayloadRelationshipsResourcesData>}
     * @memberof ListRefsPayloadRelationshipsResources
     */
    'data'?: Array<ListRefsPayloadRelationshipsResourcesData>;
}


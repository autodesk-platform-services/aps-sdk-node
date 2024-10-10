/* tslint:disable */
/* eslint-disable */

import { PublishModelJobPayloadRelationshipsResourcesData } from './publish-model-job-payload-relationships-resources-data';

/**
 * Contains the list of items  to check. The list can contain up to 50 versions.
 * @export
 * @interface ListItemsPayloadRelationshipsResources
 */
export interface ListItemsPayloadRelationshipsResources {
    /**
     * An array of objects, where each object  represents an item to check. 
     * @type {Array<PublishModelJobPayloadRelationshipsResourcesData>}
     * @memberof ListItemsPayloadRelationshipsResources
     */
    'data'?: Array<PublishModelJobPayloadRelationshipsResourcesData>;
}


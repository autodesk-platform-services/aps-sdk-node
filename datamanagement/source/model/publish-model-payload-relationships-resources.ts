/* tslint:disable */
/* eslint-disable */

import { PublishModelPayloadRelationshipsResourcesData } from './publish-model-payload-relationships-resources-data';

/**
 * Contains the list of resources to be published.
 * @export
 * @interface PublishModelPayloadRelationshipsResources
 */
export interface PublishModelPayloadRelationshipsResources {
    /**
     * An array of objects where each object  represents a resource that must be  published.
     * @type {Array<PublishModelPayloadRelationshipsResourcesData>}
     * @memberof PublishModelPayloadRelationshipsResources
     */
    'data'?: Array<PublishModelPayloadRelationshipsResourcesData>;
}

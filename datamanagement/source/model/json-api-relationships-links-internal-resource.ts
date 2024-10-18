/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksRelated } from './json-api-links-related';
import { JsonApiTypeId } from './json-api-type-id';

/**
 * Information on the resources above this resource in the hierarchy.
 * @export
 * @interface JsonApiRelationshipsLinksInternalResource
 */
export interface JsonApiRelationshipsLinksInternalResource {
    /**
     * 
     * @type {JsonApiLinksRelated}
     * @memberof JsonApiRelationshipsLinksInternalResource
     */
    'links'?: JsonApiLinksRelated;
    /**
     * 
     * @type {JsonApiTypeId}
     * @memberof JsonApiRelationshipsLinksInternalResource
     */
    'data'?: JsonApiTypeId;
}


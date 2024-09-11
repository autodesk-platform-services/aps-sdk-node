
import { JsonApiLinksRelated } from './jsonApiLinksRelated';
import { JsonApiTypeId } from './jsonApiTypeId';

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


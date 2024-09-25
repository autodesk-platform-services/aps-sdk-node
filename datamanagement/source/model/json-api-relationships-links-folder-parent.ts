/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksRelated } from './json-api-links-related';
import { JsonApiTypeId } from './json-api-type-id';

/**
 * Information on the parent of this resource in the folder hierarchy.
 * @export
 * @interface JsonApiRelationshipsLinksFolderParent
 */
export interface JsonApiRelationshipsLinksFolderParent {
    /**
     * 
     * @type {JsonApiLinksRelated}
     * @memberof JsonApiRelationshipsLinksFolderParent
     */
    'links'?: JsonApiLinksRelated;
    /**
     * 
     * @type {JsonApiTypeId}
     * @memberof JsonApiRelationshipsLinksFolderParent
     */
    'data'?: JsonApiTypeId;
}


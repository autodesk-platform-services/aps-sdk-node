/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksRelated } from './jsonApiLinksRelated';
import { JsonApiTypeId } from './jsonApiTypeId';

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


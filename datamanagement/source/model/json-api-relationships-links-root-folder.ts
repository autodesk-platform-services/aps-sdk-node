/* tslint:disable */
/* eslint-disable */

import { JsonApiMetaLink } from './json-api-meta-link';
import { JsonApiTypeId } from './json-api-type-id';

/**
 * Information about the root folder of a project.
 * @export
 * @interface JsonApiRelationshipsLinksRootFolder
 */
export interface JsonApiRelationshipsLinksRootFolder {
    /**
     * 
     * @type {JsonApiMetaLink}
     * @memberof JsonApiRelationshipsLinksRootFolder
     */
    'meta'?: JsonApiMetaLink;
    /**
     * 
     * @type {JsonApiTypeId}
     * @memberof JsonApiRelationshipsLinksRootFolder
     */
    'data'?: JsonApiTypeId;
}


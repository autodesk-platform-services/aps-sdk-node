/* tslint:disable */
/* eslint-disable */

import { JsonApiMetaLink } from './json-api-meta-link';
import { JsonApiTypeId } from './json-api-type-id';

/**
 * Contains links to resources that are external to the data domain service. This is available only with BIM360.
 * @export
 * @interface JsonApiRelationshipsLinksOnlyBim
 */
export interface JsonApiRelationshipsLinksOnlyBim {
    /**
     * 
     * @type {JsonApiMetaLink}
     * @memberof JsonApiRelationshipsLinksOnlyBim
     */
    'meta': JsonApiMetaLink;
    /**
     * 
     * @type {JsonApiTypeId}
     * @memberof JsonApiRelationshipsLinksOnlyBim
     */
    'data': JsonApiTypeId;
}


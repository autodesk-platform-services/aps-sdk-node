/* tslint:disable */
/* eslint-disable */

import { JsonApiMetaLink } from './jsonApiMetaLink';
import { JsonApiTypeId } from './jsonApiTypeId';

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


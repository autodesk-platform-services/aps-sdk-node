/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksRelated } from './json-api-links-related';
import { JsonApiTypeId } from './json-api-type-id';

/**
 * Contains information about the item this is a version of.
 * @export
 * @interface VersionDataRelationshipsItem
 */
export interface VersionDataRelationshipsItem {
    /**
     * 
     * @type {JsonApiLinksRelated}
     * @memberof VersionDataRelationshipsItem
     */
    'links'?: JsonApiLinksRelated;
    /**
     * 
     * @type {JsonApiTypeId}
     * @memberof VersionDataRelationshipsItem
     */
    'data'?: JsonApiTypeId;
}


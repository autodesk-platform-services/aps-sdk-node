/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksRelated } from './jsonApiLinksRelated';
import { JsonApiTypeId } from './jsonApiTypeId';

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


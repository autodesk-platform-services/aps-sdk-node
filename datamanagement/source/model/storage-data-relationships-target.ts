/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksRelated } from './json-api-links-related';
import { StorageDataRelationshipsTargetData } from './storage-data-relationships-target-data';

/**
 * Information about the target object.
 * @export
 * @interface StorageDataRelationshipsTarget
 */
export interface StorageDataRelationshipsTarget {
    /**
     * 
     * @type {JsonApiLinksRelated}
     * @memberof StorageDataRelationshipsTarget
     */
    'links'?: JsonApiLinksRelated;
    /**
     * 
     * @type {StorageDataRelationshipsTargetData}
     * @memberof StorageDataRelationshipsTarget
     */
    'data'?: StorageDataRelationshipsTargetData;
}


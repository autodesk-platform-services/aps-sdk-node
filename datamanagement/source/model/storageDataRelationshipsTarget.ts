/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksRelated } from './jsonApiLinksRelated';
import { StorageDataRelationshipsTargetData } from './storageDataRelationshipsTargetData';

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


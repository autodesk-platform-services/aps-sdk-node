/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksRelated } from './jsonApiLinksRelated';
import { JsonApiTypeId } from './jsonApiTypeId';

/**
 * Information about the latest version of the item.
 * @export
 * @interface JsonApiRelationshipsLinksToTipVersion
 */
export interface JsonApiRelationshipsLinksToTipVersion {
    /**
     * 
     * @type {JsonApiLinksRelated}
     * @memberof JsonApiRelationshipsLinksToTipVersion
     */
    'links'?: JsonApiLinksRelated;
    /**
     * 
     * @type {JsonApiTypeId}
     * @memberof JsonApiRelationshipsLinksToTipVersion
     */
    'data'?: JsonApiTypeId;
}


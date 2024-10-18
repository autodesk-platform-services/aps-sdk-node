/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksRelated } from './json-api-links-related';
import { JsonApiTypeId } from './json-api-type-id';

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


/* tslint:disable */
/* eslint-disable */

import { ItemPayloadIncludedRelationshipsStorage } from './item-payload-included-relationships-storage';
import { JsonApiRelationshipsRefs } from './json-api-relationships-refs';

/**
 * A container of links to resources that are related to the item to be created.
 * @export
 * @interface ItemPayloadIncludedRelationships
 */
export interface ItemPayloadIncludedRelationships {
    /**
     * 
     * @type {ItemPayloadIncludedRelationshipsStorage}
     * @memberof ItemPayloadIncludedRelationships
     */
    'storage'?: ItemPayloadIncludedRelationshipsStorage;
    /**
     * 
     * @type {JsonApiRelationshipsRefs}
     * @memberof ItemPayloadIncludedRelationships
     */
    'refs'?: JsonApiRelationshipsRefs;
}


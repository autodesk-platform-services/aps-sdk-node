/* tslint:disable */
/* eslint-disable */

import { ItemPayloadIncludedRelationshipsStorage } from './itemPayloadIncludedRelationshipsStorage';
import { JsonApiRelationshipsRefs } from './jsonApiRelationshipsRefs';

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


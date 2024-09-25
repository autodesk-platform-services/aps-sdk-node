/* tslint:disable */
/* eslint-disable */

import { ItemPayloadDataRelationshipsParent } from './item-payload-data-relationships-parent';
import { ItemPayloadDataRelationshipsTip } from './item-payload-data-relationships-tip';

/**
 * A container of links to resources that are related to the item to be created.
 * @export
 * @interface ItemPayloadDataRelationships
 */
export interface ItemPayloadDataRelationships {
    /**
     * 
     * @type {ItemPayloadDataRelationshipsTip}
     * @memberof ItemPayloadDataRelationships
     */
    'tip': ItemPayloadDataRelationshipsTip;
    /**
     * 
     * @type {ItemPayloadDataRelationshipsParent}
     * @memberof ItemPayloadDataRelationships
     */
    'parent': ItemPayloadDataRelationshipsParent;
}


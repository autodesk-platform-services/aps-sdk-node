/* tslint:disable */
/* eslint-disable */

import { ItemPayloadDataAttributes } from './item-payload-data-attributes';
import { ItemPayloadDataRelationships } from './item-payload-data-relationships';
import { TypeItem } from './type-item';

/**
 * The data that describes the item to be created.
 * @export
 * @interface ItemPayloadData
 */
export interface ItemPayloadData {
    /**
     * 
     * @type {TypeItem}
     * @memberof ItemPayloadData
     */
    'type': TypeItem;
    /**
     * 
     * @type {ItemPayloadDataAttributes}
     * @memberof ItemPayloadData
     */
    'attributes': ItemPayloadDataAttributes;
    /**
     * 
     * @type {ItemPayloadDataRelationships}
     * @memberof ItemPayloadData
     */
    'relationships': ItemPayloadDataRelationships;
}




/* tslint:disable */
/* eslint-disable */

import { ItemPayloadDataAttributes } from './item-payload-data-attributes';
import { ItemPayloadDataRelationships } from './item-payload-data-relationships';

/**
 * The data that describes the item to be created.
 * @export
 * @interface ItemPayloadData
 */
export interface ItemPayloadData {
    /**
     * The type of resource to be created. Must be ``items``. 
     * @type {string}
     * @memberof ItemPayloadData
     */
    'type': string;
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


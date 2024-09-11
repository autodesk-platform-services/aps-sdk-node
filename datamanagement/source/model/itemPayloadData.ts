
import { ItemPayloadDataAttributes } from './itemPayloadDataAttributes';
import { ItemPayloadDataRelationships } from './itemPayloadDataRelationships';
import { Type } from './type';

/**
 * The data that describes the item to be created.
 * @export
 * @interface ItemPayloadData
 */
export interface ItemPayloadData {
    /**
     * 
     * @type {Type}
     * @memberof ItemPayloadData
     */
    'type': Type;
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




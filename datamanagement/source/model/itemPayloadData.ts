
import { ItemPayloadDataAttributes } from './itemPayloadDataAttributes';
import { ItemPayloadDataRelationships } from './itemPayloadDataRelationships';
import { TypeItem } from './typeItem';

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




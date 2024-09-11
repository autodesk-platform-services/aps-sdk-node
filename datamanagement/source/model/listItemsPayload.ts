
import { ListItemsPayloadAttributes } from './listItemsPayloadAttributes';
import { ListItemsPayloadRelationships } from './listItemsPayloadRelationships';
import { Type } from './type';

/**
 * An object that contains the input data required to execute the ListItems command.  The ListItems command retrieves metadata for up to 50 specified items. For example, an item name, or the date it was created. It also returns the tip (latest) version of the items.
 * @export
 * @interface ListItemsPayload
 */
export interface ListItemsPayload {
    /**
     * 
     * @type {Type}
     * @memberof ListItemsPayload
     */
    'type'?: Type;
    /**
     * 
     * @type {ListItemsPayloadAttributes}
     * @memberof ListItemsPayload
     */
    'attributes'?: ListItemsPayloadAttributes;
    /**
     * 
     * @type {ListItemsPayloadRelationships}
     * @memberof ListItemsPayload
     */
    'relationships'?: ListItemsPayloadRelationships;
}




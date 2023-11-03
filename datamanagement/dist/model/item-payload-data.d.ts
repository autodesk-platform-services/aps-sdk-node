import { ItemPayloadDataAttributes } from './item-payload-data-attributes';
import { ItemPayloadDataRelationships } from './item-payload-data-relationships';
import { Type } from './type';
/**
 *
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

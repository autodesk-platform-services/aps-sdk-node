import { ItemPayloadIncludedAttributes } from './item-payload-included-attributes';
import { ItemPayloadIncludedRelationships } from './item-payload-included-relationships';
import { Type } from './type';
/**
 *
 * @export
 * @interface ItemPayloadIncluded
 */
export interface ItemPayloadIncluded {
    /**
     *
     * @type {Type}
     * @memberof ItemPayloadIncluded
     */
    'type': Type;
    /**
     *
     * @type {string}
     * @memberof ItemPayloadIncluded
     */
    'id': string;
    /**
     *
     * @type {ItemPayloadIncludedAttributes}
     * @memberof ItemPayloadIncluded
     */
    'attributes': ItemPayloadIncludedAttributes;
    /**
     *
     * @type {ItemPayloadIncludedRelationships}
     * @memberof ItemPayloadIncluded
     */
    'relationships'?: ItemPayloadIncludedRelationships;
}

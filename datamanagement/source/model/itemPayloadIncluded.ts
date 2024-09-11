
import { ItemPayloadIncludedAttributes } from './itemPayloadIncludedAttributes';
import { ItemPayloadIncludedRelationships } from './itemPayloadIncludedRelationships';
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
     * The version number. Will always be ``1``.
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




/* tslint:disable */
/* eslint-disable */

import { ItemPayloadIncludedAttributes } from './item-payload-included-attributes';
import { ItemPayloadIncludedRelationships } from './item-payload-included-relationships';

/**
 * 
 * @export
 * @interface ItemPayloadIncluded
 */
export interface ItemPayloadIncluded {
    /**
     * The type of the resource. Will always be ``versions``.
     * @type {string}
     * @memberof ItemPayloadIncluded
     */
    'type': string;
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


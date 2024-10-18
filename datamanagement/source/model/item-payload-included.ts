/* tslint:disable */
/* eslint-disable */

import { ItemPayloadIncludedAttributes } from './item-payload-included-attributes';
import { ItemPayloadIncludedRelationships } from './item-payload-included-relationships';
import { TypeVersion } from './type-version';

/**
 * 
 * @export
 * @interface ItemPayloadIncluded
 */
export interface ItemPayloadIncluded {
    /**
     * 
     * @type {TypeVersion}
     * @memberof ItemPayloadIncluded
     */
    'type': TypeVersion;
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




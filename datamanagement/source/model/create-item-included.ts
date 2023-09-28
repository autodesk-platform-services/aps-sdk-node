/* tslint:disable */
/* eslint-disable */

import { CreateItemIncludedAttributes } from './create-item-included-attributes';
import { CreateItemIncludedRelationships } from './create-item-included-relationships';

/**
 * 
 * @export
 * @interface CreateItemIncluded
 */
export interface CreateItemIncluded {
    /**
     * 
     * @type {string}
     * @memberof CreateItemIncluded
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof CreateItemIncluded
     */
    'id': string;
    /**
     * 
     * @type {CreateItemIncludedAttributes}
     * @memberof CreateItemIncluded
     */
    'attributes': CreateItemIncludedAttributes;
    /**
     * 
     * @type {CreateItemIncludedRelationships}
     * @memberof CreateItemIncluded
     */
    'relationships'?: CreateItemIncludedRelationships;
}


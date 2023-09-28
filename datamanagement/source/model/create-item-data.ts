/* tslint:disable */
/* eslint-disable */

import { CreateItemDataAttributes } from './create-item-data-attributes';
import { CreateItemDataRelationships } from './create-item-data-relationships';

/**
 * 
 * @export
 * @interface CreateItemData
 */
export interface CreateItemData {
    /**
     * 
     * @type {string}
     * @memberof CreateItemData
     */
    'type': string;
    /**
     * 
     * @type {CreateItemDataAttributes}
     * @memberof CreateItemData
     */
    'attributes': CreateItemDataAttributes;
    /**
     * 
     * @type {CreateItemDataRelationships}
     * @memberof CreateItemData
     */
    'relationships': CreateItemDataRelationships;
}


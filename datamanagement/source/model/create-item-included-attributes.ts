/* tslint:disable */
/* eslint-disable */

import { CreateItemDataAttributesExtension } from './create-item-data-attributes-extension';

/**
 * 
 * @export
 * @interface CreateItemIncludedAttributes
 */
export interface CreateItemIncludedAttributes {
    /**
     * 
     * @type {string}
     * @memberof CreateItemIncludedAttributes
     */
    'name': string;
    /**
     * 
     * @type {CreateItemDataAttributesExtension}
     * @memberof CreateItemIncludedAttributes
     */
    'extension': CreateItemDataAttributesExtension;
}


/* tslint:disable */
/* eslint-disable */

import { ItemPayloadDataAttributesExtension } from './itemPayloadDataAttributesExtension';

/**
 * The properties of the item to be created.
 * @export
 * @interface ItemPayloadDataAttributes
 */
export interface ItemPayloadDataAttributes {
    /**
     * The name of the new item (1-255 characters).  Avoid using the following reserved characters in the name: ``<``, ``>``, ``:``, ``\"``, ``/``, ``\\``, ``|``, ``?``, ``*``, ``\'``, ``\\n``, ``\\r``, ``\\t``, ``\\0``, ``\\f``, ``¢``, ``™``, ``$``, ``®``. 
     * @type {string}
     * @memberof ItemPayloadDataAttributes
     */
    'displayName'?: string;
    /**
     * 
     * @type {ItemPayloadDataAttributesExtension}
     * @memberof ItemPayloadDataAttributes
     */
    'extension': ItemPayloadDataAttributesExtension;
}


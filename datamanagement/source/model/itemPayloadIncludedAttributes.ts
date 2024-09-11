
import { ItemPayloadIncludedAttributesExtension } from './itemPayloadIncludedAttributesExtension';

/**
 * The properties of the first version of the item to be created.
 * @export
 * @interface ItemPayloadIncludedAttributes
 */
export interface ItemPayloadIncludedAttributes {
    /**
     * The name of the version (1-255 characters).  Avoid using the following reserved characters in the name: ``<``, ``>``, ``:``, ``\"``, ``/``, ``\\``, ``|``, ``?``, ``*``, ``\'``, ``\\n``, ``\\r``, ``\\t``, ``\\0``, ``\\f``, ``¢``, ``™``, ``$  If you are creating a new item by copying a version of an existing item, the name defaults to the name of the source version.
     * @type {string}
     * @memberof ItemPayloadIncludedAttributes
     */
    'name': string;
    /**
     * 
     * @type {ItemPayloadIncludedAttributesExtension}
     * @memberof ItemPayloadIncludedAttributes
     */
    'extension': ItemPayloadIncludedAttributesExtension;
}


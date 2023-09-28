import { CreateItemDataAttributesExtension } from './create-item-data-attributes-extension';
/**
 *
 * @export
 * @interface CreateItemDataAttributes
 */
export interface CreateItemDataAttributes {
    /**
     *
     * @type {string}
     * @memberof CreateItemDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {CreateItemDataAttributesExtension}
     * @memberof CreateItemDataAttributes
     */
    'extension': CreateItemDataAttributesExtension;
}

import { ItemPayloadDataAttributesExtension } from './item-payload-data-attributes-extension';
/**
 *
 * @export
 * @interface ItemPayloadIncludedAttributes
 */
export interface ItemPayloadIncludedAttributes {
    /**
     *
     * @type {string}
     * @memberof ItemPayloadIncludedAttributes
     */
    'name': string;
    /**
     *
     * @type {ItemPayloadDataAttributesExtension}
     * @memberof ItemPayloadIncludedAttributes
     */
    'extension': ItemPayloadDataAttributesExtension;
}

import { ItemPayloadDataAttributesExtension } from './item-payload-data-attributes-extension';
/**
 *
 * @export
 * @interface ItemPayloadDataAttributes
 */
export interface ItemPayloadDataAttributes {
    /**
     *
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

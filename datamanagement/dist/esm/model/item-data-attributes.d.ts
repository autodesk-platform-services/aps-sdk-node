import { ItemDataAttributesExtension } from './item-data-attributes-extension';
/**
 *
 * @export
 * @interface ItemDataAttributes
 */
export interface ItemDataAttributes {
    /**
     *
     * @type {string}
     * @memberof ItemDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ItemDataAttributes
     */
    'hidden'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ItemDataAttributes
     */
    'reserved'?: boolean;
    /**
     *
     * @type {ItemDataAttributesExtension}
     * @memberof ItemDataAttributes
     */
    'extension'?: ItemDataAttributesExtension;
}

import { ItemTipDataAttributesExtension } from './item-tip-data-attributes-extension';
/**
 *
 * @export
 * @interface ItemTipDataAttributes
 */
export interface ItemTipDataAttributes {
    /**
     *
     * @type {string}
     * @memberof ItemTipDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemTipDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemTipDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemTipDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemTipDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemTipDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemTipDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemTipDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {number}
     * @memberof ItemTipDataAttributes
     */
    'versionNumber'?: number;
    /**
     *
     * @type {string}
     * @memberof ItemTipDataAttributes
     */
    'mimeType'?: string;
    /**
     *
     * @type {ItemTipDataAttributesExtension}
     * @memberof ItemTipDataAttributes
     */
    'extension'?: ItemTipDataAttributesExtension;
}

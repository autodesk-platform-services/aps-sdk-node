import { ItemIncludedAttributesExtension } from './item-included-attributes-extension';
/**
 *
 * @export
 * @interface ItemIncludedAttributes
 */
export interface ItemIncludedAttributes {
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {number}
     * @memberof ItemIncludedAttributes
     */
    'versionNumber'?: number;
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributes
     */
    'mimeType'?: string;
    /**
     *
     * @type {string}
     * @memberof ItemIncludedAttributes
     */
    'fileType'?: string;
    /**
     *
     * @type {ItemIncludedAttributesExtension}
     * @memberof ItemIncludedAttributes
     */
    'extension'?: ItemIncludedAttributesExtension;
}

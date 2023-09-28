import { SearchDataAttributesExtension } from './search-data-attributes-extension';
/**
 *
 * @export
 * @interface SearchDataAttributes
 */
export interface SearchDataAttributes {
    /**
     *
     * @type {string}
     * @memberof SearchDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof SearchDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {number}
     * @memberof SearchDataAttributes
     */
    'versionNumber'?: number;
    /**
     *
     * @type {string}
     * @memberof SearchDataAttributes
     */
    'fileType'?: string;
    /**
     *
     * @type {SearchDataAttributesExtension}
     * @memberof SearchDataAttributes
     */
    'extension'?: SearchDataAttributesExtension;
}

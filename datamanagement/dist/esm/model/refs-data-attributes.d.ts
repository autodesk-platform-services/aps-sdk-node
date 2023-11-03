import { RefsDataAttributesExtension } from './refs-data-attributes-extension';
/**
 *
 * @export
 * @interface RefsDataAttributes
 */
export interface RefsDataAttributes {
    /**
     *
     * @type {string}
     * @memberof RefsDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof RefsDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof RefsDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof RefsDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof RefsDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof RefsDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof RefsDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof RefsDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {number}
     * @memberof RefsDataAttributes
     */
    'versionNumber'?: number;
    /**
     *
     * @type {string}
     * @memberof RefsDataAttributes
     */
    'mimeType'?: string;
    /**
     *
     * @type {RefsDataAttributesExtension}
     * @memberof RefsDataAttributes
     */
    'extension'?: RefsDataAttributesExtension;
}

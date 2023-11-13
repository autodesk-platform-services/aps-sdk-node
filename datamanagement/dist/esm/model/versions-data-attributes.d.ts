import { VersionsDataAttributesExtension } from './versions-data-attributes-extension';
/**
 *
 * @export
 * @interface VersionsDataAttributes
 */
export interface VersionsDataAttributes {
    /**
     *
     * @type {string}
     * @memberof VersionsDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionsDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionsDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionsDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionsDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionsDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionsDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionsDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {number}
     * @memberof VersionsDataAttributes
     */
    'versionNumber'?: number;
    /**
     *
     * @type {string}
     * @memberof VersionsDataAttributes
     */
    'mimeType'?: string;
    /**
     *
     * @type {VersionsDataAttributesExtension}
     * @memberof VersionsDataAttributes
     */
    'extension'?: VersionsDataAttributesExtension;
}

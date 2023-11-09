import { VersionDetailsDataAttributesExtension } from './version-details-data-attributes-extension';
/**
 *
 * @export
 * @interface VersionDetailsDataAttributes
 */
export interface VersionDetailsDataAttributes {
    /**
     *
     * @type {string}
     * @memberof VersionDetailsDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDetailsDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDetailsDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDetailsDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDetailsDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDetailsDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDetailsDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDetailsDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {number}
     * @memberof VersionDetailsDataAttributes
     */
    'versionNumber'?: number;
    /**
     *
     * @type {string}
     * @memberof VersionDetailsDataAttributes
     */
    'mimeType'?: string;
    /**
     *
     * @type {VersionDetailsDataAttributesExtension}
     * @memberof VersionDetailsDataAttributes
     */
    'extension'?: VersionDetailsDataAttributesExtension;
}

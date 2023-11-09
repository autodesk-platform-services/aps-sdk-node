import { VersionDataAttributesExtension } from './version-data-attributes-extension';
/**
 *
 * @export
 * @interface VersionDataAttributes
 */
export interface VersionDataAttributes {
    /**
     *
     * @type {string}
     * @memberof VersionDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof VersionDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {number}
     * @memberof VersionDataAttributes
     */
    'versionNumber'?: number;
    /**
     *
     * @type {VersionDataAttributesExtension}
     * @memberof VersionDataAttributes
     */
    'extension'?: VersionDataAttributesExtension;
}

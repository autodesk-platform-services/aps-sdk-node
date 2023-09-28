import { TopFoldersDataAttributesExtension } from './top-folders-data-attributes-extension';
/**
 *
 * @export
 * @interface TopFoldersDataAttributes
 */
export interface TopFoldersDataAttributes {
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof TopFoldersDataAttributes
     */
    'lastModifiedTimeRollup'?: string;
    /**
     *
     * @type {number}
     * @memberof TopFoldersDataAttributes
     */
    'objectCount'?: number;
    /**
     *
     * @type {boolean}
     * @memberof TopFoldersDataAttributes
     */
    'hidden'?: boolean;
    /**
     *
     * @type {TopFoldersDataAttributesExtension}
     * @memberof TopFoldersDataAttributes
     */
    'extension'?: TopFoldersDataAttributesExtension;
}

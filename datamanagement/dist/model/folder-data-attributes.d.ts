import { FolderDataAttributesExtension } from './folder-data-attributes-extension';
/**
 *
 * @export
 * @interface FolderDataAttributes
 */
export interface FolderDataAttributes {
    /**
     *
     * @type {string}
     * @memberof FolderDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderDataAttributes
     */
    'lastModifiedTimeRollup'?: string;
    /**
     *
     * @type {number}
     * @memberof FolderDataAttributes
     */
    'objectCount'?: number;
    /**
     *
     * @type {boolean}
     * @memberof FolderDataAttributes
     */
    'hidden'?: boolean;
    /**
     *
     * @type {FolderDataAttributesExtension}
     * @memberof FolderDataAttributes
     */
    'extension'?: FolderDataAttributesExtension;
}

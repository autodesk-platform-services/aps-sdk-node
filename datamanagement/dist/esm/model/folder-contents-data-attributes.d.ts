import { FolderContentsDataAttributesExtension } from './folder-contents-data-attributes-extension';
/**
 *
 * @export
 * @interface FolderContentsDataAttributes
 */
export interface FolderContentsDataAttributes {
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributes
     */
    'lastModifiedTimeRollup'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsDataAttributes
     */
    'path'?: string;
    /**
     *
     * @type {number}
     * @memberof FolderContentsDataAttributes
     */
    'objectCount'?: number;
    /**
     *
     * @type {boolean}
     * @memberof FolderContentsDataAttributes
     */
    'hidden'?: boolean;
    /**
     *
     * @type {FolderContentsDataAttributesExtension}
     * @memberof FolderContentsDataAttributes
     */
    'extension'?: FolderContentsDataAttributesExtension;
}

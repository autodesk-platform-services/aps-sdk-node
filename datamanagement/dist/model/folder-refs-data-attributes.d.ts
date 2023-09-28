import { FolderDataAttributesExtension } from './folder-data-attributes-extension';
/**
 *
 * @export
 * @interface FolderRefsDataAttributes
 */
export interface FolderRefsDataAttributes {
    /**
     *
     * @type {string}
     * @memberof FolderRefsDataAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderRefsDataAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderRefsDataAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderRefsDataAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderRefsDataAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderRefsDataAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderRefsDataAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderRefsDataAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {number}
     * @memberof FolderRefsDataAttributes
     */
    'objectCount'?: number;
    /**
     *
     * @type {boolean}
     * @memberof FolderRefsDataAttributes
     */
    'hidden'?: boolean;
    /**
     *
     * @type {FolderDataAttributesExtension}
     * @memberof FolderRefsDataAttributes
     */
    'extension'?: FolderDataAttributesExtension;
}

import { FolderContentsIncludedAttributesExtension } from './folder-contents-included-attributes-extension';
/**
 *
 * @export
 * @interface FolderContentsIncludedAttributes
 */
export interface FolderContentsIncludedAttributes {
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributes
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributes
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributes
     */
    'createTime'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributes
     */
    'createUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributes
     */
    'createUserName'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributes
     */
    'lastModifiedTime'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributes
     */
    'lastModifiedUserId'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributes
     */
    'lastModifiedUserName'?: string;
    /**
     *
     * @type {number}
     * @memberof FolderContentsIncludedAttributes
     */
    'versionNumber'?: number;
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributes
     */
    'mimeType'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncludedAttributes
     */
    'fileType'?: string;
    /**
     *
     * @type {number}
     * @memberof FolderContentsIncludedAttributes
     */
    'storageSize'?: number;
    /**
     *
     * @type {FolderContentsIncludedAttributesExtension}
     * @memberof FolderContentsIncludedAttributes
     */
    'extension'?: FolderContentsIncludedAttributesExtension;
}

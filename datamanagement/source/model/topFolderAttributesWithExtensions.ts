
import { TopFolderExtensionWithSchemaLink } from './topFolderExtensionWithSchemaLink';

/**
 * The properties of a folder.
 * @export
 * @interface TopFolderAttributesWithExtensions
 */
export interface TopFolderAttributesWithExtensions {
    /**
     * The name of the folder.
     * @type {string}
     * @memberof TopFolderAttributesWithExtensions
     */
    'name': string;
    /**
     * Reserved for future Use. Do not use. Use ``attributes.name`` for the folder name.
     * @type {string}
     * @memberof TopFolderAttributesWithExtensions
     */
    'displayName': string;
    /**
     * The number of objects inside the folder.
     * @type {number}
     * @memberof TopFolderAttributesWithExtensions
     */
    'objectCount': number;
    /**
     * The time the folder was created, in the following format: ``YYYY-MM-DDThh:mm:ss.sz``.
     * @type {string}
     * @memberof TopFolderAttributesWithExtensions
     */
    'createTime': string;
    /**
     * The unique identifier of the user who created the folder.
     * @type {string}
     * @memberof TopFolderAttributesWithExtensions
     */
    'createUserId': string;
    /**
     * The name of the user who created the folder.
     * @type {string}
     * @memberof TopFolderAttributesWithExtensions
     */
    'createUserName': string;
    /**
     * The last time the folder was modified, in the following format: ``YYYY-MM-DDThh:mm:ss.sz``.
     * @type {string}
     * @memberof TopFolderAttributesWithExtensions
     */
    'lastModifiedTime': string;
    /**
     * The last time the folder was modified, in the following format: ``YYYY-MM-DDThh:mm:ss.sz``.
     * @type {string}
     * @memberof TopFolderAttributesWithExtensions
     */
    'lastModifiedUserId': string;
    /**
     * The name of the user who last modified the folder.
     * @type {string}
     * @memberof TopFolderAttributesWithExtensions
     */
    'lastModifiedUserName': string;
    /**
     * The date and time the folder or any of its children were last updated.
     * @type {string}
     * @memberof TopFolderAttributesWithExtensions
     */
    'lastModifiedTimeRollup'?: string;
    /**
     * The folder’s current visibility state.
     * @type {boolean}
     * @memberof TopFolderAttributesWithExtensions
     */
    'hidden': boolean;
    /**
     * 
     * @type {TopFolderExtensionWithSchemaLink}
     * @memberof TopFolderAttributesWithExtensions
     */
    'extensions'?: TopFolderExtensionWithSchemaLink;
}


/* tslint:disable */
/* eslint-disable */

import { FolderExtensionWithSchemaLink } from './folder-extension-with-schema-link';

/**
 * The properties of a folder.
 * @export
 * @interface FolderAttributesWithExtensions
 */
export interface FolderAttributesWithExtensions {
    /**
     * The name of the folder.
     * @type {string}
     * @memberof FolderAttributesWithExtensions
     */
    'name': string;
    /**
     * Reserved for future Use. Do not use. Use ``attributes.name`` for the folder name.
     * @type {string}
     * @memberof FolderAttributesWithExtensions
     */
    'displayName': string;
    /**
     * The number of objects inside the folder.
     * @type {number}
     * @memberof FolderAttributesWithExtensions
     */
    'objectCount': number;
    /**
     * The time the folder was created, in the following format: ``YYYY-MM-DDThh:mm:ss.sz``.
     * @type {string}
     * @memberof FolderAttributesWithExtensions
     */
    'createTime': string;
    /**
     * The unique identifier of the user who created the folder.
     * @type {string}
     * @memberof FolderAttributesWithExtensions
     */
    'createUserId': string;
    /**
     * The name of the user who created the folder.
     * @type {string}
     * @memberof FolderAttributesWithExtensions
     */
    'createUserName': string;
    /**
     * The last time the folder was modified, in the following format: ``YYYY-MM-DDThh:mm:ss.sz``.
     * @type {string}
     * @memberof FolderAttributesWithExtensions
     */
    'lastModifiedTime': string;
    /**
     * The last time the folder was modified, in the following format: ``YYYY-MM-DDThh:mm:ss.sz``.
     * @type {string}
     * @memberof FolderAttributesWithExtensions
     */
    'lastModifiedUserId': string;
    /**
     * The name of the user who last modified the folder.
     * @type {string}
     * @memberof FolderAttributesWithExtensions
     */
    'lastModifiedUserName': string;
    /**
     * The date and time the folder or any of its children were last updated.
     * @type {string}
     * @memberof FolderAttributesWithExtensions
     */
    'lastModifiedTimeRollup'?: string;
    /**
     * The folder’s current visibility state.
     * @type {boolean}
     * @memberof FolderAttributesWithExtensions
     */
    'hidden': boolean;
    /**
     * 
     * @type {FolderExtensionWithSchemaLink}
     * @memberof FolderAttributesWithExtensions
     */
    'extensions'?: FolderExtensionWithSchemaLink;
}


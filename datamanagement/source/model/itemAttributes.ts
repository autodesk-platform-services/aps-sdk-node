/* tslint:disable */
/* eslint-disable */

import { ItemExtensionWithSchemaLink } from './itemExtensionWithSchemaLink';

/**
 * Properties of an item.
 * @export
 * @interface ItemAttributes
 */
export interface ItemAttributes {
    /**
     * A human friendly name to identify the item.  Note that for BIM 360 projects, this attribute is reserved for future releases and should not be used. Use a version\'s ``attributes.name`` for the file name.
     * @type {string}
     * @memberof ItemAttributes
     */
    'displayName': string;
    /**
     * The time that the resource was created at.
     * @type {string}
     * @memberof ItemAttributes
     */
    'createTime': string;
    /**
     * The ID of the user that created the version.
     * @type {string}
     * @memberof ItemAttributes
     */
    'createUserId': string;
    /**
     * The user name of the user that created the version.
     * @type {string}
     * @memberof ItemAttributes
     */
    'createUserName': string;
    /**
     * The time that the version was last modified.
     * @type {string}
     * @memberof ItemAttributes
     */
    'lastModifiedTime': string;
    /**
     * The ID of the user that last modified the version.
     * @type {string}
     * @memberof ItemAttributes
     */
    'lastModifiedUserId': string;
    /**
     * The user name of the user that last modified the version.
     * @type {string}
     * @memberof ItemAttributes
     */
    'lastModifiedUserName': string;
    /**
     * ``true``: The file has been deleted.   ``false``: The file has not been deleted. 
     * @type {boolean}
     * @memberof ItemAttributes
     */
    'hidden'?: boolean;
    /**
     * ``true``: The file is locked.  ``false`` The file is not locked.   **Note:** You can lock BIM 360 Project Files folder files and A360 files, but you cannot lock BIM 360 Plans Folder files. 
     * @type {boolean}
     * @memberof ItemAttributes
     */
    'reserved'?: boolean;
    /**
     * The time the item was reserved in the following format: ``YYYY-MM-DDThh:mm:ss.sz``.
     * @type {string}
     * @memberof ItemAttributes
     */
    'reservedTime'?: string;
    /**
     * The unique identifier of the user who reserved the item.
     * @type {string}
     * @memberof ItemAttributes
     */
    'reservedUserId'?: string;
    /**
     * The name of the user who reserved the item.
     * @type {string}
     * @memberof ItemAttributes
     */
    'reservedUserName'?: string;
    /**
     * 
     * @type {ItemExtensionWithSchemaLink}
     * @memberof ItemAttributes
     */
    'extension': ItemExtensionWithSchemaLink;
}


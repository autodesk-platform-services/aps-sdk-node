/* tslint:disable */
/* eslint-disable */

import { FolderPayloadDataAttributesExtension } from './folder-payload-data-attributes-extension';

/**
 * The properties of the folder to be created.
 * @export
 * @interface FolderPayloadDataAttributes
 */
export interface FolderPayloadDataAttributes {
    /**
     * The name of the new folder (1-255 characters).  Avoid using the following reserved characters in the name: ``<``, ``>``, ``:``, ``\"``, ``/``, ``\\``, ``|``, ``?``, ``*``, ``\'``, ``\\n``, ``\\r``, ``\\t``, ``\\0``, ``\\f``, ``¢``, ``™``, ``$``, ``®``.  If you assign the name of a deleted folder to this folder, and later you decide to restore the deleted folder, you will have to rename the deleted folder. 
     * @type {string}
     * @memberof FolderPayloadDataAttributes
     */
    'name': string;
    /**
     * 
     * @type {FolderPayloadDataAttributesExtension}
     * @memberof FolderPayloadDataAttributes
     */
    'extension': FolderPayloadDataAttributesExtension;
}


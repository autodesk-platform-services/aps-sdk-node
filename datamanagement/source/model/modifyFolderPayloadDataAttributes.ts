

/**
 * The properties of the folder that can be modified.
 * @export
 * @interface ModifyFolderPayloadDataAttributes
 */
export interface ModifyFolderPayloadDataAttributes {
    /**
     * The new folder name (1-255 characters).   Avoid using the following reserved characters in the name: ``<``, ``>``, ``:``, ``\"``, ``/``, ``\\``, ``|``, ``?``, ``*``, ``\'``, ``\\n``, ``\\r``, ``\\t``, ``\\0``, ``\\f``, ``¢``, ``™``, ``$``, ``®``.   When a deleted folder is restored, it keeps its original name. However, if a name conflict occurs, you must provide a new unique name for it. 
     * @type {string}
     * @memberof ModifyFolderPayloadDataAttributes
     */
    'name'?: string;
    /**
     * ``true`` : Delete a BIM 360 Docs folder.  ``false`` : Restore a BIM 360 Docs folder.
     * @type {boolean}
     * @memberof ModifyFolderPayloadDataAttributes
     */
    'hidden'?: boolean;
}


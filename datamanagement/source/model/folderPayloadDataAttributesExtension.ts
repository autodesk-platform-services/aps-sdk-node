/* tslint:disable */
/* eslint-disable */


/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface FolderPayloadDataAttributesExtension
 */
export interface FolderPayloadDataAttributesExtension {
    /**
     * The type of the extension.  For BIM 360 Docs folders, use ``folders:autodesk.bim360:Folder``.  For all other services, use ``folders:auto``
     * @type {string}
     * @memberof FolderPayloadDataAttributesExtension
     */
    'type': string;
    /**
     * The version of the type. The current version is ``1.0``.
     * @type {string}
     * @memberof FolderPayloadDataAttributesExtension
     */
    'version': string;
    /**
     * The container of additional properties.  The additional properties must follow the schema specified by ``type`` and ``version``. Properties that don\'t follow the schema will be ignored.
     * @type {object}
     * @memberof FolderPayloadDataAttributesExtension
     */
    'data'?: object;
}


/* tslint:disable */
/* eslint-disable */


/**
 * The Type ID of the schema that defines the structure of the ``extension.data`` object
 * @export
 * @interface ItemPayloadDataAttributesExtension
 */
export interface ItemPayloadDataAttributesExtension {
    /**
     * The type of the extension.  For BIM 360 Docs files, use ``items:autodesk.bim360:File``.  For all other services, use ``items:autodesk.core:File``. 
     * @type {string}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'type'?: string;
    /**
     * The version of the schema that applies to the ``extension.data`` object.
     * @type {string}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'version'?: string;
    /**
     * The container of additional properties.  The additional properties must follow the schema specified by ``extensions.type`` and ``extensions.version``. Properties that don\'t follow the schema will be ignored. 
     * @type {{ [key: string]: object; }}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'data'?: { [key: string]: object; };
}


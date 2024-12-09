/* tslint:disable */
/* eslint-disable */


/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface ItemPayloadIncludedAttributesExtension
 */
export interface ItemPayloadIncludedAttributesExtension {
    /**
     * The type of the extension.  For BIM 360 Docs files, use ``versions:autodesk.bim360:File``.  For A360 composite design files, use ``versions:autodesk.a360:CompositeDesign``.  For A360 Personal, Fusion Team, or BIM 360 Team files, use ``versions:autodesk.core:File``. 
     * @type {string}
     * @memberof ItemPayloadIncludedAttributesExtension
     */
    'type'?: string;
    /**
     * The version of the extension type (``included[i].attributes.extension.type``). The current version is ``1.0``.
     * @type {string}
     * @memberof ItemPayloadIncludedAttributesExtension
     */
    'version'?: string;
    /**
     * The container of the additional properties.  The additional properties must follow the schema specified by ``extensions.type`` and ``extensions.version``. Properties that don\'t follow the schema will be ignored.
     * @type {{ [key: string]: object; }}
     * @memberof ItemPayloadIncludedAttributesExtension
     */
    'data'?: { [key: string]: object; };
}


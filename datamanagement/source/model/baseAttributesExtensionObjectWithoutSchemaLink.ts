/* tslint:disable */
/* eslint-disable */


/**
 * A container of additional properties that extends this resource.
 * @export
 * @interface BaseAttributesExtensionObjectWithoutSchemaLink
 */
export interface BaseAttributesExtensionObjectWithoutSchemaLink {
    /**
     * The Type ID of the schema that defines the structure of the ``extension.data`` object.
     * @type {string}
     * @memberof BaseAttributesExtensionObjectWithoutSchemaLink
     */
    'type': string;
    /**
     * The version of the schema that applies to the ``extension.data`` object.
     * @type {string}
     * @memberof BaseAttributesExtensionObjectWithoutSchemaLink
     */
    'version': string;
    /**
     * The object that contains the additional properties, which makes this resource extensible.
     * @type {{ [key: string]: object; }}
     * @memberof BaseAttributesExtensionObjectWithoutSchemaLink
     */
    'data'?: { [key: string]: object; };
}


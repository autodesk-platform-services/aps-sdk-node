/* tslint:disable */
/* eslint-disable */

import { BaseAttributesExtensionObjectWithSchemaLinkSchema } from './baseAttributesExtensionObjectWithSchemaLinkSchema';

/**
 * A container of additional properties that extends this resource.
 * @export
 * @interface BaseAttributesExtensionObjectWithSchemaLink
 */
export interface BaseAttributesExtensionObjectWithSchemaLink {
    /**
     * The Type ID of the schema that defines the structure of the ``extension.data`` object.
     * @type {string}
     * @memberof BaseAttributesExtensionObjectWithSchemaLink
     */
    'type': string;
    /**
     * The version of the schema that applies to the ``extension.data`` object.
     * @type {string}
     * @memberof BaseAttributesExtensionObjectWithSchemaLink
     */
    'version': string;
    /**
     * 
     * @type {BaseAttributesExtensionObjectWithSchemaLinkSchema}
     * @memberof BaseAttributesExtensionObjectWithSchemaLink
     */
    'schema': BaseAttributesExtensionObjectWithSchemaLinkSchema;
    /**
     * The object that contains the additional properties that extends this resource.
     * @type {{ [key: string]: object; }}
     * @memberof BaseAttributesExtensionObjectWithSchemaLink
     */
    'data'?: { [key: string]: object; };
}


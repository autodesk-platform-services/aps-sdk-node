/* tslint:disable */
/* eslint-disable */

import { JsonApiLink } from './json-api-link';

/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface ProjectExtensionWithSchemaLink
 */
export interface ProjectExtensionWithSchemaLink {
    /**
     * The Type ID of the schema that defines the structure of the ``extension.data`` object.
     * @type {string}
     * @memberof ProjectExtensionWithSchemaLink
     */
    'type': string;
    /**
     * The version of the schema that applies to the ``extension.data`` object.
     * @type {string}
     * @memberof ProjectExtensionWithSchemaLink
     */
    'version': string;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof ProjectExtensionWithSchemaLink
     */
    'schema': JsonApiLink;
    /**
     * The object that contains the additional properties, which makes this resource extensible.
     * @type {{ [key: string]: object; }}
     * @memberof ProjectExtensionWithSchemaLink
     */
    'data'?: { [key: string]: object; };
}


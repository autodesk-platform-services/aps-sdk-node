/* tslint:disable */
/* eslint-disable */

import { JsonApiLink } from './json-api-link';

/**
 * A container of additional properties that extends the default properties of a version.
 * @export
 * @interface VersionExtensionWithSchemaLink
 */
export interface VersionExtensionWithSchemaLink {
    /**
     * The Type ID of the schema that defines the structure of the ``extension.data`` object.
     * @type {string}
     * @memberof VersionExtensionWithSchemaLink
     */
    'type': string;
    /**
     * The version of the schema that applies to the ``extension.data`` object.
     * @type {string}
     * @memberof VersionExtensionWithSchemaLink
     */
    'version': string;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof VersionExtensionWithSchemaLink
     */
    'schema': JsonApiLink;
    /**
     * The object that contains the additional properties, which makes this resource extensible.
     * @type {{ [key: string]: object; }}
     * @memberof VersionExtensionWithSchemaLink
     */
    'data'?: { [key: string]: object; };
}


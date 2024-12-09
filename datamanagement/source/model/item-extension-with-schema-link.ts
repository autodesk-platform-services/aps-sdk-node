/* tslint:disable */
/* eslint-disable */

import { JsonApiLink } from './json-api-link';

/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface ItemExtensionWithSchemaLink
 */
export interface ItemExtensionWithSchemaLink {
    /**
     * The Type ID of the schema that defines the structure of the ``extension.data`` object.
     * @type {string}
     * @memberof ItemExtensionWithSchemaLink
     */
    'type': string;
    /**
     * The version of the schema that applies to the ``extension.data`` object.
     * @type {string}
     * @memberof ItemExtensionWithSchemaLink
     */
    'version': string;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof ItemExtensionWithSchemaLink
     */
    'schema': JsonApiLink;
    /**
     * The object that contains the additional properties that extends this resource.
     * @type {{ [key: string]: object; }}
     * @memberof ItemExtensionWithSchemaLink
     */
    'data'?: { [key: string]: object; };
}


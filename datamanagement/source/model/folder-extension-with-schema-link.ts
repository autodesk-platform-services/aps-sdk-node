/* tslint:disable */
/* eslint-disable */

import { JsonApiLink } from './json-api-link';

/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface FolderExtensionWithSchemaLink
 */
export interface FolderExtensionWithSchemaLink {
    /**
     * The type of folder the resource represents.
     * @type {string}
     * @memberof FolderExtensionWithSchemaLink
     */
    'type': string;
    /**
     * The version of the folder type.
     * @type {string}
     * @memberof FolderExtensionWithSchemaLink
     */
    'version': string;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof FolderExtensionWithSchemaLink
     */
    'schema': JsonApiLink;
    /**
     * The object that contains the additional properties, which makes this resource extensible.
     * @type {{ [key: string]: object; }}
     * @memberof FolderExtensionWithSchemaLink
     */
    'data'?: { [key: string]: object; };
}


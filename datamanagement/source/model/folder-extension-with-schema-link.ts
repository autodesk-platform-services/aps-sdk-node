/* tslint:disable */
/* eslint-disable */

import { FolderExtensionWithSchemaLinkData } from './folder-extension-with-schema-link-data';
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
     * 
     * @type {FolderExtensionWithSchemaLinkData}
     * @memberof FolderExtensionWithSchemaLink
     */
    'data'?: FolderExtensionWithSchemaLinkData;
}


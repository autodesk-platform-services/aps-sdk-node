/* tslint:disable */
/* eslint-disable */

import { JsonApiLink } from './jsonApiLink';

/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface TopFolderExtensionWithSchemaLink
 */
export interface TopFolderExtensionWithSchemaLink {
    /**
     * The type of folder the resource represents.
     * @type {string}
     * @memberof TopFolderExtensionWithSchemaLink
     */
    'type': string;
    /**
     * The version of the folder type.
     * @type {string}
     * @memberof TopFolderExtensionWithSchemaLink
     */
    'version': string;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof TopFolderExtensionWithSchemaLink
     */
    'schema': JsonApiLink;
    /**
     * The object that contains the additional properties, which makes this resource extensible.
     * @type {{ [key: string]: object; }}
     * @memberof TopFolderExtensionWithSchemaLink
     */
    'data'?: { [key: string]: object; };
}


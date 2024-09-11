
import { JsonApiLink } from './jsonApiLink';
import { TopFolderExtensionWithSchemaLinkData } from './topFolderExtensionWithSchemaLinkData';

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
     * 
     * @type {TopFolderExtensionWithSchemaLinkData}
     * @memberof TopFolderExtensionWithSchemaLink
     */
    'data'?: TopFolderExtensionWithSchemaLinkData;
}


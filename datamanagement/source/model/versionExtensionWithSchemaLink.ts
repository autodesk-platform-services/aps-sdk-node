
import { JsonApiLink } from './jsonApiLink';
import { VersionExtensionWithSchemaLinkData } from './versionExtensionWithSchemaLinkData';

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
     * 
     * @type {VersionExtensionWithSchemaLinkData}
     * @memberof VersionExtensionWithSchemaLink
     */
    'data'?: VersionExtensionWithSchemaLinkData;
}


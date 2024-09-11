
import { JsonApiLink } from './jsonApiLink';
import { ProjectExtensionWithSchemaLinkData } from './projectExtensionWithSchemaLinkData';

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
     * 
     * @type {ProjectExtensionWithSchemaLinkData}
     * @memberof ProjectExtensionWithSchemaLink
     */
    'data'?: ProjectExtensionWithSchemaLinkData;
}


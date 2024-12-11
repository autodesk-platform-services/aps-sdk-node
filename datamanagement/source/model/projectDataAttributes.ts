/* tslint:disable */
/* eslint-disable */

import { ProjectExtensionWithSchemaLink } from './projectExtensionWithSchemaLink';

/**
 * The properties of the project.
 * @export
 * @interface ProjectDataAttributes
 */
export interface ProjectDataAttributes {
    /**
     * A human friendly name to identify the project.
     * @type {string}
     * @memberof ProjectDataAttributes
     */
    'name'?: string;
    /**
     * The array of scopes that apply to this project.
     * @type {Array<string>}
     * @memberof ProjectDataAttributes
     */
    'scopes'?: Array<string>;
    /**
     * 
     * @type {ProjectExtensionWithSchemaLink}
     * @memberof ProjectDataAttributes
     */
    'extension'?: ProjectExtensionWithSchemaLink;
}


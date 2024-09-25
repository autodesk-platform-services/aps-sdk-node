/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './json-api-version';
import { PaginationInfo } from './pagination-info';
import { VersionData } from './version-data';

/**
 * Successful retrieval of the versions collection associated with a specific item.
 * @export
 * @interface Versions
 */
export interface Versions {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Versions
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {PaginationInfo}
     * @memberof Versions
     */
    'links'?: PaginationInfo;
    /**
     * An array of objects, where each object represents a version.
     * @type {Set<VersionData>}
     * @memberof Versions
     */
    'data'?: Set<VersionData>;
}


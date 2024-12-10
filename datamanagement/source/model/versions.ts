/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './jsonApiVersion';
import { PaginationInfo } from './paginationInfo';
import { VersionData } from './versionData';

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
     * @type {Array<VersionData>}
     * @memberof Versions
     */
    'data'?: Array<VersionData>;
}


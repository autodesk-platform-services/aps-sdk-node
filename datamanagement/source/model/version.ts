/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';
import { VersionData } from './versionData';

/**
 * An object that represdents a version.
 * @export
 * @interface Version
 */
export interface Version {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Version
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Version
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {VersionData}
     * @memberof Version
     */
    'data'?: VersionData;
}


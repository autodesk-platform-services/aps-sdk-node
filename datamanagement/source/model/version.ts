/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';
import { VersionData } from './version-data';

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



import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';
import { VersionData } from './versionData';

/**
 * An object that represdents a version.
 * @export
 * @interface VersionDetails
 */
export interface VersionDetails {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof VersionDetails
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof VersionDetails
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {VersionData}
     * @memberof VersionDetails
     */
    'data'?: VersionData;
}



import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { TypeVersion } from './typeVersion';
import { VersionAttributes } from './versionAttributes';
import { VersionDataRelationships } from './versionDataRelationships';

/**
 * A container of data describing a version.
 * @export
 * @interface VersionData
 */
export interface VersionData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof VersionData
     */
    'type': TypeVersion;
    /**
     * URN of the version object.
     * @type {string}
     * @memberof VersionData
     */
    'id': string;
    /**
     * 
     * @type {VersionAttributes}
     * @memberof VersionData
     */
    'attributes': VersionAttributes;
    /**
     * 
     * @type {VersionDataRelationships}
     * @memberof VersionData
     */
    'relationships': VersionDataRelationships;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof VersionData
     */
    'links'?: JsonApiLinksSelfAndWebView;
}




/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksSelfAndWebView } from './json-api-links-self-and-web-view';
import { TypeVersion } from './type-version';
import { VersionAttributes } from './version-attributes';
import { VersionDataRelationships } from './version-data-relationships';

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




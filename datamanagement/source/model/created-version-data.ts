/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksSelfAndWebView } from './json-api-links-self-and-web-view';
import { TypeVersion } from './type-version';
import { VersionAttributes } from './version-attributes';

/**
 * A container of data describing the version.
 * @export
 * @interface CreatedVersionData
 */
export interface CreatedVersionData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof CreatedVersionData
     */
    'type'?: TypeVersion;
    /**
     * The ID that uniquely identifies the version (Version ID). The Version ID is the URN of the version.
     * @type {string}
     * @memberof CreatedVersionData
     */
    'id'?: string;
    /**
     * 
     * @type {VersionAttributes}
     * @memberof CreatedVersionData
     */
    'attributes'?: VersionAttributes;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof CreatedVersionData
     */
    'links'?: JsonApiLinksSelfAndWebView;
}




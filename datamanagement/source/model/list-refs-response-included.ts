/* tslint:disable */
/* eslint-disable */

import { ItemData } from './item-data';
import { JsonApiLinksSelfAndWebView } from './json-api-links-self-and-web-view';
import { TypeVersion } from './type-version';
import { VersionAttributes } from './version-attributes';
import { VersionData } from './version-data';
import { VersionDataRelationships } from './version-data-relationships';

/**
 * 
 * @export
 * @interface ListRefsResponseIncluded
 */
export interface ListRefsResponseIncluded {
    /**
     * 
     * @type {TypeVersion}
     * @memberof ListRefsResponseIncluded
     */
    'type': TypeVersion;
    /**
     * URN of the version object.
     * @type {string}
     * @memberof ListRefsResponseIncluded
     */
    'id': string;
    /**
     * 
     * @type {VersionAttributes}
     * @memberof ListRefsResponseIncluded
     */
    'attributes': VersionAttributes;
    /**
     * 
     * @type {VersionDataRelationships}
     * @memberof ListRefsResponseIncluded
     */
    'relationships': VersionDataRelationships;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof ListRefsResponseIncluded
     */
    'links': JsonApiLinksSelfAndWebView;
}




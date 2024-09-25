/* tslint:disable */
/* eslint-disable */

import { FolderData } from './folder-data';
import { ItemData } from './item-data';
import { JsonApiLinksSelfAndWebView } from './json-api-links-self-and-web-view';
import { TypeVersion } from './type-version';
import { VersionAttributes } from './version-attributes';
import { VersionData } from './version-data';
import { VersionDataRelationships } from './version-data-relationships';

/**
 * 
 * @export
 * @interface FolderRefsData
 */
export interface FolderRefsData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof FolderRefsData
     */
    'type': TypeVersion;
    /**
     * URN of the version object.
     * @type {string}
     * @memberof FolderRefsData
     */
    'id': string;
    /**
     * 
     * @type {VersionAttributes}
     * @memberof FolderRefsData
     */
    'attributes': VersionAttributes;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof FolderRefsData
     */
    'links': JsonApiLinksSelfAndWebView;
    /**
     * 
     * @type {VersionDataRelationships}
     * @memberof FolderRefsData
     */
    'relationships': VersionDataRelationships;
}




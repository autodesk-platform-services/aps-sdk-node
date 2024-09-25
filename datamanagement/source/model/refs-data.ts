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
 * @interface RefsData
 */
export interface RefsData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof RefsData
     */
    'type': TypeVersion;
    /**
     * URN of the version object.
     * @type {string}
     * @memberof RefsData
     */
    'id': string;
    /**
     * 
     * @type {VersionAttributes}
     * @memberof RefsData
     */
    'attributes': VersionAttributes;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof RefsData
     */
    'links': JsonApiLinksSelfAndWebView;
    /**
     * 
     * @type {VersionDataRelationships}
     * @memberof RefsData
     */
    'relationships': VersionDataRelationships;
}




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
 * @interface RelationshipRefsIncluded
 */
export interface RelationshipRefsIncluded {
    /**
     * 
     * @type {TypeVersion}
     * @memberof RelationshipRefsIncluded
     */
    'type': TypeVersion;
    /**
     * URN of the version object.
     * @type {string}
     * @memberof RelationshipRefsIncluded
     */
    'id': string;
    /**
     * 
     * @type {VersionAttributes}
     * @memberof RelationshipRefsIncluded
     */
    'attributes': VersionAttributes;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof RelationshipRefsIncluded
     */
    'links': JsonApiLinksSelfAndWebView;
    /**
     * 
     * @type {VersionDataRelationships}
     * @memberof RelationshipRefsIncluded
     */
    'relationships': VersionDataRelationships;
}




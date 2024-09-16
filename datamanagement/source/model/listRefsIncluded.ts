
import { ItemData } from './itemData';
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { TypeVersion } from './typeVersion';
import { VersionAttributes } from './versionAttributes';
import { VersionData } from './versionData';
import { VersionDataRelationships } from './versionDataRelationships';

/**
 * 
 * @export
 * @interface ListRefsIncluded
 */
export interface ListRefsIncluded {
    /**
     * 
     * @type {TypeVersion}
     * @memberof ListRefsIncluded
     */
    'type': TypeVersion;
    /**
     * URN of the version object.
     * @type {string}
     * @memberof ListRefsIncluded
     */
    'id': string;
    /**
     * 
     * @type {VersionAttributes}
     * @memberof ListRefsIncluded
     */
    'attributes': VersionAttributes;
    /**
     * 
     * @type {VersionDataRelationships}
     * @memberof ListRefsIncluded
     */
    'relationships': VersionDataRelationships;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof ListRefsIncluded
     */
    'links': JsonApiLinksSelfAndWebView;
}




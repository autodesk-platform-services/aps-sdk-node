
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { Type } from './type';
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
     * @type {Type}
     * @memberof VersionData
     */
    'type': Type;
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




/* tslint:disable */
/* eslint-disable */

import { FolderRefsData } from './folder-refs-data';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';

/**
 * 
 * @export
 * @interface FolderRefs
 */
export interface FolderRefs {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof FolderRefs
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof FolderRefs
     */
    'links'?: JsonApiLinksSelf;
    /**
     * An array of objects, where each object represents a folder, item, or version.
     * @type {Array<FolderRefsData>}
     * @memberof FolderRefs
     */
    'data'?: Array<FolderRefsData>;
}


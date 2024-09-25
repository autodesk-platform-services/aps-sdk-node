/* tslint:disable */
/* eslint-disable */

import { FolderContentsData } from './folder-contents-data';
import { FolderContentsLinks } from './folder-contents-links';
import { JsonApiVersion } from './json-api-version';
import { VersionData } from './version-data';

/**
 * Successful retrieval of the folder contents collection associated with a specific folder.
 * @export
 * @interface FolderContents
 */
export interface FolderContents {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof FolderContents
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {FolderContentsLinks}
     * @memberof FolderContents
     */
    'links': FolderContentsLinks;
    /**
     * The properties of an item or folder, as the case may be.
     * @type {Set<FolderContentsData>}
     * @memberof FolderContents
     */
    'data'?: Set<FolderContentsData>;
    /**
     * An array of objects, where each element represents a resource included within this resource.
     * @type {Array<VersionData>}
     * @memberof FolderContents
     */
    'included'?: Array<VersionData>;
}


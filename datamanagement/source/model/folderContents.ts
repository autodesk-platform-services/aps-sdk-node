/* tslint:disable */
/* eslint-disable */

import { FolderContentsData } from './folderContentsData';
import { FolderContentsLinks } from './folderContentsLinks';
import { JsonApiVersion } from './jsonApiVersion';
import { VersionData } from './versionData';

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
     * @type {Array<FolderContentsData>}
     * @memberof FolderContents
     */
    'data'?: Array<FolderContentsData>;
    /**
     * An array of objects, where each element represents a resource included within this resource.
     * @type {Array<VersionData>}
     * @memberof FolderContents
     */
    'included'?: Array<VersionData>;
}


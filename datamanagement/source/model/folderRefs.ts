
import { FolderRefsData } from './folderRefsData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';

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


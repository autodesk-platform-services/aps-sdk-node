
import { FolderData } from './folderData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';

/**
 * An object that represents a folder.
 * @export
 * @interface Folder
 */
export interface Folder {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Folder
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Folder
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {FolderData}
     * @memberof Folder
     */
    'data'?: FolderData;
}



import { FolderAttributesWithExtensions } from './folderAttributesWithExtensions';
import { FolderDataRelationships } from './folderDataRelationships';
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { TypeFolder } from './typeFolder';

/**
 * A container of data describing a folder.
 * @export
 * @interface FolderData
 */
export interface FolderData {
    /**
     * 
     * @type {TypeFolder}
     * @memberof FolderData
     */
    'type': TypeFolder;
    /**
     * The unique identifier of the folder.
     * @type {string}
     * @memberof FolderData
     */
    'id': string;
    /**
     * 
     * @type {FolderAttributesWithExtensions}
     * @memberof FolderData
     */
    'attributes': FolderAttributesWithExtensions;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof FolderData
     */
    'links': JsonApiLinksSelfAndWebView;
    /**
     * 
     * @type {FolderDataRelationships}
     * @memberof FolderData
     */
    'relationships': FolderDataRelationships;
}




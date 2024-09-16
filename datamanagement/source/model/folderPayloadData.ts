
import { FolderPayloadDataAttributes } from './folderPayloadDataAttributes';
import { FolderPayloadDataRelationships } from './folderPayloadDataRelationships';
import { TypeFolder } from './typeFolder';

/**
 * The data that describes the folder to be created.
 * @export
 * @interface FolderPayloadData
 */
export interface FolderPayloadData {
    /**
     * 
     * @type {TypeFolder}
     * @memberof FolderPayloadData
     */
    'type': TypeFolder;
    /**
     * 
     * @type {FolderPayloadDataAttributes}
     * @memberof FolderPayloadData
     */
    'attributes': FolderPayloadDataAttributes;
    /**
     * 
     * @type {FolderPayloadDataRelationships}
     * @memberof FolderPayloadData
     */
    'relationships': FolderPayloadDataRelationships;
}




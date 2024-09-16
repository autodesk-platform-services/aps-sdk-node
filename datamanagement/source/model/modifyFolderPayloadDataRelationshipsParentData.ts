
import { TypeFolder } from './typeFolder';

/**
 * A container for the data that defines the parent of this folder.
 * @export
 * @interface ModifyFolderPayloadDataRelationshipsParentData
 */
export interface ModifyFolderPayloadDataRelationshipsParentData {
    /**
     * 
     * @type {TypeFolder}
     * @memberof ModifyFolderPayloadDataRelationshipsParentData
     */
    'type': TypeFolder;
    /**
     * The URN of the parent folder to which you want to move a folder to.
     * @type {string}
     * @memberof ModifyFolderPayloadDataRelationshipsParentData
     */
    'id': string;
}




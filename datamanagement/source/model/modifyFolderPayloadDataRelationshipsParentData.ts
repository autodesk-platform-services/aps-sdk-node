
import { Type } from './type';

/**
 * A container for the data that defines the parent of this folder.
 * @export
 * @interface ModifyFolderPayloadDataRelationshipsParentData
 */
export interface ModifyFolderPayloadDataRelationshipsParentData {
    /**
     * 
     * @type {Type}
     * @memberof ModifyFolderPayloadDataRelationshipsParentData
     */
    'type': Type;
    /**
     * The URN of the parent folder to which you want to move a folder to.
     * @type {string}
     * @memberof ModifyFolderPayloadDataRelationshipsParentData
     */
    'id': string;
}




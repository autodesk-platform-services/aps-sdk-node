
import { ModifyFolderPayloadDataAttributes } from './modifyFolderPayloadDataAttributes';
import { ModifyFolderPayloadDataRelationships } from './modifyFolderPayloadDataRelationships';
import { TypeFolder } from './typeFolder';

/**
 * The data that describes what must be modified.
 * @export
 * @interface ModifyFolderPayloadData
 */
export interface ModifyFolderPayloadData {
    /**
     * 
     * @type {TypeFolder}
     * @memberof ModifyFolderPayloadData
     */
    'type': TypeFolder;
    /**
     * The URN of the folder.  For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.  Note that this should NOT be URL-encoded.
     * @type {string}
     * @memberof ModifyFolderPayloadData
     */
    'id': string;
    /**
     * 
     * @type {ModifyFolderPayloadDataAttributes}
     * @memberof ModifyFolderPayloadData
     */
    'attributes'?: ModifyFolderPayloadDataAttributes;
    /**
     * 
     * @type {ModifyFolderPayloadDataRelationships}
     * @memberof ModifyFolderPayloadData
     */
    'relationships'?: ModifyFolderPayloadDataRelationships;
}




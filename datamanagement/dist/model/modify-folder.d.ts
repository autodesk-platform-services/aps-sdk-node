import { ModifyFolderData } from './modify-folder-data';
import { ModifyFolderJsonapi } from './modify-folder-jsonapi';
/**
 * Modifies folder names
 * @export
 * @interface ModifyFolder
 */
export interface ModifyFolder {
    /**
     *
     * @type {ModifyFolderJsonapi}
     * @memberof ModifyFolder
     */
    'jsonapi': ModifyFolderJsonapi;
    /**
     *
     * @type {ModifyFolderData}
     * @memberof ModifyFolder
     */
    'data': ModifyFolderData;
}

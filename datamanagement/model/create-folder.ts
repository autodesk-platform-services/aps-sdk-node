/* tslint:disable */
/* eslint-disable */

import { CreateFolderData } from './create-folder-data';
import { ModifyFolderJsonapi } from './modify-folder-jsonapi';

/**
 * Describe the folder to be created.
 * @export
 * @interface CreateFolder
 */
export interface CreateFolder {
    /**
     * 
     * @type {ModifyFolderJsonapi}
     * @memberof CreateFolder
     */
    'jsonapi': ModifyFolderJsonapi;
    /**
     * 
     * @type {CreateFolderData}
     * @memberof CreateFolder
     */
    'data': CreateFolderData;
}


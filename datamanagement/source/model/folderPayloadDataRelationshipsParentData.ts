/* tslint:disable */
/* eslint-disable */

import { TypeFolder } from './typeFolder';

/**
 * The data about the parent of the folder to be created.
 * @export
 * @interface FolderPayloadDataRelationshipsParentData
 */
export interface FolderPayloadDataRelationshipsParentData {
    /**
     * 
     * @type {TypeFolder}
     * @memberof FolderPayloadDataRelationshipsParentData
     */
    'type': TypeFolder;
    /**
     * The URN of the parent folder. For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.  Note that for BIM 360 Docs, new folders must be created within an existing folder (e.g., the Plans or Project Files folders),  and not directly within the root folder. Permissions, visibility (e.g., ``items:autodesk.bim360:Document`` or ``items:autodesk.bim360:File``),  and actions (e.g., OCR) are inherited from the existing parent folder. New folders also inherit subscriptions such as the  notifications sent when files are added to a folder. 
     * @type {string}
     * @memberof FolderPayloadDataRelationshipsParentData
     */
    'id': string;
}




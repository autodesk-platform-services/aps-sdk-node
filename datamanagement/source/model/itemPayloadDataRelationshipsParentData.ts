/* tslint:disable */
/* eslint-disable */

import { TypeFolder } from './typeFolder';

/**
 * The data about the parent folder.
 * @export
 * @interface ItemPayloadDataRelationshipsParentData
 */
export interface ItemPayloadDataRelationshipsParentData {
    /**
     * 
     * @type {TypeFolder}
     * @memberof ItemPayloadDataRelationshipsParentData
     */
    'type': TypeFolder;
    /**
     * The URN of the parent folder.  Note that you cannot copy files between folders in different BIM 360 Docs projects and accounts.  For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial. 
     * @type {string}
     * @memberof ItemPayloadDataRelationshipsParentData
     */
    'id': string;
}




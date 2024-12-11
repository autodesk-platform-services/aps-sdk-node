/* tslint:disable */
/* eslint-disable */

import { FolderPayloadData } from './folderPayloadData';
import { JsonApiVersion } from './jsonApiVersion';

/**
 * Describe the folder to be created.
 * @export
 * @interface FolderPayload
 */
export interface FolderPayload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof FolderPayload
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {FolderPayloadData}
     * @memberof FolderPayload
     */
    'data': FolderPayloadData;
}


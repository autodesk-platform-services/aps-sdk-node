/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './jsonApiVersion';
import { ModifyFolderPayloadData } from './modifyFolderPayloadData';

/**
 * Modifies folder names
 * @export
 * @interface ModifyFolderPayload
 */
export interface ModifyFolderPayload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof ModifyFolderPayload
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {ModifyFolderPayloadData}
     * @memberof ModifyFolderPayload
     */
    'data': ModifyFolderPayloadData;
}


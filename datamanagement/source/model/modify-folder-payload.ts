/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './json-api-version';
import { ModifyFolderPayloadData } from './modify-folder-payload-data';

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


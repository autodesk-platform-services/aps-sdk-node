/* tslint:disable */
/* eslint-disable */

import { CreateDownloadData } from './create-download-data';
import { ModifyFolderJsonapi } from './modify-folder-jsonapi';

/**
 * Describe the download to be created.
 * @export
 * @interface CreateDownload
 */
export interface CreateDownload {
    /**
     * 
     * @type {ModifyFolderJsonapi}
     * @memberof CreateDownload
     */
    'jsonapi': ModifyFolderJsonapi;
    /**
     * 
     * @type {CreateDownloadData}
     * @memberof CreateDownload
     */
    'data': CreateDownloadData;
}


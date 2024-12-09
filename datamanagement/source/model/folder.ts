/* tslint:disable */
/* eslint-disable */

import { FolderData } from './folder-data';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';

/**
 * An object that represents a folder.
 * @export
 * @interface Folder
 */
export interface Folder {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Folder
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Folder
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {FolderData}
     * @memberof Folder
     */
    'data'?: FolderData;
}


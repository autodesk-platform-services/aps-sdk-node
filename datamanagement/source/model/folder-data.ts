/* tslint:disable */
/* eslint-disable */

import { FolderAttributesWithExtensions } from './folder-attributes-with-extensions';
import { FolderDataRelationships } from './folder-data-relationships';
import { JsonApiLinksSelfAndWebView } from './json-api-links-self-and-web-view';
import { TypeFolder } from './type-folder';

/**
 * A container of data describing a folder.
 * @export
 * @interface FolderData
 */
export interface FolderData {
    /**
     * 
     * @type {TypeFolder}
     * @memberof FolderData
     */
    'type': TypeFolder;
    /**
     * The unique identifier of the folder.
     * @type {string}
     * @memberof FolderData
     */
    'id': string;
    /**
     * 
     * @type {FolderAttributesWithExtensions}
     * @memberof FolderData
     */
    'attributes': FolderAttributesWithExtensions;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof FolderData
     */
    'links': JsonApiLinksSelfAndWebView;
    /**
     * 
     * @type {FolderDataRelationships}
     * @memberof FolderData
     */
    'relationships': FolderDataRelationships;
}




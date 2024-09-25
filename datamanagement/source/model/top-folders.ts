/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';
import { TopFolderData } from './top-folder-data';

/**
 * An object that reporesents a top-level folder.
 * @export
 * @interface TopFolders
 */
export interface TopFolders {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof TopFolders
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof TopFolders
     */
    'links': JsonApiLinksSelf;
    /**
     * Array of objects where each object represents a top-level folder.
     * @type {Set<TopFolderData>}
     * @memberof TopFolders
     */
    'data'?: Set<TopFolderData>;
}


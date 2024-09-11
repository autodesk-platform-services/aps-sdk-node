
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';
import { TopFolderData } from './topFolderData';

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


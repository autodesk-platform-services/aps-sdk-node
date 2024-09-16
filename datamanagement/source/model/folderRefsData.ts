
import { FolderData } from './folderData';
import { ItemData } from './itemData';
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { TypeVersion } from './typeVersion';
import { VersionAttributes } from './versionAttributes';
import { VersionData } from './versionData';
import { VersionDataRelationships } from './versionDataRelationships';

/**
 * 
 * @export
 * @interface FolderRefsData
 */
export interface FolderRefsData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof FolderRefsData
     */
    'type': TypeVersion;
    /**
     * URN of the version object.
     * @type {string}
     * @memberof FolderRefsData
     */
    'id': string;
    /**
     * 
     * @type {VersionAttributes}
     * @memberof FolderRefsData
     */
    'attributes': VersionAttributes;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof FolderRefsData
     */
    'links': JsonApiLinksSelfAndWebView;
    /**
     * 
     * @type {VersionDataRelationships}
     * @memberof FolderRefsData
     */
    'relationships': VersionDataRelationships;
}




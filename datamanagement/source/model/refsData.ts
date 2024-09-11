
import { FolderData } from './folderData';
import { ItemData } from './itemData';
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { Type } from './type';
import { VersionAttributes } from './versionAttributes';
import { VersionData } from './versionData';
import { VersionDataRelationships } from './versionDataRelationships';

/**
 * 
 * @export
 * @interface RefsData
 */
export interface RefsData {
    /**
     * 
     * @type {Type}
     * @memberof RefsData
     */
    'type': Type;
    /**
     * URN of the version object.
     * @type {string}
     * @memberof RefsData
     */
    'id': string;
    /**
     * 
     * @type {VersionAttributes}
     * @memberof RefsData
     */
    'attributes': VersionAttributes;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof RefsData
     */
    'links': JsonApiLinksSelfAndWebView;
    /**
     * 
     * @type {VersionDataRelationships}
     * @memberof RefsData
     */
    'relationships': VersionDataRelationships;
}




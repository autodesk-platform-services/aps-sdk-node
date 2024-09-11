
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
 * @interface RelationshipRefsIncluded
 */
export interface RelationshipRefsIncluded {
    /**
     * 
     * @type {Type}
     * @memberof RelationshipRefsIncluded
     */
    'type': Type;
    /**
     * URN of the version object.
     * @type {string}
     * @memberof RelationshipRefsIncluded
     */
    'id': string;
    /**
     * 
     * @type {VersionAttributes}
     * @memberof RelationshipRefsIncluded
     */
    'attributes': VersionAttributes;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof RelationshipRefsIncluded
     */
    'links': JsonApiLinksSelfAndWebView;
    /**
     * 
     * @type {VersionDataRelationships}
     * @memberof RelationshipRefsIncluded
     */
    'relationships': VersionDataRelationships;
}




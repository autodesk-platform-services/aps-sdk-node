
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { TopFolderAttributesWithExtensions } from './topFolderAttributesWithExtensions';
import { TopFolderDataRelationships } from './topFolderDataRelationships';
import { Type } from './type';

/**
 * An object containing information about a top-level folder.
 * @export
 * @interface TopFolderData
 */
export interface TopFolderData {
    /**
     * 
     * @type {Type}
     * @memberof TopFolderData
     */
    'type': Type;
    /**
     * The unique identifier of the folder.
     * @type {string}
     * @memberof TopFolderData
     */
    'id': string;
    /**
     * 
     * @type {TopFolderAttributesWithExtensions}
     * @memberof TopFolderData
     */
    'attributes': TopFolderAttributesWithExtensions;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof TopFolderData
     */
    'links': JsonApiLinksSelfAndWebView;
    /**
     * 
     * @type {TopFolderDataRelationships}
     * @memberof TopFolderData
     */
    'relationships': TopFolderDataRelationships;
}




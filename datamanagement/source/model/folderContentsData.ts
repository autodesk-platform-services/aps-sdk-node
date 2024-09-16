
import { FolderData } from './folderData';
import { ItemAttributes } from './itemAttributes';
import { ItemData } from './itemData';
import { ItemDataRelationships } from './itemDataRelationships';
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { TypeItem } from './typeItem';

/**
 * 
 * @export
 * @interface FolderContentsData
 */
export interface FolderContentsData {
    /**
     * 
     * @type {TypeItem}
     * @memberof FolderContentsData
     */
    'type': TypeItem;
    /**
     * The unique identifier of the item.
     * @type {string}
     * @memberof FolderContentsData
     */
    'id': string;
    /**
     * 
     * @type {ItemAttributes}
     * @memberof FolderContentsData
     */
    'attributes': ItemAttributes;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof FolderContentsData
     */
    'links': JsonApiLinksSelfAndWebView;
    /**
     * 
     * @type {ItemDataRelationships}
     * @memberof FolderContentsData
     */
    'relationships': ItemDataRelationships;
}




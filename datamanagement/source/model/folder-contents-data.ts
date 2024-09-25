/* tslint:disable */
/* eslint-disable */

import { FolderData } from './folder-data';
import { ItemAttributes } from './item-attributes';
import { ItemData } from './item-data';
import { ItemDataRelationships } from './item-data-relationships';
import { JsonApiLinksSelfAndWebView } from './json-api-links-self-and-web-view';
import { TypeItem } from './type-item';

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




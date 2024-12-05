/* tslint:disable */
/* eslint-disable */

import { ItemAttributes } from './itemAttributes';
import { ItemDataRelationships } from './itemDataRelationships';
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { TypeItem } from './typeItem';

/**
 * A container of data describing an item.
 * @export
 * @interface ItemData
 */
export interface ItemData {
    /**
     * 
     * @type {TypeItem}
     * @memberof ItemData
     */
    'type': TypeItem;
    /**
     * The unique identifier of the item.
     * @type {string}
     * @memberof ItemData
     */
    'id': string;
    /**
     * 
     * @type {ItemAttributes}
     * @memberof ItemData
     */
    'attributes': ItemAttributes;
    /**
     * 
     * @type {ItemDataRelationships}
     * @memberof ItemData
     */
    'relationships': ItemDataRelationships;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof ItemData
     */
    'links': JsonApiLinksSelfAndWebView;
}




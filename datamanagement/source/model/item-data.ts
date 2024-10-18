/* tslint:disable */
/* eslint-disable */

import { ItemAttributes } from './item-attributes';
import { ItemDataRelationships } from './item-data-relationships';
import { JsonApiLinksSelfAndWebView } from './json-api-links-self-and-web-view';
import { TypeItem } from './type-item';

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




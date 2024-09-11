
import { ItemAttributes } from './itemAttributes';
import { ItemDataRelationships } from './itemDataRelationships';
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { Type } from './type';

/**
 * A container of data describing an item.
 * @export
 * @interface ItemData
 */
export interface ItemData {
    /**
     * 
     * @type {Type}
     * @memberof ItemData
     */
    'type': Type;
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




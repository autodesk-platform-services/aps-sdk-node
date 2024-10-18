/* tslint:disable */
/* eslint-disable */

import { ModifyItemPayloadDataAttributes } from './modify-item-payload-data-attributes';
import { TypeItem } from './type-item';

/**
 * The data that describes what must be modified.
 * @export
 * @interface ModifyItemPayloadData
 */
export interface ModifyItemPayloadData {
    /**
     * 
     * @type {TypeItem}
     * @memberof ModifyItemPayloadData
     */
    'type': TypeItem;
    /**
     * The ID of the item to be patched.
     * @type {string}
     * @memberof ModifyItemPayloadData
     */
    'id': string;
    /**
     * 
     * @type {ModifyItemPayloadDataAttributes}
     * @memberof ModifyItemPayloadData
     */
    'attributes'?: ModifyItemPayloadDataAttributes;
}




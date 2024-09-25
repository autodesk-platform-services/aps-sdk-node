/* tslint:disable */
/* eslint-disable */

import { ModifyItemPayloadDataAttributes } from './modify-item-payload-data-attributes';

/**
 * The data that describes what must be modified.
 * @export
 * @interface ModifyItemPayloadData
 */
export interface ModifyItemPayloadData {
    /**
     * The type of the resource. Must always be ``items``.
     * @type {string}
     * @memberof ModifyItemPayloadData
     */
    'type': string;
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


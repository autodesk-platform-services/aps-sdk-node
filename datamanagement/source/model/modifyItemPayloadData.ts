
import { ModifyItemPayloadDataAttributes } from './modifyItemPayloadDataAttributes';
import { Type } from './type';

/**
 * The data that describes what must be modified.
 * @export
 * @interface ModifyItemPayloadData
 */
export interface ModifyItemPayloadData {
    /**
     * 
     * @type {Type}
     * @memberof ModifyItemPayloadData
     */
    'type': Type;
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




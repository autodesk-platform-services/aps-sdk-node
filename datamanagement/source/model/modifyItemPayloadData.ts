
import { ModifyItemPayloadDataAttributes } from './modifyItemPayloadDataAttributes';
import { TypeItem } from './typeItem';

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




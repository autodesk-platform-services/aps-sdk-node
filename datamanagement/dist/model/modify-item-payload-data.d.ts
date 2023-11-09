import { ModifyItemPayloadDataAttributes } from './modify-item-payload-data-attributes';
import { Type } from './type';
/**
 *
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
     *
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

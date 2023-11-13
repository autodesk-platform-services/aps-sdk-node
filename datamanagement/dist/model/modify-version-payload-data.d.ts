import { ModifyVersionPayloadDataAttributes } from './modify-version-payload-data-attributes';
import { Type } from './type';
/**
 *
 * @export
 * @interface ModifyVersionPayloadData
 */
export interface ModifyVersionPayloadData {
    /**
     *
     * @type {Type}
     * @memberof ModifyVersionPayloadData
     */
    'type': Type;
    /**
     *
     * @type {string}
     * @memberof ModifyVersionPayloadData
     */
    'id': string;
    /**
     *
     * @type {ModifyVersionPayloadDataAttributes}
     * @memberof ModifyVersionPayloadData
     */
    'attributes'?: ModifyVersionPayloadDataAttributes;
}

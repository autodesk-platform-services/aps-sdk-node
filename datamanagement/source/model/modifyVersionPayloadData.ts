
import { ModifyVersionPayloadDataAttributes } from './modifyVersionPayloadDataAttributes';
import { Type } from './type';

/**
 * Contains the information to update
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
     * The URN of the version. Must be the raw URN, and not the URL enocoded URN.
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




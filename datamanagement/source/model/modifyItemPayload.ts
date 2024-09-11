
import { JsonApiVersion } from './jsonApiVersion';
import { ModifyItemPayloadData } from './modifyItemPayloadData';

/**
 * An object that defines the attributes of an item that must be updated.
 * @export
 * @interface ModifyItemPayload
 */
export interface ModifyItemPayload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof ModifyItemPayload
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {ModifyItemPayloadData}
     * @memberof ModifyItemPayload
     */
    'data': ModifyItemPayloadData;
}


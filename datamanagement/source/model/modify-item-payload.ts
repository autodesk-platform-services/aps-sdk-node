/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './json-api-version';
import { ModifyItemPayloadData } from './modify-item-payload-data';

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


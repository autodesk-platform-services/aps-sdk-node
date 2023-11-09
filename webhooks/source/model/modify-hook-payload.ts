/* tslint:disable */
/* eslint-disable */

import { ModifyHookPayloadHookAttribute } from './modify-hook-payload-hook-attribute';

/**
 * 
 * @export
 * @interface ModifyHookPayload
 */
export interface ModifyHookPayload {
    /**
     * 
     * @type {string}
     * @memberof ModifyHookPayload
     */
    'status': string;
    /**
     * 
     * @type {boolean}
     * @memberof ModifyHookPayload
     */
    'autoReactivateHook': boolean;
    /**
     * 
     * @type {string}
     * @memberof ModifyHookPayload
     */
    'filter': string;
    /**
     * 
     * @type {ModifyHookPayloadHookAttribute}
     * @memberof ModifyHookPayload
     */
    'hookAttribute': ModifyHookPayloadHookAttribute;
}


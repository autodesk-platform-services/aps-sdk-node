/* tslint:disable */
/* eslint-disable */

import { UpdateHookHookAttribute } from './update-hook-hook-attribute';

/**
 * 
 * @export
 * @interface UpdateHook
 */
export interface UpdateHook {
    /**
     * 
     * @type {string}
     * @memberof UpdateHook
     */
    'status': string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateHook
     */
    'autoReactivateHook': boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateHook
     */
    'filter': string;
    /**
     * 
     * @type {UpdateHookHookAttribute}
     * @memberof UpdateHook
     */
    'hookAttribute': UpdateHookHookAttribute;
}


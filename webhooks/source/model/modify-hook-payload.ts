/* tslint:disable */
/* eslint-disable */


/**
 * Modify Hook Payload
 * @export
 * @interface ModifyHookPayload
 */
export interface ModifyHookPayload {
    /**
     * 
     * @type {string}
     * @memberof ModifyHookPayload
     */
    'status'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModifyHookPayload
     */
    'autoReactivateHook'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModifyHookPayload
     */
    'filter'?: string;
    /**
     * 
     * @type {object}
     * @memberof ModifyHookPayload
     */
    'hookAttribute'?: object;
    /**
     * 
     * @type {string}
     * @memberof ModifyHookPayload
     */
    'token'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModifyHookPayload
     */
    'hookExpiry'?: string;
}


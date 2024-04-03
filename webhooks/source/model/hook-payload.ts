/* tslint:disable */
/* eslint-disable */

import { Scopes } from './scopes';

/**
 * Hook Payload
 * @export
 * @interface HookPayload
 */
export interface HookPayload {
    /**
     * 
     * @type {string}
     * @memberof HookPayload
     */
    'callbackUrl': string;
    /**
     * 
     * @type {boolean}
     * @memberof HookPayload
     */
    'autoReactivateHook'?: boolean;
    /**
     * 
     * @type {Scopes}
     * @memberof HookPayload
     */
    'scope': Scopes;
    /**
     * 
     * @type {object}
     * @memberof HookPayload
     */
    'hookAttribute'?: object;
    /**
     * 
     * @type {string}
     * @memberof HookPayload
     */
    'hookExpiry'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookPayload
     */
    'filter'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookPayload
     */
    'hubId'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookPayload
     */
    'projectId'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookPayload
     */
    'tenant'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof HookPayload
     */
    'callbackWithEventPayloadOnly'?: boolean;
}




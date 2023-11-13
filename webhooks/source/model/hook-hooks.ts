/* tslint:disable */
/* eslint-disable */

import { HookDetailsScope } from './hook-details-scope';

/**
 * 
 * @export
 * @interface HookHooks
 */
export interface HookHooks {
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    'hookId'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    'tenant'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    'callbackUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    'createdBy'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    'event'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    'createdDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    'lastUpdatedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    'system'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    'creatorType'?: string;
    /**
     * 
     * @type {HookDetailsScope}
     * @memberof HookHooks
     */
    'scope'?: HookDetailsScope;
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    'status'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof HookHooks
     */
    'autoReactivateHook'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    'urn'?: string;
    /**
     * 
     * @type {string}
     * @memberof HookHooks
     */
    '__self__'?: string;
}


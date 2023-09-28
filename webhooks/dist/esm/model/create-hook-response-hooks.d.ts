import { HookScope } from './hook-scope';
/**
 *
 * @export
 * @interface CreateHookResponseHooks
 */
export interface CreateHookResponseHooks {
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    'hookId'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    'tenant'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    'callbackUrl'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    'createdBy'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    'event'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    'createdDate'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    'lastUpdatedDate'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    'system'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    'creatorType'?: string;
    /**
     *
     * @type {HookScope}
     * @memberof CreateHookResponseHooks
     */
    'scope'?: HookScope;
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    'status'?: string;
    /**
     *
     * @type {boolean}
     * @memberof CreateHookResponseHooks
     */
    'autoReactivateHook'?: boolean;
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    'urn'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateHookResponseHooks
     */
    '__self__'?: string;
}

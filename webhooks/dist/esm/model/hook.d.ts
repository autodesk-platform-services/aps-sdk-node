import { HookScope } from './hook-scope';
/**
 * Get details of a webhook based on its webhook ID.
 * @export
 * @interface Hook
 */
export interface Hook {
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'hookId'?: string;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'tenant'?: string;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'callbackUrl'?: string;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'createdBy'?: string;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'event'?: string;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'createdDate'?: string;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'lastUpdatedDate'?: string;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'system'?: string;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'creatorType'?: string;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'status'?: string;
    /**
     *
     * @type {boolean}
     * @memberof Hook
     */
    'autoReactivateHook'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'hookExpiry'?: string;
    /**
     *
     * @type {HookScope}
     * @memberof Hook
     */
    'scope'?: HookScope;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    'urn'?: string;
    /**
     *
     * @type {string}
     * @memberof Hook
     */
    '__self__'?: string;
}

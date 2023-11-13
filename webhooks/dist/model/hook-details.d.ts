import { HookDetailsScope } from './hook-details-scope';
/**
 * Get details of a webhook based on its webhook ID.
 * @export
 * @interface HookDetails
 */
export interface HookDetails {
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'hookId'?: string;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'tenant'?: string;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'callbackUrl'?: string;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'createdBy'?: string;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'event'?: string;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'createdDate'?: string;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'lastUpdatedDate'?: string;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'system'?: string;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'creatorType'?: string;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'status'?: string;
    /**
     *
     * @type {boolean}
     * @memberof HookDetails
     */
    'autoReactivateHook'?: boolean;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'hookExpiry'?: string;
    /**
     *
     * @type {HookDetailsScope}
     * @memberof HookDetails
     */
    'scope'?: HookDetailsScope;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    'urn'?: string;
    /**
     *
     * @type {string}
     * @memberof HookDetails
     */
    '__self__'?: string;
}

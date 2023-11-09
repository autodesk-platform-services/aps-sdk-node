import { HookDetailsScope } from './hook-details-scope';
/**
 *
 * @export
 * @interface HooksData
 */
export interface HooksData {
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'hookId'?: string;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'tenant'?: string;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'callbackUrl'?: string;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'createdBy'?: string;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'event'?: string;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'createdDate'?: string;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'lastUpdatedDate'?: string;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'system'?: string;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'creatorType'?: string;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'status'?: string;
    /**
     *
     * @type {boolean}
     * @memberof HooksData
     */
    'autoReactivateHook'?: boolean;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'hookExpiry'?: string;
    /**
     *
     * @type {HookDetailsScope}
     * @memberof HooksData
     */
    'scope'?: HookDetailsScope;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    'urn'?: string;
    /**
     *
     * @type {string}
     * @memberof HooksData
     */
    '__self__'?: string;
}

import { Scopes } from './scopes';
/**
 *
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
}

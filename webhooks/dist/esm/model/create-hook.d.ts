/**
 *
 * @export
 * @interface CreateHook
 */
export interface CreateHook {
    /**
     *
     * @type {string}
     * @memberof CreateHook
     */
    'callbackUrl': string;
    /**
     *
     * @type {boolean}
     * @memberof CreateHook
     */
    'autoReactivateHook'?: boolean;
    /**
     *
     * @type {object}
     * @memberof CreateHook
     */
    'scope': object;
    /**
     *
     * @type {object}
     * @memberof CreateHook
     */
    'hookAttribute'?: object;
    /**
     *
     * @type {string}
     * @memberof CreateHook
     */
    'hookExpiry'?: string;
}

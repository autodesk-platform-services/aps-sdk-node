import { HookHooks } from './hook-hooks';
/**
 *
 * @export
 * @interface Hook
 */
export interface Hook {
    /**
     *
     * @type {Set<HookHooks>}
     * @memberof Hook
     */
    'hooks'?: Set<HookHooks>;
}

/* tslint:disable */
/* eslint-disable */

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
  callbackUrl: string;
  /**
   *
   * @type {boolean}
   * @memberof HookPayload
   */
  autoReactivateHook?: boolean;
  /**
   *
   * @type {Scopes}
   * @memberof HookPayload
   */
  scope: { [key in Scopes]: string };
  /**
   *
   * @type {object}
   * @memberof HookPayload
   */
  hookAttribute?: object;
  /**
   *
   * @type {string}
   * @memberof HookPayload
   */
  hookExpiry?: string;
  /**
   * Sets a specific scope in the 'scope' property.
   * @param scopeEnum The scope enum to set.
   * @param value The value to set for the scope.
   */
}

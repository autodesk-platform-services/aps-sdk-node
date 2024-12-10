/* tslint:disable */
/* eslint-disable */


/**
 * Sets the current state of the webhook. Possible values:  - ``active`` - Activates webhook. - ``inactive`` - Deactivates webhook. 
 * @export
 * @enum {string}
 */

export const StatusRequest = {
    Active: 'active',
    Inactive: 'inactive'
} as const;

export type StatusRequest = typeof StatusRequest[keyof typeof StatusRequest];




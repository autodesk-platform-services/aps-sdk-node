/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Status = {
    Active: 'active',
    Pending: 'pending',
    Archived: 'archived',
    Suspended: 'suspended'
} as const;

export type Status = typeof Status[keyof typeof Status];




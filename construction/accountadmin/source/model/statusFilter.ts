/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const StatusFilter = {
    Active: 'active',
    Pending: 'pending',
    Deleted: 'deleted'
} as const;

export type StatusFilter = typeof StatusFilter[keyof typeof StatusFilter];




/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const UserPatchStatus = {
    Active: 'active',
    Inactive: 'inactive'
} as const;

export type UserPatchStatus = typeof UserPatchStatus[keyof typeof UserPatchStatus];




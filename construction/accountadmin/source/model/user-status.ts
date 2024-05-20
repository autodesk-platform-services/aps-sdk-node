/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const UserStatus = {
    Active: 'active',
    Inactive: 'inactive',
    Pending: 'pending',
    NotInvited: 'not_invited'
} as const;

export type UserStatus = typeof UserStatus[keyof typeof UserStatus];




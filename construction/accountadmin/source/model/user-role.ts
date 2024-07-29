/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const UserRole = {
    AccountAdmin: 'account_admin',
    AccountUser: 'account_user',
    ProjectAdmin: 'project_admin'
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];




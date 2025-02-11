/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const AssignedToType = {
    User: 'user',
    Company: 'company',
    Role: 'role',
    // Null: 'null, Documented but the endpoint doesn't support null so commenting it out.
} as const;

export type AssignedToType = typeof AssignedToType[keyof typeof AssignedToType];




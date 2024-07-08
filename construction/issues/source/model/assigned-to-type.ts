/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const AssignedToType = {
    User: 'user',
    Company: ' company',
    Role: ' role',
    Null: 'null'
} as const;

export type AssignedToType = typeof AssignedToType[keyof typeof AssignedToType];




/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const AccessLevels = {
    AccountAdmin: 'accountAdmin',
    ProjectAdmin: 'projectAdmin',
    Executive: 'executive'
} as const;

export type AccessLevels = typeof AccessLevels[keyof typeof AccessLevels];




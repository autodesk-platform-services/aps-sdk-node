/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const OrFilters = {
    Id: 'id',
    Name: 'name',
    Email: 'email',
    AutodeskId: 'autodeskId',
    Status: 'status',
    AccessLevels: 'accessLevels'
} as const;

export type OrFilters = typeof OrFilters[keyof typeof OrFilters];




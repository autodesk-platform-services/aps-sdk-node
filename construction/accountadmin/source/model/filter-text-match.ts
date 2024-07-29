/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const FilterTextMatch = {
    Contains: 'contains',
    StartsWith: 'startsWith',
    EndsWith: 'endsWith',
    Equals: 'equals'
} as const;

export type FilterTextMatch = typeof FilterTextMatch[keyof typeof FilterTextMatch];




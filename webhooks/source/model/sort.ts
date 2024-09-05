/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the sorting order of the list of webhooks by their ``lastUpdatedDate`` attribute.   - ``asc`` - Ascending order. - ``desc`` - (Default) Descending order. 
 * @export
 * @enum {string}
 */

export const Sort = {
    Asc: 'asc',
    Desc: 'desc'
} as const;

export type Sort = typeof Sort[keyof typeof Sort];




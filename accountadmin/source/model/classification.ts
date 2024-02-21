/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Classification = {
    Production: 'production',
    Template: 'template',
    Component: 'component',
    Sample: 'sample'
} as const;

export type Classification = typeof Classification[keyof typeof Classification];




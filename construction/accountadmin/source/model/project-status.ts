/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const ProjectStatus = {
    Active: 'active',
    Pending: 'pending',
    Inactive: 'inactive',
    Archived: 'archived'
} as const;

export type ProjectStatus = typeof ProjectStatus[keyof typeof ProjectStatus];




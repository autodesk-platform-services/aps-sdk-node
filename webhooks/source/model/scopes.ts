/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Scopes = {
    Workflow: 'workflow',
    Folder: 'folder',
    Project: 'project'
} as const;

export type Scopes = typeof Scopes[keyof typeof Scopes];




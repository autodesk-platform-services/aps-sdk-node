/* tslint:disable */
/* eslint-disable */


/**
 *  Possible values: **read, view, download, collaborate, write, create, upload, updateMetaData, delete, admin, share**
 * @export
 * @enum {string}
 */

export const Action = {
    Read: 'read',
    View: 'view',
    Download: 'download',
    Collaborate: 'collaborate',
    Write: 'write',
    Create: 'create',
    Upload: 'upload',
    UpdateMetaData: 'updateMetaData',
    Delete: 'delete',
    Admin: 'admin',
    Share: 'share'
} as const;

export type Action = typeof Action[keyof typeof Action];




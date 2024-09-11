

/**
 * An array containing the list of permitted actions to check for. Possible values: read, view, download, collaborate, write, create, upload, updateMetaData, delete, admin, share See the tables under the initial description of the command for details.
 * @export
 * @enum {string}
 */

export const RequiredActions = {
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

export type RequiredActions = typeof RequiredActions[keyof typeof RequiredActions];




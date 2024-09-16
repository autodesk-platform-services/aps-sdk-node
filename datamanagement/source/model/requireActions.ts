

/**
 * Required actions
 * @export
 * @enum {string}
 */

export const RequireActions = {
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

export type RequireActions = typeof RequireActions[keyof typeof RequireActions];




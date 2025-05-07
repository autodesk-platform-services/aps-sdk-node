

/**
 * 
 * @export
 * @enum {string}
 */

export const PermissionLevel = {
    Create: 'create',
    Read: 'read',
    Write: 'write'
} as const;

export type PermissionLevel = typeof PermissionLevel[keyof typeof PermissionLevel];




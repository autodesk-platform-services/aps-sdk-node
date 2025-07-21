

/**
 * Specifies the level of permission the application has. Possible values are:
 * 
 * - ``full`` - Unrestricted access to objects within the bucket.
 * - ``read_only`` - Read only access to the objects within the bucket. Modification and deletion of objects is not allowed.
 * 
 * @export
 * @enum {string}
 */

export const PermissionAccess = {
    Full: 'full',
    Read: 'read'
} as const;

export type PermissionAccess = typeof PermissionAccess[keyof typeof PermissionAccess];




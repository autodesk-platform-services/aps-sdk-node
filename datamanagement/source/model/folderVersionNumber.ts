

/**
 * The version of the folder extension type. The current version is 1.0.
 * @export
 * @enum {string}
 */

export const FolderVersionNumber = {
    _10: '1.0'
} as const;

export type FolderVersionNumber = typeof FolderVersionNumber[keyof typeof FolderVersionNumber];




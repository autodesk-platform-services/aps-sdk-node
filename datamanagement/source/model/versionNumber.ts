

/**
 * Version Number
 * @export
 * @enum {string}
 */

export const VersionNumber = {
    _10: '1.0'
} as const;

export type VersionNumber = typeof VersionNumber[keyof typeof VersionNumber];






/**
 * The version of the version extension type (included[i].attributes.extension.type). The current version is 1.0.
 * @export
 * @enum {string}
 */

export const ItemIncludedVersionNumber = {
    _10: '1.0'
} as const;

export type ItemIncludedVersionNumber = typeof ItemIncludedVersionNumber[keyof typeof ItemIncludedVersionNumber];




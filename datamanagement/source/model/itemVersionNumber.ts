

/**
 * The version of the item extension type (data.attributes.extension.type). The current version is 1.0.
 * @export
 * @enum {string}
 */

export const ItemVersionNumber = {
    _10: '1.0'
} as const;

export type ItemVersionNumber = typeof ItemVersionNumber[keyof typeof ItemVersionNumber];




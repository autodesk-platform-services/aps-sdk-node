

/**
 * The id of the resource. Will always be: 1
 * @export
 * @enum {string}
 */

export const ItemIncludedId = {
    NUMBER_1: 1
} as const;

export type ItemIncludedId = typeof ItemIncludedId[keyof typeof ItemIncludedId];




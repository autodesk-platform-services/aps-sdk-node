

/**
 * The type of the resource. Possible values are ``items``.
 * @export
 * @enum {string}
 */

export const TypeItem = {
    Items: 'items'
} as const;

export type TypeItem = typeof TypeItem[keyof typeof TypeItem];




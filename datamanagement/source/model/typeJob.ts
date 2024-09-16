

/**
 * The type of this resource. Possible values are ``jobs``.
 * @export
 * @enum {string}
 */

export const TypeJob = {
    Downloads: 'downloads'
} as const;

export type TypeJob = typeof TypeJob[keyof typeof TypeJob];




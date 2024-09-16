

/**
 * The type of this resource. Possible values are ``downloads``.
 * @export
 * @enum {string}
 */

export const TypeDownloads = {
    Downloads: 'downloads'
} as const;

export type TypeDownloads = typeof TypeDownloads[keyof typeof TypeDownloads];




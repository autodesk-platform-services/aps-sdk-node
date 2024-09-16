

/**
 * The type of this resource. Possible values are ``downloadFormats``.
 * @export
 * @enum {string}
 */

export const TypeDownloadformats = {
    DownloadFormats: 'downloadFormats'
} as const;

export type TypeDownloadformats = typeof TypeDownloadformats[keyof typeof TypeDownloadformats];




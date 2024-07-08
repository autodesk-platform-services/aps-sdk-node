/* tslint:disable */
/* eslint-disable */


/**
 * Height of thumbnails. Possible values are: ``100``, ``200``, ``400``.If ``height`` is omitted, but ``width`` is specified, ``height`` defaults to ``width``.  If both ``width`` and ``height`` are omitted, the server will return a thumbnail closest to ``200``, if such a thumbnail is available
 * @export
 * @enum {string}
 */

export const Height = {
    NUMBER_100: 100,
    NUMBER_200: 200,
    NUMBER_400: 400
} as const;

export type Height = typeof Height[keyof typeof Height];




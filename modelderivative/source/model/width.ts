/* tslint:disable */
/* eslint-disable */


/**
 * Width of thumbnail in pixels.  Possible values are: ``100``, ``200``, ``400``  If ``width`` is omitted, but ``height`` is specified, ``width`` defaults to ``height``. If both ``width`` and ``height`` are omitted, the server will return a thumbnail closest to ``200``, if such a thumbnail is available.
 * @export
 * @enum {string}
 */

export const Width = {
    NUMBER_100: 100,
    NUMBER_200: 200,
    NUMBER_400: 400
} as const;

export type Width = typeof Width[keyof typeof Width];




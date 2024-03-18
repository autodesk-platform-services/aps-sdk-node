/* tslint:disable */
/* eslint-disable */


/**
 * Sets the height of a thumbnail output in pixels. Possible values are ``100``, ``200`` and ``400``.
 * @export
 * @enum {string}
 */

export const Height = {
    100: 100,
    200: 200,
    400: 400
} as const;

export type Height = typeof Height[keyof typeof Height];




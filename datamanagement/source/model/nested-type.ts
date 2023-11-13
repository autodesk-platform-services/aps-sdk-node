/* tslint:disable */
/* eslint-disable */


/**
 * The type of the resource. Possible values: **attachment**, **overlay**
 * @export
 * @enum {string}
 */

export const NestedType = {
    Attachment: 'attachment',
    Overlay: 'overlay'
} as const;

export type NestedType = typeof NestedType[keyof typeof NestedType];




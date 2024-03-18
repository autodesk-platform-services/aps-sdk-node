/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the surface type to export as, when the output is IGES. Possible values are   - ``bounded`` - (Default) Bounded surface - ``trimmed`` - Trimmed surface -  `wireframe`. Wireframe  surface.\' 
 * @export
 * @enum {string}
 */

export const SurfaceType = {
    Bounded: 'bounded',
    Trimmed: 'trimmed',
    Wireframe: 'wireframe'
} as const;

export type SurfaceType = typeof SurfaceType[keyof typeof SurfaceType];




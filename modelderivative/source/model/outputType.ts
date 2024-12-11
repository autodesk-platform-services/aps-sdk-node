/* tslint:disable */
/* eslint-disable */


/**
 * The requested output types. Possible values include `svf`, `svf2`, `thumbnail`, `stl`, `step`, `iges`, `obj`, `ifc` or `dwg`. For a list of supported types, call the [GET formats](/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
 * @export
 * @enum {string}
 */

export const OutputType = {
    Svf: 'svf',
    Svf2: 'svf2',
    Thumbnail: 'thumbnail',
    Stl: 'stl',
    Step: 'step',
    Iges: 'iges',
    Obj: 'obj',
    Ifc: 'ifc',
    Dwg: 'dwg',
    Fbx: 'fbx'
} as const;

export type OutputType = typeof OutputType[keyof typeof OutputType];




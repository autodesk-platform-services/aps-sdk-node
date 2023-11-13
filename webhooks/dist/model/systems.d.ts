/**
 *
 * @export
 * @enum {string}
 */
export declare const Systems: {
    readonly Data: "data";
    readonly Derivative: "derivative";
    readonly AdskC4r: "adsk.c4r";
    readonly AdskFlcProduction: "adsk.flc.production";
    readonly AutodeskConstructionCost: "autodesk.construction.cost";
};
export type Systems = typeof Systems[keyof typeof Systems];

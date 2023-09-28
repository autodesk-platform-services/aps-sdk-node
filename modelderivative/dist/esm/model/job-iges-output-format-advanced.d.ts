/**
 * Advanced options for `iges` type.
 * @export
 * @interface JobIgesOutputFormatAdvanced
 */
export interface JobIgesOutputFormatAdvanced {
    /**
     * Possible values are between `0` and `1`. By default it is set at 0.001.
     * @type {number}
     * @memberof JobIgesOutputFormatAdvanced
     */
    'tolerance'?: number;
    /**
     * Possible values are `bounded`, `trimmed` and `wireframe`. By default it is set to bounded surface.
     * @type {string}
     * @memberof JobIgesOutputFormatAdvanced
     */
    'surfaceType'?: JobIgesOutputFormatAdvancedSurfaceTypeEnum;
    /**
     * Export the sheet body to IGES. `open`, `shell`, `surface` or `wireframe`. By default, it is set to `surface`.
     * @type {string}
     * @memberof JobIgesOutputFormatAdvanced
     */
    'sheetType'?: JobIgesOutputFormatAdvancedSheetTypeEnum;
    /**
     * Export the solid body to IGES `solid`, `surface` or `wireframe`. By default, it is set to `solid`.
     * @type {string}
     * @memberof JobIgesOutputFormatAdvanced
     */
    'solidType'?: JobIgesOutputFormatAdvancedSolidTypeEnum;
}
export declare const JobIgesOutputFormatAdvancedSurfaceTypeEnum: {
    readonly Bounded: "bounded";
    readonly Trimmed: "trimmed";
    readonly Wireframe: "wireframe";
};
export type JobIgesOutputFormatAdvancedSurfaceTypeEnum = typeof JobIgesOutputFormatAdvancedSurfaceTypeEnum[keyof typeof JobIgesOutputFormatAdvancedSurfaceTypeEnum];
export declare const JobIgesOutputFormatAdvancedSheetTypeEnum: {
    readonly Open: "open";
    readonly Surface: "surface";
    readonly Shell: "shell";
    readonly Wireframe: "wireframe";
};
export type JobIgesOutputFormatAdvancedSheetTypeEnum = typeof JobIgesOutputFormatAdvancedSheetTypeEnum[keyof typeof JobIgesOutputFormatAdvancedSheetTypeEnum];
export declare const JobIgesOutputFormatAdvancedSolidTypeEnum: {
    readonly Solid: "solid";
    readonly Surface: "surface";
    readonly Wireframe: "wireframe";
};
export type JobIgesOutputFormatAdvancedSolidTypeEnum = typeof JobIgesOutputFormatAdvancedSolidTypeEnum[keyof typeof JobIgesOutputFormatAdvancedSolidTypeEnum];

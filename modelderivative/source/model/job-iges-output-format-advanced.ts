/* tslint:disable */
/* eslint-disable */


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

export const JobIgesOutputFormatAdvancedSurfaceTypeEnum = {
    Bounded: 'bounded',
    Trimmed: 'trimmed',
    Wireframe: 'wireframe'
} as const;

export type JobIgesOutputFormatAdvancedSurfaceTypeEnum = typeof JobIgesOutputFormatAdvancedSurfaceTypeEnum[keyof typeof JobIgesOutputFormatAdvancedSurfaceTypeEnum];
export const JobIgesOutputFormatAdvancedSheetTypeEnum = {
    Open: 'open',
    Surface: 'surface',
    Shell: 'shell',
    Wireframe: 'wireframe'
} as const;

export type JobIgesOutputFormatAdvancedSheetTypeEnum = typeof JobIgesOutputFormatAdvancedSheetTypeEnum[keyof typeof JobIgesOutputFormatAdvancedSheetTypeEnum];
export const JobIgesOutputFormatAdvancedSolidTypeEnum = {
    Solid: 'solid',
    Surface: 'surface',
    Wireframe: 'wireframe'
} as const;

export type JobIgesOutputFormatAdvancedSolidTypeEnum = typeof JobIgesOutputFormatAdvancedSolidTypeEnum[keyof typeof JobIgesOutputFormatAdvancedSolidTypeEnum];



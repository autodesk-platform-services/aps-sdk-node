/* tslint:disable */
/* eslint-disable */


/**
 * Advanced options for `stl` type.
 * @export
 * @interface JobStlOutputFormatAdvanced
 */
export interface JobStlOutputFormatAdvanced {
    /**
     * Default format is `binary`. Possible values are `binary` or `ascii`.
     * @type {string}
     * @memberof JobStlOutputFormatAdvanced
     */
    'format'?: JobStlOutputFormatAdvancedFormatEnum;
    /**
     * Color is exported by default. If set to `true`, color is exported. If set to `false`, color is not exported.
     * @type {boolean}
     * @memberof JobStlOutputFormatAdvanced
     */
    'exportColor'?: boolean;
    /**
     * `single` (default): creates one STL file for all the input files (assembly file)  `multiple`: creates a separate STL file for each object 
     * @type {string}
     * @memberof JobStlOutputFormatAdvanced
     */
    'exportFileStructure'?: JobStlOutputFormatAdvancedExportFileStructureEnum;
}

export const JobStlOutputFormatAdvancedFormatEnum = {
    Binary: 'binary',
    Ascii: 'ascii'
} as const;

export type JobStlOutputFormatAdvancedFormatEnum = typeof JobStlOutputFormatAdvancedFormatEnum[keyof typeof JobStlOutputFormatAdvancedFormatEnum];
export const JobStlOutputFormatAdvancedExportFileStructureEnum = {
    Single: 'single',
    Multiple: 'multiple'
} as const;

export type JobStlOutputFormatAdvancedExportFileStructureEnum = typeof JobStlOutputFormatAdvancedExportFileStructureEnum[keyof typeof JobStlOutputFormatAdvancedExportFileStructureEnum];



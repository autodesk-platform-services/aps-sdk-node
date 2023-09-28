/**
 * Advanced options for `obj` type.
 * @export
 * @interface JobObjOutputFormatAdvanced
 */
export interface JobObjOutputFormatAdvanced {
    /**
     * `single` (default): creates one OBJ file for all the input files (assembly file)  `multiple`: creates a separate OBJ file for each object
     * @type {string}
     * @memberof JobObjOutputFormatAdvanced
     */
    'exportFileStructure'?: JobObjOutputFormatAdvancedExportFileStructureEnum;
    /**
     * Translate models into different units; this causes the values to change. For example, from millimeters (10, 123, 31) to centimeters (1.0, 12.3, 3.1). If the source unit or the unit you are translating into is not supported, the values remain unchanged. Possible values: meter, decimeter, centimeter, millimeter, micrometer, nanometer yard, foot, inch, mil, microinch Note that this feature does not support F3D files.
     * @type {string}
     * @memberof JobObjOutputFormatAdvanced
     */
    'unit'?: JobObjOutputFormatAdvancedUnitEnum;
    /**
     * Required for geometry extractions. The Model View ID (guid).
     * @type {string}
     * @memberof JobObjOutputFormatAdvanced
     */
    'modelGuid'?: string;
    /**
     * Required for geometry extractions. List object ids to be translated. -1 will extract the entire model.
     * @type {Array<number>}
     * @memberof JobObjOutputFormatAdvanced
     */
    'objectIds'?: Array<number>;
}
export declare const JobObjOutputFormatAdvancedExportFileStructureEnum: {
    readonly Single: "single";
    readonly Multiple: "multiple";
};
export type JobObjOutputFormatAdvancedExportFileStructureEnum = typeof JobObjOutputFormatAdvancedExportFileStructureEnum[keyof typeof JobObjOutputFormatAdvancedExportFileStructureEnum];
export declare const JobObjOutputFormatAdvancedUnitEnum: {
    readonly Meter: "meter";
    readonly Decimeter: "decimeter";
    readonly Centimeter: "centimeter";
    readonly Millimeter: "millimeter";
    readonly Micrometer: "micrometer";
    readonly Nanometer: "nanometer";
    readonly Yard: "yard";
    readonly Foot: "foot";
    readonly Inch: "inch";
    readonly Mil: "mil";
    readonly Microinch: "microinch";
};
export type JobObjOutputFormatAdvancedUnitEnum = typeof JobObjOutputFormatAdvancedUnitEnum[keyof typeof JobObjOutputFormatAdvancedUnitEnum];

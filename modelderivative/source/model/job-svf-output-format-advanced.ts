/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface JobSvfOutputFormatAdvanced
 */
export interface JobSvfOutputFormatAdvanced {
    /**
     * An array containing user data linkage IDs of the linkage data to be extracted from the DGN file. Linkage data is not extracted if you do not specify this attribute.
     * @type {Array<number>}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'requestedLinkageIDs'?: Array<number>;
    /**
     * The format that 2D views must be rendered to. Available options are:  - legacy - (Default) Render to a model derivative specific file format. - pdf - Render to the PDF file format. This option applies only to Revit 2022 files and newer.
     * @type {string}
     * @memberof JobSvfOutputFormatAdvanced
     */
    '2dviews'?: JobSvfOutputFormatAdvanced_2dviewsEnum;
    /**
     * Specifies what IFC loader to use during translation. Available options are: - legacy - Use the Navisworks IFC loader. - modern - Use the Revit IFC loader (recommended over the legacy option). - v3 - Use the newer Revit IFC loader (recommended over the older modern option) If both switchLoader and conversionMethod are specified, Model Derivative uses the conversionMethod parameter. If conversionMethod is not specified, Model Derivative uses the switchLoader parameter.
     * @type {string}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'conversionMethod'?: JobSvfOutputFormatAdvancedConversionMethodEnum;
    /**
     * Specifies how storeys are translated. Available options are: - hide - (default) storeys are extracted but not visible by default. - show - storeys are extracted and are visible by default. - skip - storeys are not translated. Note These options are applicable only when conversionMethod is set to modern or v3.
     * @type {string}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'buildingStoreys'?: JobSvfOutputFormatAdvancedBuildingStoreysEnum;
    /**
     * Specifies how spaces are translated. Available options are: - hide - (default) spaces are translated but are not visible by default. - show - spaces are translated and are visible by default. - skip - spaces are not translated. Note These options are applicable only when conversionMethod is set to modern or v3.
     * @type {string}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'spaces'?: JobSvfOutputFormatAdvancedSpacesEnum;
    /**
     * An option to be specified when the input file type is IFC. Specifies how openings are translated. Available options are: - hide - (default) openings are translated but are not visible by default. - show - openings are translated and are visible by default. - skip - openings are not translated. Note These options are applicable only when conversionMethod is set to modern or v3. 
     * @type {string}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'openingElements'?: JobSvfOutputFormatAdvancedOpeningElementsEnum;
    /**
     * Specifies whether hidden objects must be extracted or not. true: Extract hidden objects from the input file. false: (Default) Do not extract hidden objects from the input file. 
     * @type {boolean}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'hiddenObjects'?: boolean;
    /**
     * Specifies whether basic material properties must be extracted or not. true: Extract properties for basic materials. false: (Default) Do not extract properties for basic materials. 
     * @type {boolean}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'basicMaterialProperties'?: boolean;
    /**
     * Specifies how to handle Autodesk material properties. true: Extract properties for Autodesk materials. false: (Default) Do not extract properties for Autodesk materials.
     * @type {boolean}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'autodeskMaterialProperties'?: boolean;
    /**
     * Specifies whether timeliner properties must be extracted or not. true: Extract timeliner properties. false: (Default) Do not extract timeliner properties.
     * @type {boolean}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'timelinerProperties'?: boolean;
    /**
     * Specifies what version of the Revit translator/extractor to use. Possible values: next - Makes the translation job use the newest available version of the translator/extractor. This option is meant to be used by beta testers who wish to test a pre-release version of the translator. If no pre-release version is available, this option makes the translation job use the current official release version. previous - Makes the translation job use the previous official release version of the translator/extractor. This option is meant to be used as a workaround in case of regressions caused by a new official release of the translator/extractor. If this attribute is not specified, the system uses the current official release version.
     * @type {string}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'extractorVersion'?: JobSvfOutputFormatAdvancedExtractorVersionEnum;
    /**
     * Generates master views when translating from the Revit input format to SVF. This option is ignored for all other input formats. This attribute defaults to false.  Master views are 3D views that are generated for each phase of the Revit model. A master view contains all elements (including “room” elements) present in the host model for that phase. The display name of a master view defaults to the name of the phase it is generated from. However, if a view with that name already exists, the Model Derivative service appends a suffix to the default display name.  Notes: 1. Master views do not contain elements from linked models. 2. Enabling this option can increase the time it takes to translate the model.
     * @type {boolean}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'generateMasterViews'?: boolean;
    /**
     * Specifies the materials to apply to the generated SVF derivatives. Available options are: - auto - (Default) Use the current setting of the default view of the input file. - basic - Use basic materials. - autodesk - Use Autodesk materials.
     * @type {string}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'materialMode'?: JobSvfOutputFormatAdvancedMaterialModeEnum;
    /**
     * Specifies how the hierarchy of items are determined. Classic: (Default) Uses hardcoded rules to set the hierarchy of items. SystemPath: Uses a linked XML or MDB2 properties file to set hierarchy of items. You can use this option to make the organization of items consistent with SmartPlant 3D.  Notes: 1. The functioning of the SystemPath depends on the default setting of the property SP3D_SystemPath or System Path. 2. The pathing delimiter must be \\. 3. If you want to customize further, import the VUE file to Navisworks. After that, use Start Translation Job on the resulting Navisworks (nwc/nwd) file.
     * @type {string}
     * @memberof JobSvfOutputFormatAdvanced
     */
    'hierarchy'?: JobSvfOutputFormatAdvancedHierarchyEnum;
}

export const JobSvfOutputFormatAdvanced_2dviewsEnum = {
    Legacy: 'legacy',
    Pdf: 'pdf'
} as const;

export type JobSvfOutputFormatAdvanced_2dviewsEnum = typeof JobSvfOutputFormatAdvanced_2dviewsEnum[keyof typeof JobSvfOutputFormatAdvanced_2dviewsEnum];
export const JobSvfOutputFormatAdvancedConversionMethodEnum = {
    Legacy: 'legacy',
    Modern: 'modern',
    V3: 'v3'
} as const;

export type JobSvfOutputFormatAdvancedConversionMethodEnum = typeof JobSvfOutputFormatAdvancedConversionMethodEnum[keyof typeof JobSvfOutputFormatAdvancedConversionMethodEnum];
export const JobSvfOutputFormatAdvancedBuildingStoreysEnum = {
    Hide: 'hide',
    Show: 'show',
    Skip: 'skip'
} as const;

export type JobSvfOutputFormatAdvancedBuildingStoreysEnum = typeof JobSvfOutputFormatAdvancedBuildingStoreysEnum[keyof typeof JobSvfOutputFormatAdvancedBuildingStoreysEnum];
export const JobSvfOutputFormatAdvancedSpacesEnum = {
    Hide: 'hide',
    Show: 'show',
    Skip: 'skip'
} as const;

export type JobSvfOutputFormatAdvancedSpacesEnum = typeof JobSvfOutputFormatAdvancedSpacesEnum[keyof typeof JobSvfOutputFormatAdvancedSpacesEnum];
export const JobSvfOutputFormatAdvancedOpeningElementsEnum = {
    Hide: 'hide',
    Show: 'show',
    Skip: 'skip'
} as const;

export type JobSvfOutputFormatAdvancedOpeningElementsEnum = typeof JobSvfOutputFormatAdvancedOpeningElementsEnum[keyof typeof JobSvfOutputFormatAdvancedOpeningElementsEnum];
export const JobSvfOutputFormatAdvancedExtractorVersionEnum = {
    Next: 'next',
    Previous: 'previous'
} as const;

export type JobSvfOutputFormatAdvancedExtractorVersionEnum = typeof JobSvfOutputFormatAdvancedExtractorVersionEnum[keyof typeof JobSvfOutputFormatAdvancedExtractorVersionEnum];
export const JobSvfOutputFormatAdvancedMaterialModeEnum = {
    Auto: 'auto',
    Basic: 'basic',
    Autodesk: 'autodesk'
} as const;

export type JobSvfOutputFormatAdvancedMaterialModeEnum = typeof JobSvfOutputFormatAdvancedMaterialModeEnum[keyof typeof JobSvfOutputFormatAdvancedMaterialModeEnum];
export const JobSvfOutputFormatAdvancedHierarchyEnum = {
    Classic: 'Classic',
    SystemPath: 'SystemPath'
} as const;

export type JobSvfOutputFormatAdvancedHierarchyEnum = typeof JobSvfOutputFormatAdvancedHierarchyEnum[keyof typeof JobSvfOutputFormatAdvancedHierarchyEnum];



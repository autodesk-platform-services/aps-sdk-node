/* tslint:disable */
/* eslint-disable */


/**
 * Specifies what IFC loader to use during translation. Applicable only when the source design is of type IFC. Possible values are:  - ``legacy`` - Use IFC loader version 1, which is based on the Navisworks IFC loader.  - ``modern`` - Use IFC loader version 2, which is based on the Revit IFC loader.  - ``v3`` - Use IFC loader version 3, which is based on the Revit IFC loader. - ``v4`` - **(Recommended)** Use IFC loader version 4, which is a native solution specifically designed for Autodesk Platform Services (APS). It does not depend on Navisworks or Revit. 
 * @export
 * @enum {string}
 */

export const ConversionMethod = {
    Legacy: 'legacy',
    Modern: 'modern',
    V3: 'v3',
    V4: 'v4'
} as const;

export type ConversionMethod = typeof ConversionMethod[keyof typeof ConversionMethod];




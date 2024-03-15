/* tslint:disable */
/* eslint-disable */


/**
 * Specifies what IFC loader to use during translation. Applicable only when the source design is of type IFC. Possible values are:  - ``legacy`` - Use the Navisworks IFC loader. - ``modern`` - Use the Revit IFC loader (recommended over the legacy option). - ``v3`` - Use the newer Revit IFC loader (recommended over the modern option).
 * @export
 * @enum {string}
 */

export const ConversionMethod = {
    Legacy: 'legacy',
    Modern: 'modern',
    V3: 'v3'
} as const;

export type ConversionMethod = typeof ConversionMethod[keyof typeof ConversionMethod];




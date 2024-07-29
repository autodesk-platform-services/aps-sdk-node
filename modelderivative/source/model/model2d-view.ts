/* tslint:disable */
/* eslint-disable */


/**
 * The format that 2D views must be rendered to. Possible values are:  - ``legacy`` - (Default) Render to a model derivative specific file format. - ``pdf`` - Render to the PDF file format. When the source design is of type Revit, applies only to Revit 2022 files and newer. If the source design is of type DWG, only properties with semantic values are extracted. 
 * @export
 * @enum {string}
 */

export const Model2dView = {
    Legacy: 'legacy',
    Pdf: 'pdf'
} as const;

export type Model2dView = typeof Model2dView[keyof typeof Model2dView];




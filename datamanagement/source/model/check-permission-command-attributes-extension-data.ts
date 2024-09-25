/* tslint:disable */
/* eslint-disable */


/**
 * Contains the properties specific to the  CheckPermission command.
 * @export
 * @interface CheckPermissionCommandAttributesExtensionData
 */
export interface CheckPermissionCommandAttributesExtensionData {
    /**
     * An array of keywords where each keyword  is an action that permission must be checked for. Possible values:  - ``read`` - Download and view specified resource. - ``view`` - View specified resource without downloading. - ``download`` - Download and view specified resource. - ``collaborate`` - Add comments for the specified resource. - ``write`` - Write to the specified resource. - ``upload`` - Upload to the specified resource. - ``updateMetaData`` - Update metadata of the specified resource. - ``create`` - Write and upload to the specified resource. - ``delete`` - Delete the specified resource. - ``admin`` - Perform administrative operations on specified resource. - ``share``- Share the specified resource.
     * @type {Array<string>}
     * @memberof CheckPermissionCommandAttributesExtensionData
     */
    'requiredActions'?: Array<string>;
}


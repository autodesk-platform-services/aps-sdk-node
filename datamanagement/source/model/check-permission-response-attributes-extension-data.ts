/* tslint:disable */
/* eslint-disable */

import { CheckPermissionResponseAttributesExtensionDataPermissions } from './check-permission-response-attributes-extension-data-permissions';

/**
 * A container of the results of the resources that were checked for permission.
 * @export
 * @interface CheckPermissionResponseAttributesExtensionData
 */
export interface CheckPermissionResponseAttributesExtensionData {
    /**
     * An array of objects, where each object  represents a folder, item, or version that  permission was checked for.
     * @type {Array<CheckPermissionResponseAttributesExtensionDataPermissions>}
     * @memberof CheckPermissionResponseAttributesExtensionData
     */
    'permissions'?: Array<CheckPermissionResponseAttributesExtensionDataPermissions>;
    /**
     * An array of keywords where each keyword  is an action that permission was checked for. Possible values:  - ``read`` - Download and view specified resource. - ``view`` - View specified resource without downloading. - ``download`` - Download and view specified resource. - ``collaborate`` - Add comments for the specified resource. - ``write`` - Write to the specified resource. - ``upload`` - Upload to the specified resource. - ``updateMetaData`` - Update metadata of the specified resource. - ``create`` - Write and upload to the specified resource. - ``delete`` - Delete the specified resource. - ``admin`` - Perform administrative operations on specified resource. - ``share``- Share the specified resource.
     * @type {Array<string>}
     * @memberof CheckPermissionResponseAttributesExtensionData
     */
    'requiredActions'?: Array<string>;
}


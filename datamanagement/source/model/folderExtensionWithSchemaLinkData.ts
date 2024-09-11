

/**
 * The object that contains the additional properties, which makes this resource extensible.
 * @export
 * @interface FolderExtensionWithSchemaLinkData
 */
export interface FolderExtensionWithSchemaLinkData {
    [key: string]: object;

    /**
     * A list of file naming standard IDs that have been applied to the folder.  Note that we currently support one file naming standard per project.  Note that this feature is only available for BIM 360 projects.  To get the details of a file naming standard, call [GET naming-standards](/en/docs/bim360/v1/reference/http/document-management-naming-standards-id-GET).  To learn more about the file naming standard feature, see the [BIM 360 File Naming Standard](https://help.autodesk.com/view/BIM360D/ENU/?guid=Common_Data_Environment) help documentation. 
     * @type {Array<object>}
     * @memberof FolderExtensionWithSchemaLinkData
     */
    'namingStandardIds'?: Array<object>;
}


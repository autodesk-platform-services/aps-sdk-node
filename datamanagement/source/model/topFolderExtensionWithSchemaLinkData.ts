
import { TopFolderExtensionWithSchemaLinkDataFolderParents } from './topFolderExtensionWithSchemaLinkDataFolderParents';

/**
 * The object that contains the additional properties, which makes this resource extensible.
 * @export
 * @interface TopFolderExtensionWithSchemaLinkData
 */
export interface TopFolderExtensionWithSchemaLinkData {
    [key: string]: boolean | string | object;

    /**
     * A list of file naming standard IDs that have been applied to the folder.  Note that we currently support one file naming standard per project.  Note that this feature is only available for BIM 360 projects.  To get the details of a file naming standard, call [GET naming-standards](/en/docs/bim360/v1/reference/http/document-management-naming-standards-id-GET).  To learn more about the file naming standard feature, see the [BIM 360 File Naming Standard](https://help.autodesk.com/view/BIM360D/ENU/?guid=Common_Data_Environment) help documentation. 
     * @type {Array<object>}
     * @memberof TopFolderExtensionWithSchemaLinkData
     */
    'namingStandardIds'?: Array<object>;
    /**
     * Determines if folder is root folder. Note that this attribute is available only for BIM 360 and ACC projects.
     * @type {boolean}
     * @memberof TopFolderExtensionWithSchemaLinkData
     */
    'isRoot'?: boolean;
    /**
     * Type of folder. Possible values: ``normal``, ``plan``, ``shared``, ``recycle``, ``drawing``.  Note that ``recycle`` and ``drawing`` only exist in old projects.  Note that this feature is only available for BIM 360 and ACC projects. 
     * @type {string}
     * @memberof TopFolderExtensionWithSchemaLinkData
     */
    'folderType'?: string;
    /**
     * Parent folders of the current folder. Note that this feature is only available for BIM 360 and ACC projects.
     * @type {Array<TopFolderExtensionWithSchemaLinkDataFolderParents>}
     * @memberof TopFolderExtensionWithSchemaLinkData
     */
    'folderParents'?: Array<TopFolderExtensionWithSchemaLinkDataFolderParents>;
}


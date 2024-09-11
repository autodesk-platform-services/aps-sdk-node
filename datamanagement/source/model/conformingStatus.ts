

/**
 * A status indicating whether this version conforms to its parent folder\'s file naming standard.  Possible values:  - ``NONE``: The conforming status is not applicable for the version. - ``CONFORMING``: The version conforms to its parent folder\'s file naming standard. - ``NON_CONFORMING``: The version does not conform to its parent folder\'s file naming standard.  In the event of a ``NON_CONFORMING`` status, use the [Get a Folder](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-GET) operation to get the file naming standards IDs that have been applied to the version\'s parent folder. Then use the ID to call [GET naming-standards](/en/docs/bim360/v1/reference/http/document-management-naming-standards-id-GET/) to get the details of the file naming standard.  Note that this feature is only available for BIM 360 projects.            To learn more about the file naming standard feature, see the [BIM 360 File Naming Standard](https://help.autodesk.com/view/BIM360D/ENU/?guid=Common_Data_Environment) help documentation.  
 * @export
 * @enum {string}
 */

export const ConformingStatus = {
    None: 'NONE',
    Conforming: 'CONFORMING',
    NonConforming: 'NON_CONFORMING'
} as const;

export type ConformingStatus = typeof ConformingStatus[keyof typeof ConformingStatus];




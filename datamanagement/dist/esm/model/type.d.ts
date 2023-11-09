/**
 * The type of this resource. Possible values: **folders, items, versions, objects, downloads e.t.c**
 * @export
 * @enum {string}
 */
export declare const Type: {
    readonly Objects: "objects";
    readonly Folders: "folders";
    readonly Downloads: "downloads";
    readonly Versions: "versions";
    readonly Items: "items";
    readonly ItemsautodeskBim360File: "items:autodesk.bim360:File";
    readonly ItemsautodeskCoreFile: "items:autodesk.core:File";
    readonly Commands: "commands";
    readonly VersionsautodeskBim360File: "versions:autodesk.bim360:File";
    readonly VersionsautodeskA360CompositeDesign: "versions:autodesk.a360:CompositeDesign";
    readonly VersionsautodeskCoreFile: "versions:autodesk.core:File";
    readonly XrefsautodeskCoreXref: "xrefs:autodesk.core:Xref";
    readonly CommandsautodeskBim360C4RModelGetPublishJob: "commands:autodesk.bim360:C4RModelGetPublishJob";
    readonly CommandsautodeskBim360C4RPublishWithoutLinks: "commands:autodesk.bim360:C4RPublishWithoutLinks";
    readonly CommandsautodeskBim360C4RModelPublish: "commands:autodesk.bim360:C4RModelPublish";
    readonly CommandsautodeskCoreListItems: "commands:autodesk.core:ListItems";
    readonly CommandsautodeskCoreListRefs: "commands:autodesk.core:ListRefs";
    readonly CommandsautodeskCoreCheckPermission: "commands:autodesk.core:CheckPermission";
    readonly FoldersautodeskBim360Folder: "folders:autodesk.bim360:Folder";
    readonly FoldersautodeskCoreFolder: "folders:autodesk.core:Folder";
    readonly AuxiliaryautodeskCoreAttachment: "auxiliary:autodesk.core:Attachment";
};
export type Type = typeof Type[keyof typeof Type];

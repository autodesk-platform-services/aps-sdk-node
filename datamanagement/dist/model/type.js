"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
/**
 * The type of this resource. Possible values: **folders, items, versions, objects, downloads e.t.c**
 * @export
 * @enum {string}
 */
exports.Type = {
    Objects: 'objects',
    Folders: 'folders',
    Downloads: 'downloads',
    Versions: 'versions',
    Items: 'items',
    ItemsautodeskBim360File: 'items:autodesk.bim360:File',
    ItemsautodeskCoreFile: 'items:autodesk.core:File',
    Commands: 'commands',
    VersionsautodeskBim360File: 'versions:autodesk.bim360:File',
    VersionsautodeskA360CompositeDesign: 'versions:autodesk.a360:CompositeDesign',
    VersionsautodeskCoreFile: 'versions:autodesk.core:File',
    XrefsautodeskCoreXref: 'xrefs:autodesk.core:Xref',
    CommandsautodeskBim360C4RModelGetPublishJob: 'commands:autodesk.bim360:C4RModelGetPublishJob',
    CommandsautodeskBim360C4RPublishWithoutLinks: 'commands:autodesk.bim360:C4RPublishWithoutLinks',
    CommandsautodeskBim360C4RModelPublish: 'commands:autodesk.bim360:C4RModelPublish',
    CommandsautodeskCoreListItems: 'commands:autodesk.core:ListItems',
    CommandsautodeskCoreListRefs: 'commands:autodesk.core:ListRefs',
    CommandsautodeskCoreCheckPermission: 'commands:autodesk.core:CheckPermission',
    FoldersautodeskBim360Folder: 'folders:autodesk.bim360:Folder',
    FoldersautodeskCoreFolder: 'folders:autodesk.core:Folder',
    AuxiliaryautodeskCoreAttachment: 'auxiliary:autodesk.core:Attachment'
};

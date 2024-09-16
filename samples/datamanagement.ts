import { StaticAuthenticationProvider } from "@aps_sdk/autodesk-sdkmanager";
import {
  DataManagementClient,
  Hub,
  HubData,
  Hubs,
  Projects,
  Project,
  ProjectData,
  TopFolders,
  Download,
  DownloadData,
  Job,
  JobData,
  CreatedDownload,
  DownloadPayload,
  VersionNumber,
  JsonApiVersion,
  DownloadPayloadData,
  DownloadPayloadDataAttributes,
  DownloadPayloadDataAttributesFormat,
  DownloadPayloadDataRelationships,
  DownloadPayloadDataRelationshipsSourceData,
  DownloadPayloadDataRelationshipsSource,
  StoragePayload,
  StoragePayloadData,
  StoragePayloadDataAttributes,
  StoragePayloadDataRelationships,
  StoragePayloadDataRelationshipsTarget,
  StoragePayloadDataRelationshipsTargetData,
  Folder,
  FolderData,
  FolderContents,
  FolderRefs,
  RelationshipLinks,
  RelationshipRefs,
  Search,
  FolderPayload,
  FolderPayloadData,
  FolderPayloadDataAttributes,
  FolderPayloadDataAttributesExtension,
  FolderPayloadDataRelationships,
  FolderPayloadDataRelationshipsParent,
  FolderPayloadDataRelationshipsParentData,
  RelationshipRefsPayload,
  RelationshipRefsPayloadData,
  RelationshipRefsPayloadDataMeta,
  BaseAttributesExtensionObjectWithoutSchemaLink,
  ModifyFolderPayload,
  ModifyFolderPayloadData,
  ModifyFolderPayloadDataAttributes,
  Item,
  ItemData,
  Refs,
  ItemTip,
  VersionData,
  Versions,
  ModifyItemPayload,
  ModifyItemPayloadData,
  ModifyItemPayloadDataAttributes,
  ItemPayload,
  ItemPayloadData,
  ItemPayloadDataAttributes,
  ItemPayloadDataAttributesExtension,
  ItemPayloadDataRelationships,
  ItemPayloadDataRelationshipsTip,
  ItemPayloadDataRelationshipsTipData,
  ItemPayloadDataRelationshipsParent,
  ItemPayloadDataRelationshipsParentData,
  ItemPayloadIncluded,
  ItemPayloadIncludedAttributes,
  ItemPayloadIncludedAttributesExtension,
  Version,
  DownloadFormats,
  DownloadFormatsData,
  Downloads,
  ModifyVersionPayload,
  ModifyVersionPayloadData,
  ModifyVersionPayloadDataAttributes,
  VersionPayload,
  CreatedVersion,
  VersionPayloadData,
  VersionPayloadDataAttributes,
  VersionPayloadDataAttributesExtension,
  VersionPayloadDataRelationships,
  VersionPayloadDataRelationshipsItem,
  VersionPayloadDataRelationshipsItemData,
  CreatedVersionData,
  CheckPermission,
  CheckPermissionPayload,
  CheckPermissionPayloadAttributesExtensionData,
  CheckPermissionPayloadAttributes,
  CheckPermissionPayloadAttributesExtension,
  CheckPermissionPayloadRelationships,
  CheckPermissionPayloadRelationshipsResources,
  TypeCommands,
  TypeCommandtypeCheckPermission,
  RequireActions,
  TypeFolder,
  TypeEntity,
  TypeVersion,
  TypeItem,
  TypeFilter,
  TypeObject,
  TypeDownloads,
  TypeFolderExtension,
  TypeItemExtension,
  TypeItemIncludedExtension,
  ListRefs,
  ListRefsPayload,
  TypeCommandtypeListRefs,
  ListRefsPayloadAttributes,
  ListRefsPayloadAttributesExtension,
  ListRefsPayloadRelationships,
  ListRefsPayloadRelationshipsResources,
  ListItems,
  ListItemsPayload,
  ListItemsPayloadAttributes,
  ListItemsPayloadAttributesExtension,
  TypeCommandtypeListItems,
  ListItemsPayloadAttributesExtensionData,
  ListItemsPayloadRelationships,
  ListItemsPayloadRelationshipsResources,
  PublishModelPayload,
  PublishModelPayloadAttributes,
  PublishModelPayloadAttributesExtension,
  TypeCommandtypePublishmodel,
  PublishModelPayloadRelationships,
  PublishModelPayloadRelationshipsResources,
  PublishModel,
  PublishWithoutLinksPayload,
  PublishWithoutLinksPayloadAttributes,
  PublishWithoutLinksPayloadAttributesExtension,
  TypeCommandtypePublishWithoutLinks,
  PublishWithoutLinks,
  GetPublishModelJobPayload,
  GetPublishModelJobPayloadAttributes,
  GetPublishModelJobPayloadAttributesExtension,
  TypeCommandtypeGetPublishModelJob,
  GetPublishModelJobPayloadRelationships,
  GetPublishModelJobPayloadRelationshipsResources,
  GetPublishModelJob,
  TypeAttributeExtension,
  ItemPayloadIncludedRelationships,
  ItemPayloadIncludedRelationshipsStorage,
  ItemPayloadIncludedRelationshipsStorageData,
  VersionPayloadDataRelationshipsStorage,
  VersionPayloadDataRelationshipsStorageData,
} from "@aps_sdk/data-management";
import "dotenv/config";

const hub_id = process.env.hub_id;
const accessToken = process.env.accessToken;
const project_id = process.env.project_id;
const download_id = process.env.download_id;
const job_id = process.env.job_id;
const version_id = process.env.version_id;
const folder_id = process.env.folder_id;
const item_id = process.env.item_id;
const project_top_folder_one_id = process.env.project_top_folder_one_id;
const project_top_folder_two_id = process.env.project_top_folder_two_id;
const storage_urn = process.env.storage_urn;

const staticAuthenticationProvider = new StaticAuthenticationProvider(
  accessToken
);
const dataManagementClient = new DataManagementClient({
  authenticationProvider: staticAuthenticationProvider,
});

//-------------------------------------------------------------------------- Hubs ---------------------------------------------------------------------//

async function getHubs() {
  try {
    const hubs: Hubs = await dataManagementClient.getHubs({
      filterId: ["b.a4f95080-84fe-4281-8d0a-bd8c885695e0"],
      filterName: ["Autodesk Forge Partner Development"],
      filterExtensionType: ["hubs:autodesk.bim360:Account"],
    });
    hubs.data.forEach((current) => {
      const hubId: string = current.id;
      const hubType: string = current.type;

      console.log(hubId);
      console.log(hubType);

      console.log(current.attributes.name);
      console.log(current.attributes.extension.type);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getHub() {
  try {
    const hub: Hub = await dataManagementClient.getHub(hub_id);
    const hubData: HubData = hub.data;
    const hubId: string = hubData.id;
    const hubType: string = hubData.type;

    console.log(hubId);
    console.log(hubType);
    console.log(hubData.attributes.name);
  } catch (err) {
    console.error(err.message);
  }
}

// getHubs();
// getHub();

//------------------------------------------------------------------------Projects-------------------------------------------------------------//

async function getHubProjects() {
  try {
    const projects: Projects = await dataManagementClient.getHubProjects(
      hub_id,
      {
        filterId: [
          "b.27c2ce48-93fe-4211-9599-0e900bb6ea89",
          "b.180e1bc8-6687-4029-a069-319f611de8a9",
        ],
        filterExtensionType: ["projects:autodesk.bim360:Project"],
        pageNumber: 0,
        pageLimit: 1,
      }
    );
    projects.data.forEach((current) => {
      const projectId: string = current.id;
      const projectType: string = current.type;

      console.log(projectId);
      console.log(projectType);

      console.log(current.attributes.extension.type);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getProject() {
  try {
    const project: Project = await dataManagementClient.getProject(
      hub_id,
      project_id
    );
    const projectData: ProjectData = project.data;
    const projectId: string = projectData.id;
    const projectType: string = projectData.type;

    console.log(projectId);
    console.log(projectType);
    console.log(projectData.attributes.extension.type);
  } catch (err) {
    console.error(err.message);
  }
}

async function getProjectHub() {
  try {
    const hub: Hub = await dataManagementClient.getProjectHub(
      hub_id,
      project_id
    );
    const hubData: HubData = hub.data;
    const hubId: string = hubData.id;
    const hubType: string = hubData.type;

    console.log(hubId);
    console.log(hubType);
    console.log(hubData.attributes.name);
  } catch (err) {
    console.error(err.message);
  }
}

async function getProjectTopFolders() {
  try {
    const topFolders: TopFolders =
      await dataManagementClient.getProjectTopFolders(hub_id, project_id, {
        excludeDeleted: true,
        projectFilesOnly: false,
      });
    topFolders.data.forEach((current) => {
      const topFolderId: string = current.id;
      const topFolderType: string = current.type;

      console.log(topFolderId);
      console.log(topFolderType);

      console.log(current.attributes.name);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getDownload() {
  try {
    const download: Download = await dataManagementClient.getDownload(
      hub_id,
      download_id
    );
    const downloadData: DownloadData = download.data;
    const downloadId: string = downloadData.id;
    const downloadType: string = downloadData.type;

    console.log(downloadId);
    console.log(downloadType);
  } catch (err) {
    console.error(err.message);
  }
}

async function getDownloadJob() {
  try {
    const downloadJob: Job = await dataManagementClient.getDownloadJob(
      hub_id,
      job_id
    );
    const jobData: JobData = downloadJob.data;
    const jobId: string = jobData.id;
    const jobType: string = jobData.type;

    console.log(jobId);
    console.log(jobType);
  } catch (err) {
    console.error(err.message);
  }
}

async function startDownload() {
  try {
    let downloadPayload: DownloadPayload = {
      jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
      data: <DownloadPayloadData>{
        type: TypeDownloads.Downloads,
        attributes: <DownloadPayloadDataAttributes>{
          format: <DownloadPayloadDataAttributesFormat>{
            fileType: "dwg",
          },
        },
        relationships: <DownloadPayloadDataRelationships>{
          source: <DownloadPayloadDataRelationshipsSource>{
            data: <DownloadPayloadDataRelationshipsSourceData>{
              type: TypeVersion.Versions,
              id: version_id,
            },
          },
        },
      },
    };
    const createdDownload: CreatedDownload =
      await dataManagementClient.startDownload(project_id, downloadPayload);
    console.log(createdDownload);
  } catch (err) {
    console.error(err.message);
  }
}

async function createStorage() {
  try {
    let storagePayload: StoragePayload = {
      jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
      data: <StoragePayloadData>{
        type: TypeObject.Objects,
        attributes: <StoragePayloadDataAttributes>{
          name: "drawing.dwg",
        },
        relationships: <StoragePayloadDataRelationships>{
          target: <StoragePayloadDataRelationshipsTarget>{
            data: <StoragePayloadDataRelationshipsTargetData>{
              type: TypeFolder.Folders,
              id: folder_id,
            },
          },
        },
      },
    };
    const storage: Storage = await dataManagementClient.createStorage(
      project_id,
      storagePayload
    );
    console.log(storage);
  } catch (err) {
    console.error(err.message);
  }
}

// getHubProjects();
// getProject();
// getProjectHub();
// getProjectTopFolders();
// getDownload();
// getDownloadJob();
// startDownload(); --
// createStorage();

//----------------------------------------------------------------------Folders-------------------------------------------------------//

async function getFolder() {
  try {
    const folder: Folder = await dataManagementClient.getFolder(
      project_id,
      folder_id
    );
    const folderData: FolderData = folder.data;
    const folderId: string = folderData.id;
    const folderType: string = folderData.type;

    console.log(folderId);
    console.log(folderType);

    console.log(folderData.attributes.name);
  } catch (err) {
    console.error(err.message);
  }
}

async function getFolderContents() {
  try {
    const folderContents: FolderContents =
      await dataManagementClient.getFolderContents(project_id, folder_id, {
        filterType: ["items"],
        filterId: [
          "urn:adsk.wipprod:dm.lineage:-RRLDElBTuuuO74_-r6XLg",
          "urn:adsk.wipprod:dm.lineage:8By2tOWmTjGXK70wJDlzgg",
        ],
        filterExtensionType: ["items:autodesk.bim360:File"],
        pageNumber: 1,
        pageLimit: 1,
        includeHidden: true,
      });
    folderContents.data.forEach((current) => {
      const folderId: string = current.id;
      const folderType: string = current.type;

      console.log(folderId);
      console.log(folderType);

      console.log(current.attributes.displayName);
      console.log(current.attributes.lastModifiedTime);
      console.log(current.relationships);
      console.log(current.attributes.extension.type);
    });
    folderContents.included.forEach((current) => {
      const versionId: string = current.id;
      const versionType: string = current.type;

      console.log(versionId);
      console.log(versionType);

      console.log(current.attributes.displayName);
      console.log(current.relationships.storage.data.id);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getFolderParent() {
  try {
    const folder: Folder = await dataManagementClient.getFolderParent(
      project_id,
      folder_id
    );
    const folderData: FolderData = folder.data;
    const folderId: string = folderData.id;
    const folderType: string = folderData.type;

    console.log(folderId);
    console.log(folderType);

    console.log(folderData.attributes.displayName);
  } catch (err) {
    console.error(err.message);
  }
}

async function getFolderRefs() {
  try {
    const folderRefs: FolderRefs = await dataManagementClient.getFolderRefs(
      project_id,
      folder_id,
      { filterType: [TypeFilter.Folders] }
    );
    folderRefs.data.forEach((current) => {
      const folderId: string = current.id;
      const folderType: string = current.type;

      console.log(folderId);
      console.log(folderType);

      console.log(current.attributes.displayName);
      console.log(current.relationships.refs);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getFolderRelationshipsLinks() {
  try {
    const relationshipLinks: RelationshipLinks =
      await dataManagementClient.getFolderRelationshipsLinks(
        project_id,
        folder_id
      );
    relationshipLinks.data.forEach((current) => {
      const relationshipId: string = current.id;
      const relationshipType: string = current.type;

      console.log(relationshipId);
      console.log(relationshipType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getFolderRelationshipsRefs() {
  try {
    const relationshipRefs: RelationshipRefs =
      await dataManagementClient.getFolderRelationshipsRefs(
        folder_id,
        project_id,
        { filterType: [TypeFilter.Folders] }
      );
    relationshipRefs.data.forEach((current) => {
      const relationshipId: string = current.id;
      const relationshipType: string = current.type;

      console.log(relationshipId);
      console.log(relationshipType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getFolderSearch() {
  try {
    const search: Search = await dataManagementClient.getFolderSearch(
      project_id,
      folder_id
    );
    search.data.forEach((current) => {
      const folderId: string = current.id;
      const folderType: string = current.type;

      console.log(folderId);
      console.log(folderType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function createFolder() {
  let folderPayload: FolderPayload = {
    jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
    data: <FolderPayloadData>{
      type: TypeFolder.Folders,
      attributes: <FolderPayloadDataAttributes>{
        name: "Kredo Folder",
        extension: <FolderPayloadDataAttributesExtension>{
          type: TypeFolderExtension.Bim360Folder,
          version: VersionNumber._10,
        },
      },
      relationships: <FolderPayloadDataRelationships>{
        parent: <FolderPayloadDataRelationshipsParent>{
          data: <FolderPayloadDataRelationshipsParentData>{
            type: TypeFolder.Folders,
            id: folder_id,
          },
        },
      },
    },
  };
  try {
    const folder: Folder = await dataManagementClient.createFolder(
      project_id,
      folderPayload
    );
    const folderData: FolderData = folder.data;
    const folderType: string = folderData.type;
    const folderId: string = folderData.id;

    console.log(folderType);
    console.log(folderId);
    console.log(folderData.attributes.displayName);
  } catch (err) {
    console.error(err.message);
  }
}

async function createFolderRelationshipsRef() {
  let relationshipRefsPayload: RelationshipRefsPayload = {
    jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
    data: <RelationshipRefsPayloadData>{
      type: TypeVersion.Versions,
      id: version_id,
      meta: <RelationshipRefsPayloadDataMeta>{
        extension: <BaseAttributesExtensionObjectWithoutSchemaLink>{
          type: TypeAttributeExtension.AuxiliaryautodeskCoreAttachment,
          version: VersionNumber._10,
        },
      },
    },
  };
  try {
    const response: Response =
      await dataManagementClient.createFolderRelationshipsRef(
        folder_id,
        project_id,
        relationshipRefsPayload
      );
    const status = response.status;

    console.log(status);
  } catch (err) {
    console.error(err.message);
  }
}

async function patchFolder() {
  let modifyFolderPayload: ModifyFolderPayload = {
    jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
    data: <ModifyFolderPayloadData>{
      type: TypeFolder.Folders,
      id: folder_id,
      attributes: <ModifyFolderPayloadDataAttributes>{
        name: "Kredo Y New Folder",
      },
    },
  };
  try {
    const folder: Folder = await dataManagementClient.patchFolder(
      project_id,
      folder_id,
      modifyFolderPayload
    );
    const folderData: FolderData = folder.data;
    const folderType: string = folderData.type;
    const folderId: string = folderData.id;

    console.log(folderType);
    console.log(folderId);
  } catch (err) {
    console.error(err.message);
  }
}

// getFolder();
// getFolderContents();
// getFolderParent();
// getFolderRefs();
// getFolderRelationshipsLinks();
// getFolderRelationshipsRefs();
// getFolderSearch(); -- filter
// createFolder();
// createFolderRelationshipsRef();
// patchFolder();

// ----------------------------------------------------------Items---------------------------------------------------------//

async function getItem() {
  try {
    const item: Item = await dataManagementClient.getItem(project_id, item_id);
    const itemData: ItemData = item.data;
    const itemId: string = itemData.id;
    const itemType: string = itemData.type;

    console.log(itemId);
    console.log(itemType);

    console.log(itemData.attributes.displayName);
  } catch (err) {
    console.error(err.message);
  }
}

async function getItemParentFolder() {
  try {
    const folder: Folder = await dataManagementClient.getItemParentFolder(
      project_id,
      item_id
    );
    const folderData: FolderData = folder.data;
    const folderType: string = folderData.type;
    const folderId: string = folderData.id;

    console.log(folderType);
    console.log(folderId);

    console.log(folderData.attributes.displayName);
  } catch (err) {
    console.error(err.message);
  }
}

async function getItemRefs() {
  try {
    const refs: Refs = await dataManagementClient.getItemRefs(
      project_id,
      item_id,
      { filterType: [TypeFilter.Folders] }
    );
    refs.data.forEach((current) => {
      const refsId: string = current.id;
      const refsType: string = current.type;

      console.log(refsId);
      console.log(refsType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getItemRelationshipsLinks() {
  try {
    const relationshipLinks: RelationshipLinks =
      await dataManagementClient.getItemRelationshipsLinks(project_id, item_id);
    relationshipLinks.data.forEach((current) => {
      const relationshipId: string = current.id;
      const relationshipType: string = current.type;

      console.log(relationshipId);
      console.log(relationshipType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getItemRelationshipsRefs() {
  try {
    const relationshipRefs: RelationshipRefs =
      await dataManagementClient.getItemRelationshipsRefs(project_id, item_id, {
        filterType: [TypeFilter.Folders],
      });
    relationshipRefs.data.forEach((current) => {
      const relationshipId: string = current.id;
      const relationshipType: string = current.type;

      console.log(relationshipId);
      console.log(relationshipType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getItemTip() {
  try {
    const itemTip: ItemTip = await dataManagementClient.getItemTip(
      project_id,
      item_id
    );

    const versionData: VersionData = itemTip.data;
    const versionId: string = versionData.id;
    const versionType: string = versionData.type;

    console.log(versionId);
    console.log(versionType);
  } catch (err) {
    console.error(err.message);
  }
}

async function getItemVersions() {
  try {
    const versions: Versions = await dataManagementClient.getItemVersions(
      project_id,
      item_id,
      {
        filterId: [
          "urn:adsk.wipprod:fs.file:vf.-RRLDElBTuuuO74_-r6XLg?version=1",
        ],
      }
    );
    versions.data.forEach((current) => {
      const versionsId: string = current.id;
      const versionsType: string = current.type;

      console.log(versionsId);
      console.log(versionsType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function createItem() {
  try {
    let itemPayload: ItemPayload = {
      jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
      data: <ItemPayloadData>{
        type: TypeItem.Items,
        attributes: <ItemPayloadDataAttributes>{
          displayName: "New Item Name",
          extension: <ItemPayloadDataAttributesExtension>{
            type: TypeItemExtension.Bim360File,
            version: VersionNumber._10,
          },
        },
        relationships: <ItemPayloadDataRelationships>{
          tip: <ItemPayloadDataRelationshipsTip>{
            data: <ItemPayloadDataRelationshipsTipData>{
              type: TypeVersion.Versions,
              id: version_id,
            },
          },
          parent: <ItemPayloadDataRelationshipsParent>{
            data: <ItemPayloadDataRelationshipsParentData>{
              type: TypeFolder.Folders,
              id: folder_id,
            },
          },
        },
      },
      included: new Set<ItemPayloadIncluded>([
        {
          type: TypeVersion.Versions,
          id: "1",
          attributes: <ItemPayloadIncludedAttributes>{
            name: "mydrawingnew",
            extension: <ItemPayloadIncludedAttributesExtension>{
              type: TypeItemIncludedExtension.Bim360File,
              version: VersionNumber._10,
            },
          },
          relationships: <ItemPayloadIncludedRelationships>{
            storage: <ItemPayloadIncludedRelationshipsStorage>{
              data: <ItemPayloadIncludedRelationshipsStorageData>{
                type: TypeObject.Objects,
                id: storage_urn,
              },
            },
          },
        },
      ]),
    };
    const item: Item = await dataManagementClient.createItem(
      project_id,
      itemPayload
    );
    const itemData: ItemData = item.data;
    const itemId: string = itemData.id;
    const ItemType: string = itemData.type;

    console.log(itemId);
    console.log(ItemType);

    console.log(itemData.attributes.displayName);
  } catch (err) {
    console.error(err.message);
  }
}

async function createItemRelationshipsRef() {
  try {
    let relationshipRefsPayload: RelationshipRefsPayload = {
      jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
      data: <RelationshipRefsPayloadData>{
        type: TypeVersion.Versions,
        id: version_id,
        meta: <RelationshipRefsPayloadDataMeta>{
          extension: <BaseAttributesExtensionObjectWithoutSchemaLink>{
            type: TypeAttributeExtension.AuxiliaryautodeskCoreAttachment,
            version: VersionNumber._10,
          },
        },
      },
    };
    const response: Response =
      await dataManagementClient.createItemRelationshipsRef(
        project_id,
        item_id,
        relationshipRefsPayload
      );
    const status = response.status;

    console.log(status);
  } catch (err) {
    console.error(err.message);
  }
}

async function patchItem() {
  try {
    let modifyItemPayload: ModifyItemPayload = {
      jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
      data: <ModifyItemPayloadData>{
        type: TypeItem.Items,
        id: item_id,
        attributes: <ModifyItemPayloadDataAttributes>{
          displayName: "plans.dwg",
        },
      },
    };
    console.log(modifyItemPayload);
    const item: Item = await dataManagementClient.patchItem(
      project_id,
      item_id,
      modifyItemPayload
    );
    const itemData: ItemData = item.data;
    const itemId: string = itemData.id;
    const ItemType: string = itemData.type;

    console.log(itemId);
    console.log(ItemType);

    console.log(itemData.attributes.displayName);
  } catch (err) {
    console.error(err.message);
  }
}

// getItem();
// getItemParentFolder();
// getItemRefs();
// getItemRelationshipsLinks();
// getItemRelationshipsRefs();
// getItemTip();
// getItemVersions();
// createItem(); --
// createItemRelationshipsRef();
// patchItem(); --

//-----------------------------------------------------------------Versions---------------------------------------------------------//

async function getVersion() {
  try {
    const versionDetails: Version = await dataManagementClient.getVersion(
      project_id,
      version_id
    );
    const versionData: VersionData = versionDetails.data;
    const versionId: string = versionData.id;
    const versionType: string = versionData.type;

    console.log(versionId);
    console.log(versionType);
    console.log(versionData.attributes.extension.type);
    console.log(versionData.relationships.storage.data.id);
  } catch (err) {
    console.error(err.message);
  }
}

async function getVersionDownloadFormats() {
  try {
    const downloadFormats: DownloadFormats =
      await dataManagementClient.getVersionDownloadFormats(
        project_id,
        version_id
      );
    const downloadFormatsData: DownloadFormatsData = downloadFormats.data;
    const downloadFormatsId: string = downloadFormatsData.id;
    const downloadFormatsType: string = downloadFormatsData.type;

    console.log(downloadFormatsId);
    console.log(downloadFormatsType);
    console.log(downloadFormatsData.attributes.formats);
  } catch (err) {
    console.error(err.message);
  }
}

async function getVersionDownloads() {
  try {
    const downloads: Downloads = await dataManagementClient.getVersionDownloads(
      project_id,
      version_id,
      { filterFormatFileType: ["pdf"] }
    );
    console.log(downloads);
    downloads.data.forEach((current) => {
      const downloadId: string = current.id;
      const downloadType: string = current.type;

      console.log(downloadId);
      console.log(downloadType);
      console.log(current.attributes.format.fileType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getVersionItem() {
  try {
    const item: Item = await dataManagementClient.getVersionItem(
      project_id,
      version_id
    );
    const itemData: ItemData = item.data;
    const itemId: string = itemData.id;
    const itemType: string = itemData.type;

    console.log(itemId);
    console.log(itemType);

    console.log(itemData.attributes.displayName);
  } catch (err) {
    console.error(err.message);
  }
}

async function getVersionRefs() {
  try {
    const refs: Refs = await dataManagementClient.getVersionRefs(
      project_id,
      version_id,
      { filterType: [TypeFilter.Versions] }
    );
    console.log(refs);
    refs.data.forEach((current) => {
      const refsId: string = current.id;
      const refsType: string = current.type;

      console.log(refsId);
      console.log(refsType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getVersionRelationshipsLinks() {
  try {
    const relationshipLinks: RelationshipLinks =
      await dataManagementClient.getVersionRelationshipsLinks(
        project_id,
        version_id
      );
    relationshipLinks.data.forEach((current) => {
      const relationshipId: string = current.id;
      const relationshipType: string = current.type;

      console.log(relationshipId);
      console.log(relationshipType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function getVersionRelationshipsRefs() {
  try {
    const relationshipRefs: RelationshipRefs =
      await dataManagementClient.getVersionRelationshipsRefs(
        project_id,
        version_id,
        { filterType: [TypeFilter.Versions] }
      );
    relationshipRefs.data.forEach((current) => {
      const relationshipId: string = current.id;
      const relationshipType: string = current.type;

      console.log(relationshipId);
      console.log(relationshipType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function createVersion() {
  try {
    let versionPayload: VersionPayload = {
      jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
      data: <VersionPayloadData>{
        type: TypeVersion.Versions,
        attributes: <VersionPayloadDataAttributes>{
          name: "myplans.dwg",
          extension: <VersionPayloadDataAttributesExtension>{
            type: TypeItemIncludedExtension.Bim360File,
            version: VersionNumber._10,
          },
        },
        relationships: <VersionPayloadDataRelationships>{
          item: <VersionPayloadDataRelationshipsItem>{
            data: <VersionPayloadDataRelationshipsItemData>{
              type: TypeItem.Items,
              id: item_id,
            },
          },
          storage: <VersionPayloadDataRelationshipsStorage>{
            data: <VersionPayloadDataRelationshipsStorageData>{
              type: TypeObject.Objects,
              id: storage_urn,
            },
          },
        },
      },
    };
    const createdVersion: CreatedVersion =
      await dataManagementClient.createVersion(project_id, versionPayload);
    const createdVersionData: CreatedVersionData = createdVersion.data;
    const createdVersionId: string = createdVersionData.id;
    const createdVersionType: string = createdVersionData.type;

    console.log(createdVersionId);
    console.log(createdVersionType);
  } catch (err) {
    console.error(err.message);
  }
}

async function createVersionRelationshipsRef() {
  try {
    let relationshipRefsPayload: RelationshipRefsPayload = {
      jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
      data: <RelationshipRefsPayloadData>{
        type: TypeEntity.Versions,
        id: version_id,
        meta: <RelationshipRefsPayloadDataMeta>{
          extension: <BaseAttributesExtensionObjectWithoutSchemaLink>{
            type: TypeAttributeExtension.AuxiliaryautodeskCoreAttachment,
            version: VersionNumber._10,
          },
        },
      },
    };
    const response: Response =
      await dataManagementClient.createVersionRelationshipsRef(
        project_id,
        version_id,
        relationshipRefsPayload
      );
    const status = response.status;

    console.log(status);
  } catch (err) {
    console.error(err.message);
  }
}

async function patchVersion() {
  try {
    let modifyVersionPayload: ModifyVersionPayload = {
      jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
      data: <ModifyVersionPayloadData>{
        type: TypeVersion.Versions,
        id: version_id,
        attributes: <ModifyVersionPayloadDataAttributes>{
          name: "myversion.dwg",
        },
      },
    };
    const versionDetails: Version = await dataManagementClient.patchVersion(
      project_id,
      version_id,
      modifyVersionPayload
    );
    const versionData: VersionData = versionDetails.data;
    const versionId: string = versionData.id;
    const versionType: string = versionData.type;

    console.log(versionId);
    console.log(versionType);
  } catch (err) {
    console.error(err.message);
  }
}

// getVersion();
// getVersionDownloadFormats();
// getVersionDownloads(); --
// getVersionItem();
// getVersionRefs();
// getVersionRelationshipsLinks();
// getVersionRelationshipsRefs();
// createVersion();
// createVersionRelationshipsRef();
// patchVersion();

//--------------------------------------------------------------------Commands------------------------------------------------------------//

async function executeCheckPermissionCommand() {
  try {
    let checkPermissionPayload: CheckPermissionPayload = {
      type: TypeCommands.Commands,
      attributes: <CheckPermissionPayloadAttributes>{
        extension: <CheckPermissionPayloadAttributesExtension>{
          type: TypeCommandtypeCheckPermission.CommandsautodeskCoreCheckPermission,
          version: "1.0.0",
          data: <CheckPermissionPayloadAttributesExtensionData>{
            requiredActions: [RequireActions.View, RequireActions.Download],
          },
        },
      },
      relationships: <CheckPermissionPayloadRelationships>{
        resources: <CheckPermissionPayloadRelationshipsResources>{
          data: [
            {
              type: TypeEntity.Folders,
              id: folder_id,
            },
          ],
        },
      },
    };
    const checkPermission: CheckPermission =
      await dataManagementClient.executeCheckPermissionCommand(
        project_id,
        checkPermissionPayload
      );

    console.log(checkPermission);
  } catch (err) {
    console.error(err.message);
  }
}

async function executeListRefsCommand() {
  try {
    let listRefsPayload: ListRefsPayload = {
      type: TypeCommands.Commands,
      attributes: <ListRefsPayloadAttributes>{
        extension: <ListRefsPayloadAttributesExtension>{
          type: TypeCommandtypeListRefs.CommandsautodeskCoreListRefs,
          version: "1.0.0",
        },
      },
      relationships: <ListRefsPayloadRelationships>{
        resources: <ListRefsPayloadRelationshipsResources>{
          data: [
            {
              type: TypeEntity.Versions,
              id: version_id,
            },
          ],
        },
      },
    };
    const listRefs: ListRefs =
      await dataManagementClient.executeListRefsCommand(
        project_id,
        listRefsPayload
      );

    console.log(listRefs);
  } catch (err) {
    console.error(err.message);
  }
}

async function executeListItemsCommand() {
  try {
    let listItemsPayload: ListItemsPayload = {
      type: TypeCommands.Commands,
      attributes: <ListItemsPayloadAttributes>{
        extension: <ListItemsPayloadAttributesExtension>{
          type: TypeCommandtypeListItems.CommandsautodeskCoreListItems,
          version: "1.1.0",
          data: <ListItemsPayloadAttributesExtensionData>{
            includePathInProject: true,
          },
        },
      },
      relationships: <ListItemsPayloadRelationships>{
        resources: <ListItemsPayloadRelationshipsResources>{
          data: [
            {
              type: TypeEntity.Items,
              id: item_id,
            },
          ],
        },
      },
    };
    const listItems: ListItems =
      await dataManagementClient.executeListItemsCommand(
        project_id,
        listItemsPayload
      );

    console.log(listItems);
  } catch (err) {
    console.error(err.message);
  }
}

async function executePublishModelCommand() {
  try {
    let publishModelPayload: PublishModelPayload = {
      type: TypeCommands.Commands,
      attributes: <PublishModelPayloadAttributes>{
        extension: <PublishModelPayloadAttributesExtension>{
          type: TypeCommandtypePublishmodel.CommandsautodeskBim360C4RModelPublish,
          version: "1.0.0",
        },
      },
      relationships: <PublishModelPayloadRelationships>{
        resources: <PublishModelPayloadRelationshipsResources>{
          data: [
            {
              type: TypeEntity.Items,
              id: item_id,
            },
          ],
        },
      },
    };
    const publishModel: PublishModel =
      await dataManagementClient.executePublishModelCommand(
        project_id,
        publishModelPayload
      );

    console.log(publishModel);
  } catch (err) {
    console.error(err.message);
  }
}

async function executePublishWithoutLinksCommand() {
  try {
    let publishWithoutLinksPayload: PublishWithoutLinksPayload = {
      type: TypeCommands.Commands,
      attributes: <PublishWithoutLinksPayloadAttributes>{
        extension: <PublishWithoutLinksPayloadAttributesExtension>{
          type: TypeCommandtypePublishWithoutLinks.CommandsautodeskBim360C4RPublishWithoutLinks,
          version: "1.0.0",
        },
      },
      relationships: <PublishModelPayloadRelationships>{
        resources: <PublishModelPayloadRelationshipsResources>{
          data: [
            {
              type: TypeEntity.Items,
              id: item_id,
            },
          ],
        },
      },
    };
    const publishWithoutLinks: PublishWithoutLinks =
      await dataManagementClient.executePublishWithoutLinksCommand(
        project_id,
        publishWithoutLinksPayload
      );

    console.log(publishWithoutLinks);
  } catch (err) {
    console.error(err.message);
  }
}

async function executeGetPublishModelJobCommand() {
  try {
    let getPublishModelJobPayload: GetPublishModelJobPayload = {
      type: TypeCommands.Commands,
      attributes: <GetPublishModelJobPayloadAttributes>{
        extension: <GetPublishModelJobPayloadAttributesExtension>{
          type: TypeCommandtypeGetPublishModelJob.CommandsautodeskBim360C4RModelGetPublishJob,
          version: "1.0.0",
        },
      },
      relationships: <GetPublishModelJobPayloadRelationships>{
        resources: <GetPublishModelJobPayloadRelationshipsResources>{
          data: [
            {
              type: TypeEntity.Items,
              id: item_id,
            },
          ],
        },
      },
    };
    const getPublishModelJob: GetPublishModelJob =
      await dataManagementClient.executeGetPublishModelJobCommand(
        project_id,
        getPublishModelJobPayload
      );

    console.log(getPublishModelJob);
  } catch (err) {
    console.error(err.message);
  }
}

// executeCheckPermissionCommand();
// executeListRefsCommand();
// executeListItemsCommand();
// executePublishModelCommand();
// executePublishWithoutLinksCommand();
// executeGetPublishModelJobCommand();

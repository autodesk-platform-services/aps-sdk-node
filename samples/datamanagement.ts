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
  Type,
  DownloadPayload,
  VersionNumber,
  JsonApiLink,
  JsonApiVersion,
  DownloadPayloadData,
  DownloadPayloadDataAttributes,
  DownloadPayloadDataAttributesFormat,
  DownloadPayloadDataRelationships,
  DownloadPayloadDataRelationshipsSourceData,
  DownloadPayloadDataRelationshipsSource,
  CreatedDownloadData,
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
  VersionDetails,
  DownloadFormats,
  DownloadFormatsData,
  Downloads,
  GetVersionRefsFilterTypeEnum,
  GetItemRelationshipsRefsFilterTypeEnum,
  GetItemRefsFilterTypeEnum,
  GetFolderRelationshipsRefsFilterTypeEnum,
  GetFolderRefsFilterTypeEnum,
  GetVersionRelationshipsRefsFilterTypeEnum,
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
  RequiredActions,
  CheckPermissionPayloadRelationships,
  CheckPermissionPayloadRelationshipsResources,
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
      filterName: ["Autodesk Forge Partner Development"],
    });
    hubs.data.forEach((current) => {
      const hubId: string = current.id;
      const hubType: Type = current.type;

      console.log(hubId);
      console.log(hubType);

      console.log(current.attributes.name);
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
    const hubType: Type = hubData.type;

    console.log(hubId);
    console.log(hubType);
    console.log(hubData.attributes.name);
  } catch (err) {
    console.error(err.message);
  }
}

getHubs();
getHub();

//------------------------------------------------------------------------Projects-------------------------------------------------------------//

async function getHubProjects() {
  try {
    const projects: Projects = await dataManagementClient.getHubProjects(
      hub_id,
      { filterExtensionType: ["projects:autodesk.bim360:Project"] }
    );
    projects.data.forEach((current) => {
      const projectId: string = current.id;
      const projectType: Type = current.type;

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
    const projectType: Type = projectData.type;

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
    const hubType: Type = hubData.type;

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
        projectFilesOnly: true,
      });
    topFolders.data.forEach((current) => {
      const topFolderId: string = current.id;
      const topFolderType: Type = current.type;

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
    const downloadType: Type = downloadData.type;

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
    const jobType: Type = jobData.type;

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
        type: Type.Downloads,
        attributes: <DownloadPayloadDataAttributes>{
          format: <DownloadPayloadDataAttributesFormat>{
            fileType: "rvt",
          },
        },
        relationships: <DownloadPayloadDataRelationships>{
          source: <DownloadPayloadDataRelationshipsSource>{
            data: <DownloadPayloadDataRelationshipsSourceData>{
              type: Type.Versions,
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
        type: Type.Objects,
        attributes: <StoragePayloadDataAttributes>{
          name: "drawing.dwg",
        },
        relationships: <StoragePayloadDataRelationships>{
          target: <StoragePayloadDataRelationshipsTarget>{
            data: <StoragePayloadDataRelationshipsTargetData>{
              type: Type.Folders,
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
// startDownload();
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
    const folderType: Type = folderData.type;

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
      });
    folderContents.data.forEach((current) => {
      const folderId: string = current.id;
      const folderType: Type = current.type;

      console.log(folderId);
      console.log(folderType);

      console.log(current.attributes.displayName);
      console.log(current.relationships.refs);
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
    const folderType: Type = folderData.type;

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
      { filterType: [GetFolderRefsFilterTypeEnum.Folders] }
    );
    folderRefs.data.forEach((current) => {
      const folderId: string = current.id;
      const folderType: Type = current.type;

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
      const relationshipType: Type = current.type;

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
        { filterType: [GetFolderRelationshipsRefsFilterTypeEnum.Folders] }
      );
    relationshipRefs.data.forEach((current) => {
      const relationshipId: string = current.id;
      const relationshipType: Type = current.type;

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
    console.log(search);
    search.data.forEach((current) => {
      const folderId: string = current.id;
      const folderType: Type = current.type;

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
      type: Type.Folders,
      attributes: <FolderPayloadDataAttributes>{
        name: "Harun's Folder",
        extension: <FolderPayloadDataAttributesExtension>{
          type: Type.FoldersautodeskBim360Folder,
          version: VersionNumber._10,
        },
      },
      relationships: <FolderPayloadDataRelationships>{
        parent: <FolderPayloadDataRelationshipsParent>{
          data: <FolderPayloadDataRelationshipsParentData>{
            type: Type.Folders,
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
    const folderType: Type = folderData.type;
    const folderId: string = folderData.id;

    console.log(folderType);
    console.log(folderId);
  } catch (err) {
    console.error(err.message);
  }
}

async function createFolderRelationshipsRef() {
  let relationshipRefsPayload: RelationshipRefsPayload = {
    jsonapi: <JsonApiVersion>{ version: VersionNumber._10 },
    data: <RelationshipRefsPayloadData>{
      type: Type.Versions,
      id: version_id,
      meta: <RelationshipRefsPayloadDataMeta>{
        extension: <BaseAttributesExtensionObjectWithoutSchemaLink>{
          type: Type.AuxiliaryautodeskCoreAttachment,
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
      type: Type.Folders,
      id: folder_id,
      attributes: <ModifyFolderPayloadDataAttributes>{
        name: "Project F New Folder",
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
    const folderType: Type = folderData.type;
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
// getFolderSearch(); //
// createFolder();
// createFolderRelationshipsRef();
// patchFolder();

// ----------------------------------------------------------Items---------------------------------------------------------//

async function getItem() {
  try {
    const item: Item = await dataManagementClient.getItem(project_id, item_id);
    const itemData: ItemData = item.data;
    const itemId: string = itemData.id;
    const itemType: Type = itemData.type;

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
    const folderType: Type = folderData.type;
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
      { filterType: [GetItemRefsFilterTypeEnum.Folders] }
    );
    refs.data.forEach((current) => {
      const refsId: string = current.id;
      const refsType: Type = current.type;

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
      const relationshipType: Type = current.type;

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
        filterType: [GetItemRelationshipsRefsFilterTypeEnum.Folders],
      });
    relationshipRefs.data.forEach((current) => {
      const relationshipId: string = current.id;
      const relationshipType: Type = current.type;

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
    const versionType: Type = versionData.type;

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
          "urn:adsk.wipprod:fs.file:vf.DixLrxYDQv-rXovqKhFLWQ?version=1",
        ],
      }
    );
    versions.data.forEach((current) => {
      const versionsId: string = current.id;
      const versionsType: Type = current.type;

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
        type: Type.Items,
        attributes: <ItemPayloadDataAttributes>{
          displayName: "itemf.dwg",
          extension: <ItemPayloadDataAttributesExtension>{
            type: Type.ItemsautodeskBim360File,
            version: VersionNumber._10,
          },
        },
        relationships: <ItemPayloadDataRelationships>{
          tip: <ItemPayloadDataRelationshipsTip>{
            data: <ItemPayloadDataRelationshipsTipData>{
              type: Type.Versions,
              id: "1",
            },
          },
          parent: <ItemPayloadDataRelationshipsParent>{
            data: <ItemPayloadDataRelationshipsParentData>{
              type: Type.Folders,
              id: folder_id,
            },
          },
        },
      },
      included: new Set<ItemPayloadIncluded>([
        {
          type: Type.Versions,
          id: "1",
          attributes: <ItemPayloadIncludedAttributes>{
            name: "drawing4.dwg",
            extension: <ItemPayloadIncludedAttributesExtension>{
              type: Type.VersionsautodeskBim360File,
              version: VersionNumber._10,
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
    const ItemType: Type = itemData.type;

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
        type: Type.Versions,
        id: version_id,
        meta: <RelationshipRefsPayloadDataMeta>{
          extension: <BaseAttributesExtensionObjectWithoutSchemaLink>{
            type: Type.AuxiliaryautodeskCoreAttachment,
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
        type: Type.Items,
        id: item_id,
        attributes: <ModifyItemPayloadDataAttributes>{
          displayName: "itemf",
        },
      },
    };
    const item: Item = await dataManagementClient.patchItem(
      project_id,
      item_id,
      modifyItemPayload
    );
    const itemData: ItemData = item.data;
    const itemId: string = itemData.id;
    const ItemType: Type = itemData.type;

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
// createItem(); -- //
// createItemRelationshipsRef();
// patchItem(); -- //

//-----------------------------------------------------------------Versions---------------------------------------------------------//

async function getVersion() {
  try {
    const versionDetails: VersionDetails =
      await dataManagementClient.getVersion(project_id, version_id);
    const versionData: VersionData = versionDetails.data;
    const versionId: string = versionData.id;
    const versionType: Type = versionData.type;

    console.log(versionId);
    console.log(versionType);
    console.log(versionData.attributes.extension.type);
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
    const downloadFormatsType: Type = downloadFormatsData.type;

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
    downloads.data.forEach((current) => {
      const downloadId: string = current.id;
      const downloadType: Type = current.type;

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
    const itemType: Type = itemData.type;

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
      { filterType: [GetVersionRefsFilterTypeEnum.Versions] }
    );
    console.log(refs);
    refs.data.forEach((current) => {
      const refsId: string = current.id;
      const refsType: Type = current.type;

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
      const relationshipType: Type = current.type;

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
        { filterType: [GetVersionRelationshipsRefsFilterTypeEnum.Versions] }
      );
    relationshipRefs.data.forEach((current) => {
      const relationshipId: string = current.id;
      const relationshipType: Type = current.type;

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
        type: Type.Versions,
        attributes: <VersionPayloadDataAttributes>{
          name: "versionfg",
          extension: <VersionPayloadDataAttributesExtension>{
            type: Type.VersionsautodeskCoreFile,
            version: VersionNumber._10,
          },
        },
        relationships: <VersionPayloadDataRelationships>{
          item: <VersionPayloadDataRelationshipsItem>{
            data: <VersionPayloadDataRelationshipsItemData>{
              type: Type.Items,
              id: item_id,
            },
          },
        },
      },
    };
    const createdVersion: CreatedVersion =
      await dataManagementClient.createVersion(project_id, versionPayload);
    const createdVersionData: CreatedVersionData = createdVersion.data;
    const createdVersionId: string = createdVersionData.id;
    const createdVersionType: Type = createdVersionData.type;

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
        type: Type.Versions,
        id: version_id,
        meta: <RelationshipRefsPayloadDataMeta>{
          extension: <BaseAttributesExtensionObjectWithoutSchemaLink>{
            type: Type.AuxiliaryautodeskCoreAttachment,
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
        type: Type.Versions,
        id: version_id,
        attributes: <ModifyVersionPayloadDataAttributes>{
          name: "versionf",
        },
      },
    };
    const versionDetails: VersionDetails =
      await dataManagementClient.patchVersion(
        project_id,
        version_id,
        modifyVersionPayload
      );
    const versionData: VersionData = versionDetails.data;
    const versionId: string = versionData.id;
    const versionType: Type = versionData.type;

    console.log(versionId);
    console.log(versionType);
  } catch (err) {
    console.error(err.message);
  }
}

// getVersion();
// getVersionDownloadFormats();
// getVersionDownloads();
// getVersionItem();
// getVersionRefs();
// getVersionRelationshipsLinks();
// getVersionRelationshipsRefs();
// createVersion();
// createVersionRelationshipsRef(); //
// patchVersion();

//--------------------------------------------------------------------Commands------------------------------------------------------------//

async function executeCheckPermissionCommand() {
  try {
    let checkPermissionPayload: CheckPermissionPayload = {
      type: Type.Commands,
      attributes: <CheckPermissionPayloadAttributes>{
        extension: <CheckPermissionPayloadAttributesExtension>{
          type: Type.CommandsautodeskCoreCheckPermission,
          version: "1.0.0",
          data: <CheckPermissionPayloadAttributesExtensionData>{
            requiredActions: [RequiredActions.View, RequiredActions.Download],
          },
        },
      },
      relationships: <CheckPermissionPayloadRelationships>{
        resources: <CheckPermissionPayloadRelationshipsResources>{
          data: [
            {
              type: Type.Folders,
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

// executeCheckPermissionCommand();

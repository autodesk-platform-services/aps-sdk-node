import { ApiResponse, SdkManager, SdkManagerBuilder, StaticAuthenticationProvider } from  "@aps_sdk/autodesk-sdkmanager"
import { BaseAttributesExtensionObjectWithoutSchemaLink, BaseAttributesExtensionObjectWithSchemaLink, BaseAttributesExtensionObjectWithSchemaLinkSchema, CreatedVersion, CreatedVersionData, DataManagementClient, DownloadFormats, DownloadFormatsData, Downloads, FilterType, FilterTypeVersion, Folder, FolderContents, FolderContentsData, FolderData, FolderPayload, FolderPayloadData, FolderPayloadDataAttributes, FolderPayloadDataAttributesExtension, FolderPayloadDataRelationships, FolderPayloadDataRelationshipsParent, FolderPayloadDataRelationshipsParentData, FolderRefs, Hub, HubData, HubDataAttributes, Hubs, Item, ItemData, ItemPayload, ItemPayloadData, ItemPayloadDataAttributes, ItemPayloadDataAttributesExtension, ItemPayloadDataRelationships, ItemTip, JsonApiVersion, JsonApiVersionValue, ModifyFolderPayload, ModifyFolderPayloadData, ModifyFolderPayloadDataAttributes, ModifyVersionPayload, ModifyVersionPayloadData, ModifyVersionPayloadDataAttributes, Refs, RelationshipLinks, RelationshipRefs, RelationshipRefsPayload, RelationshipRefsPayloadData, RelationshipRefsPayloadDataMeta, Search, TypeEntity, TypeFolder, TypeItem, TypeObject, TypeVersion, Version, VersionData, VersionPayload, VersionPayloadData, VersionPayloadDataAttributes, VersionPayloadDataAttributesExtension, VersionPayloadDataRelationships, VersionPayloadDataRelationshipsItem, VersionPayloadDataRelationshipsItemData, VersionPayloadDataRelationshipsStorage, VersionPayloadDataRelationshipsStorageData, Versions } from "@aps_sdk/data-management";
import 'dotenv/config';
import { Project, Projects, ProjectDataAttributes, TopFolders, StoragePayload, TypeFolderItemsForStorage, DownloadPayload, TypeDownloads, CreatedDownload, Job, Download} from "@aps_sdk/data-management";
import { CheckPermission, CheckPermissionPayload, CheckPermissionPayloadAttributes, CheckPermissionPayloadAttributesExtension, CheckPermissionPayloadAttributesExtensionData, CheckPermissionPayloadRelationships, CheckPermissionPayloadRelationshipsResources, CreatedItem, FilterDirection, FilterRefType, ItemPayloadDataRelationshipsParent, ItemPayloadDataRelationshipsParentData, ItemPayloadDataRelationshipsTip, ItemPayloadDataRelationshipsTipData, ItemPayloadIncludedAttributes, ItemPayloadIncludedAttributesExtension, ListItems, ListItemsPayload, ListItemsPayloadAttributes, ListItemsPayloadAttributesExtension, ListItemsPayloadAttributesExtensionData, ListItemsPayloadRelationships, ListItemsPayloadRelationshipsResources, ListRefs, ListRefsPayload, ListRefsPayloadAttributes, ListRefsPayloadAttributesExtension, ListRefsPayloadRelationships, ListRefsPayloadRelationshipsResources, ModifyItemPayload, ModifyItemPayloadData, ModifyItemPayloadDataAttributes, PublishModel, PublishModelJobPayload, PublishModelJobPayloadAttributes, PublishModelJobPayloadAttributesExtension, PublishModelJobPayloadRelationships, PublishModelJobPayloadRelationshipsResources, PublishModelPayload, PublishModelPayloadAttributes, PublishModelPayloadAttributesExtension, PublishModelPayloadRelationships, PublishModelPayloadRelationshipsResources, PublishWithoutLinks, PublishWithoutLinksPayload, PublishWithoutLinksPayloadAttributes, PublishWithoutLinksPayloadAttributesExtension, TypeCommands, TypeCommandtypeCheckPermission, TypeCommandtypeGetPublishModelJob, TypeCommandtypeListItems, TypeCommandtypeListRefs, TypeCommandtypePublishmodel, TypeCommandtypePublishWithoutLinks } from "@aps_sdk/data-management";
import { PublishWithoutLinksPayloadRelationships } from "@aps_sdk/data-management/dist/model/publishWithoutLinksPayloadRelationships";
import { PublishWithoutLinksPayloadRelationshipsResources } from "@aps_sdk/data-management/dist/model/publishWithoutLinksPayloadRelationshipsResources";

const token: string = process.env.accessToken;

let hub_id: string = process.env.hubId;
let project_id: string = process.env.projectId;
let folder_id: string = process.env.folderId;
let version_id: string = process.env.versionId;
let item_id: string = process.env.itemId;
let download_id: string = process.env.downloadId;

const sdkmanager: SdkManager = SdkManagerBuilder
    .create() 
    .build();

const staticAuthenticationProvider = new StaticAuthenticationProvider(process.env.accessToken);

let dataManagementClient :DataManagementClient = new DataManagementClient({sdkManager: sdkmanager, authenticationProvider: staticAuthenticationProvider});


//Hubs

// Returns a collectionof accessible hubs for this member.
async function hubsData() {
    const getHubs: Hubs = await dataManagementClient.getHubs();
    console.log(getHubs);
    getHubs.data.forEach(current =>{
        const HubsId :string=current.id;
        const hubsType :string=current.type;
        console.log(HubsId)

        // Attributes
        const hubsAttributes: HubDataAttributes = current.attributes;
        const hubsAttributeName: string = hubsAttributes.name;
        const hubsAttributesRegion: string = hubsAttributes.region;
        console.log(hubsAttributes);
        const hubsDataAttributesExtension: BaseAttributesExtensionObjectWithSchemaLink = hubsAttributes.extension;
        const hubsDataAttributesExtensionType: string = hubsDataAttributesExtension.type;
        const hubsDataAttributesExtensionVersion: string = hubsDataAttributesExtension.version;

        const hubsAttributesExtensionData: any = hubsDataAttributesExtension.data;

        const hubsAttributesExtensionSchema: BaseAttributesExtensionObjectWithSchemaLinkSchema = hubsDataAttributesExtension.schema;
        const hubsAttributesExtensionSchemaHref: string = hubsAttributesExtensionSchema.href;
    })
}

// Returns data on a specific hub_id.
async function hubdata() {
    const getHub:Hub = await dataManagementClient.getHub(hub_id);
    console.log(getHub)
    const getHubData:HubData = getHub.data;
    const hubsType :string= getHubData.type;
    const hubsId  :string= getHubData.id;

    // Atrributes
    const hubAttributes:HubDataAttributes = getHubData.attributes;
    const hubAttributeName:string = hubAttributes.name;
    const hubAttributesRegion :string = hubAttributes.region;

    const hubAttributesExtension  = hubAttributes.extension;
    const hubAttributesExtensionType:string = hubAttributesExtension.type;
    const hubAttributesExtensionVersion:string = hubAttributesExtension.version;

    const hubAttributesExtensionData:Object= hubAttributesExtension.data;

    const hubAttributesExtensionSchema  = hubAttributesExtension.schema;
    const hubAttributesExtensionSchemaHref:string = hubAttributesExtensionSchema.href;
 
}
// hubsData();
// hubdata();


// Folders
async function getFolder() {
  try {
    const folder: Folder = await dataManagementClient.getFolder(
      project_id,
      folder_id
    );
    console.log(folder)
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
      await dataManagementClient.getFolderContents(project_id, folder_id, 
        {
        filterType: [FilterType.Folders, FilterType.Items],
        filterExtensionType: ["items:autodesk.bim360:File"],
        pageNumber: 0,
        pageLimit: 2,
        includeHidden: true,
      }
    );
    console.log(folderContents);
    const folderData: ItemData = <ItemData>folderContents.data[0];
    console.log(folderData.attributes);
    folderContents.included.forEach((current) => {
      const versionId: string = current.id;
      const versionType: string = current.type;

      console.log(versionId);
      console.log(versionType);

      console.log(current.attributes);
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
    console.log(folder);
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
      { filterType: [FilterType.Folders] }
    );
    console.log(folderRefs);
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
      console.log(relationshipLinks);
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
        { filterType: [FilterType.Folders] }
      );
      console.log(relationshipRefs);
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
      folder_id,
      {
        filterFieldName: "displayName",
        filterValue: ["filter1", "filter2"]
      }
    );
    console.log(search);
    search.data.forEach((current) => {
      const folderId: string = current.id;
      const folderType: string = current.type;

      console.log(current.attributes);
      console.log(folderType);
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function createFolder() {
  let folderPayload: FolderPayload = {
    jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 },
    data: <FolderPayloadData>{
      type: TypeFolder.Folders,
      attributes: <FolderPayloadDataAttributes>{
        name: "Test Folder",
        extension: <FolderPayloadDataAttributesExtension>{
          type: "folders:autodesk.bim360:Folder",
          version: JsonApiVersionValue._10,
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
    console.log(folder);
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
    jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 },
    data: <RelationshipRefsPayloadData>{
      type: TypeVersion.Versions,
      id: version_id,
      meta: <RelationshipRefsPayloadDataMeta>{
        extension: <BaseAttributesExtensionObjectWithoutSchemaLink>{
          type: "auxiliary:autodesk.core:Attachment",
          version: JsonApiVersionValue._10,
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
    jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 },
    data: <ModifyFolderPayloadData>{
      type: TypeFolder.Folders,
      id: folder_id,
      attributes: <ModifyFolderPayloadDataAttributes>{
        name: "Autodesk POCS",
      },
    },
  };
  try {
    const folder: Folder = await dataManagementClient.patchFolder(
      project_id,
      folder_id,
      modifyFolderPayload
    );
    console.log(folder);
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
  
// getFolder();
// getFolderContents();
// getFolderParent();
// getFolderRefs();
// getFolderRelationshipsLinks();
// getFolderRelationshipsRefs();
// getFolderSearch();
// createFolder();
// createFolderRelationshipsRef(); 
// patchFolder();


//Versions

async function getVersion() {
  try {
    const versionDetails: Version = await dataManagementClient.getVersion(
      project_id,
      version_id
    );
    const versionData: VersionData = versionDetails.data;
    const versionId: string = versionData.id;
    const versionType: string = versionData.type;

    console.log(versionDetails);
    console.log(versionDetails.data.relationships.item);
    console.log(versionData.attributes);
    console.log(versionData.relationships.storage);
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
    console.log(downloadFormats);
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
      { filterType: [FilterTypeVersion.Versions] }
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
        { filterType: [FilterTypeVersion.Versions] }
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
      jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 },
      data: <VersionPayloadData>{
        type: TypeVersion.Versions,
        attributes: <VersionPayloadDataAttributes>{
          name: "e833229e-039e-441e-a8e1-92eb29b7872a.rvt",
          displayName: "temp file",
          extension: <VersionPayloadDataAttributesExtension>{
            type: "versions:autodesk.bim360:File",
            version: "1.0",
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
              id: "urn:adsk.objects:os.object:wip.dm.prod/e833229e-039e-441e-a8e1-92eb29b7872a.rvt",
            },
          },
        },
      },
    };
    const createdVersion: CreatedVersion =
      await dataManagementClient.createVersion(project_id, versionPayload);
    console.log(createdVersion);
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
      jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 },
      data: <RelationshipRefsPayloadData>{
        type: TypeEntity.Versions,
        id: version_id,
        meta: <RelationshipRefsPayloadDataMeta>{
          extension: <BaseAttributesExtensionObjectWithoutSchemaLink>{
            type: "auxiliary:autodesk.core:Attachment",
            version: "1.0",
          },
        },
      },
    };
    const response: Version =
      await dataManagementClient.createVersionRelationshipsRef(
        project_id,
        version_id,
        relationshipRefsPayload
      );
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
}

async function patchVersion() {
  try {
    let modifyVersionPayload: ModifyVersionPayload = {
      jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 },
      data: <ModifyVersionPayloadData>{
        type: TypeVersion.Versions,
        id: version_id,
        attributes: <ModifyVersionPayloadDataAttributes>{
          name: "myversion.rvt",
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
// getVersionDownloads(); 
// getVersionItem();
// getVersionRefs();
// getVersionRelationshipsLinks();
// getVersionRelationshipsRefs();
// createVersion();
// createVersionRelationshipsRef();
// patchVersion();


//#region  Items

/**
 * Returns the details of the given item.
 */
async function getItem() {
  try {
    const item: Item = await dataManagementClient.getItem(project_id, item_id);
    console.log(item.data.attributes.displayName);

  } catch (err) {
    console.error(err.message);
  }
}

/**
 * Returns the folder that contains the given item.
 */
async function getItemParentFolder() {
  try {
    const folder: Folder = await dataManagementClient.getItemParentFolder(project_id, item_id);
    console.log(folder.data.attributes.displayName);
  } catch (err) {
    console.error(err.message);
  }
}

/**
 * Returns the resources that have a custom relationship with the given item.
 */
async function getItemRefs() {
  try {
    const refs: Refs = await dataManagementClient.getItemRefs(project_id, process.env.itemRefs,
      // {
      //     filterType: [FilterType.Items],
      //     filterId: ["urn:adsk.wipprod:dm.lineage:iw780Ri_RI2LcSh_0u_vsA"],
      //     filterExtensionType: ["extensionType"]
      // }
    );
    console.log(refs);
  } catch (err) {
    console.error(err.message);
  }
}

/** 
 * Returns a collection of links for the given item.
*/
async function getItemRelationshipsLinks() {
  try {
    const relationshipLinks: RelationshipLinks = await dataManagementClient.getItemRelationshipsLinks(project_id, item_id);
    console.log(relationshipLinks);
  } catch (err) {
    console.error(err.message);
  }
}

/**
 * Returns the custom relationships that are associated with the given item.
 */
async function getItemRelationshipsRefs() {
  try {
    const relationshipRefs: RelationshipRefs =
      await dataManagementClient.getItemRelationshipsRefs(project_id, process.env.itemRefs,
        {
          //    filterType: [FilterType.Items],
          //   filterId: ["urn:adsk.wipprod:dm.lineage:iw780Ri_RI2LcSh_0u_vsA"],
          //   filterRefType: FilterRefType.Xrefs,
          // filterDirection: FilterDirection.From,
          // filterExtensionType: ["extensionType"],         
        }
      );
    console.log(relationshipRefs);

  } catch (err) {
    console.error(err.message);
  }
}


/**
 * Get the tip of an item.
*/
async function getItemTip() {
  try {
    const itemTip: ItemTip = await dataManagementClient.getItemTip(project_id, item_id);
    console.log(itemTip.data.attributes.displayName);
  } catch (err) {
    console.error(err.message);
  }
}

/**
 * Get all versions of an item.
 */
async function getItemVersions() {
  try {
    const versions: Versions = await dataManagementClient.getItemVersions(project_id, item_id,
      // {
      //   filterExtensionType: ["extensionType"],
      //   filterVersionNumber: [1],
      //  filterId: ["urn:adsk.wipprod:fs.file:vf.J11M6DFh1qSa270p1m2sN1zw?version=1"]
      // }
    );
    console.log(versions.data[0].id);

  } catch (err) {
    console.error(err.message);
  }
}

/**
 * Creates a new Item.
 */
async function createItem() {
  try {
    let itemPayload: ItemPayload = {
      jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 },
      data: <ItemPayloadData>{
        type: TypeItem.Items,
        attributes: <ItemPayloadDataAttributes>{
          displayName: "TestDrawing.dwg",
          extension: <ItemPayloadDataAttributesExtension>{
            type: "items:autodesk.core:File",
            version: "1.0",
          },
        },
        relationships: <ItemPayloadDataRelationships>{
          tip: <ItemPayloadDataRelationshipsTip>{
            data: <ItemPayloadDataRelationshipsTipData>{
              type: TypeVersion.Versions,
              id: "1",
            },
          },
          parent: <ItemPayloadDataRelationshipsParent>{
            data: <ItemPayloadDataRelationshipsParentData>{
              type: TypeFolder.Folders, // need to change to enum
              id: process.env.folderId,
            },
          },
        },
      },
      included: [
        {
          type: TypeVersion.Versions,
          id: "1",
          attributes: <ItemPayloadIncludedAttributes>{
            name: "TestDrawing.dwg",
            extension: <ItemPayloadIncludedAttributesExtension>{
              type: "items:autodesk.core:File",
              version: '1.0'
            },
          },
        },
      ],
    };
    const createdItem: CreatedItem = await dataManagementClient.createItem(project_id, itemPayload);
    console.log(createdItem);
  } catch (err) {
    console.error(err.message);
  }
}

/**
 * Creates a custom relationship between an item and another resource. 
 */
async function createItemRelationshipsRef() {
  try {
    let relationshipRefsPayload: RelationshipRefsPayload = {
      jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 },
      data: <RelationshipRefsPayloadData>{
        type: TypeVersion.Versions,
        id: process.env.versionId,
        meta: <RelationshipRefsPayloadDataMeta>{
          extension: <BaseAttributesExtensionObjectWithoutSchemaLink>{
            type: "auxiliary:autodesk.core:Attachment",
            version: "1.0",
          },
        },
      },
    };
    const response: ApiResponse = await dataManagementClient.createItemRelationshipsRef(project_id, item_id, relationshipRefsPayload);
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
}

/**
 * Update an existing Item
 */
async function patchItem() {
  try {
    let modifyItemPayload: ModifyItemPayload = {
      jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 },
      data: <ModifyItemPayloadData>{
        type: TypeItem.Items,
        id: process.env.patchItemID,
        attributes: <ModifyItemPayloadDataAttributes>{
          displayName: "<New_Name>",
        },
      },
    };
    const updatedItem: Item = await dataManagementClient.patchItem(project_id, process.env.patchItemID, modifyItemPayload);
    console.log(updatedItem.data.attributes.displayName);
  }
  catch (err) {
    console.error(err.message);
  }
}


// getItem();
// getItemParentFolder();
// getItemTip();
// getItemVersions(); 
// getItemRefs();
// getItemRelationshipsLinks();
// getItemRelationshipsRefs();
// createItem();
// createItemRelationshipsRef();
// patchItem(); 

//#endregion Items


//#region Commands

/**
 * Check if the user has the required permissions to perform the specified actions on the specified resources.
 */
async function executeCheckPermissionCommand() {
  try {
    let checkPermissionPayload: CheckPermissionPayload = {
      type: TypeCommands.Commands,
      attributes: <CheckPermissionPayloadAttributes>{
        extension: <CheckPermissionPayloadAttributesExtension>{
          type: TypeCommandtypeCheckPermission.CommandsautodeskCoreCheckPermission,
          version: "1.0.0",
          data: <CheckPermissionPayloadAttributesExtensionData>{
            requiredActions: ["view", "download"],
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
    const checkPermission: CheckPermission = await dataManagementClient.executeCheckPermissionCommand(project_id, checkPermissionPayload);
    console.log(checkPermission);
  } catch (err) {
    console.error(err.message);
  }
}

/*
  * Retrieves the custom relationships between specified versions of items and other resources.
*/
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
    const listRefs: ListRefs = await dataManagementClient.executeListRefsCommand(project_id, listRefsPayload);
    console.log(listRefs);
  } catch (err) {
    console.error(err.message);
  }
}

/*
  * Retrieves metadata for up to 50 specified items.
*/
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
    const listItems: ListItems = await dataManagementClient.executeListItemsCommand(project_id, listItemsPayload);
    console.log(listItems);
  } catch (err) {
    console.error(err.message);
  }
}

/*
  * Publishes the latest version of a Collaboration for Revit (C4R) model to BIM 360 Docs. 
*/
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
    const publishModel: PublishModel = await dataManagementClient.executePublishModelCommand(project_id, publishModelPayload);
    console.log(publishModel.attributes.extension.type);
  } catch (err) {
    console.error(err.message);
  }
}

/*
  * Publishes the latest version of a Collaboration for Revit (C4R) model without the links it contains to BIM 360 Docs. 
*/
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
      relationships: <PublishWithoutLinksPayloadRelationships>{
        resources: <PublishWithoutLinksPayloadRelationshipsResources>{
          data: [
            {
              type: TypeEntity.Items,
              id: item_id,
            },
          ],
        },
      },
    };
    const publishWithoutLinks: PublishWithoutLinks = await dataManagementClient.executePublishWithoutLinksCommand(project_id, publishWithoutLinksPayload);
    console.log(publishWithoutLinks);
  } catch (err) {
    console.error(err.message);
  }
}

/*
  * Verifies whether a Collaboration for Revit (C4R) model needs to be published to BIM 360 Docs.
*/
async function executeGetPublishModelJobCommand() {
  try {
    let getPublishModelJobPayload: PublishModelJobPayload = {
      type: TypeCommands.Commands,
      attributes: <PublishModelJobPayloadAttributes>{
        extension: <PublishModelJobPayloadAttributesExtension>{
          type: TypeCommandtypeGetPublishModelJob.CommandsautodeskBim360C4RModelGetPublishJob,
          version: "1.0.0",
        },
      },
      relationships: <PublishModelJobPayloadRelationships>{
        resources: <PublishModelJobPayloadRelationshipsResources>{
          data: [
            {
              type: TypeEntity.Items,
              id: item_id,
            },
          ],
        },
      },
    };
    const getPublishModelJob: PublishModel = await dataManagementClient.executeGetPublishModelJobCommand(project_id, getPublishModelJobPayload);
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


//Projects
async function projectsData() {
  const getHubProjects: Projects = await dataManagementClient.getHubProjects(hub_id);
  console.log(getHubProjects);
}
// projectsData() 

//Returns a project for a given project_id
async function projectData() {
  const  getProject:Project = await dataManagementClient.getProject(hub_id, project_id);
 console.log(getProject);
}


// Returns the details of the highest level folders the user has access to for a given project
async function topFolderDetail(){

  const projectTopFolders: TopFolders = await dataManagementClient.getProjectTopFolders(hub_id, project_id,{excludeDeleted:true});
  console.log(projectTopFolders);
}

async function getHubProjects(){

  const hubProjects:Projects = await dataManagementClient.getHubProjects(hub_id,{filterId:["<id>"]});
  console.log(hubProjects);
  
}

async function getDownloadJob(){

  const downloadJob:Job = await dataManagementClient.getDownloadJob(project_id,"<job_id>");
  console.log(downloadJob);
  
}

async function getDownload(){

  const download:Download = await dataManagementClient.getDownload(project_id,download_id);
  console.log(download);
  
}
async function createStorage(){
   const createStorage:StoragePayload={
          jsonapi:{
              version:JsonApiVersionValue._10
          },
          data:{
              type:TypeObject.Objects,
              attributes:{
                  name:"drawing.dwg"
              },
              relationships:{
                  target:{
                      data:{
                          type:TypeFolderItemsForStorage.Items,
                          id:download_id
                      }
                  }
              }
          }
      }

  const storage:Storage = await dataManagementClient.createStorage(project_id,createStorage);
  console.log(storage);
  
}

async function createDownload(){
  const downloadPayload : DownloadPayload ={
  jsonapi:{
      version:JsonApiVersionValue._10
  },
  data:{
      type:TypeDownloads.Downloads,
      attributes:{
          format:{
              fileType:"rvt"
          }
      },
      relationships:{
          source:{
              data:{
                  type:TypeVersion.Versions,
                  id:"<id>"
              }
          }
      }
  }
}
const createDownload:CreatedDownload = await dataManagementClient.createDownload(project_id,downloadPayload)

 console.log(createDownload);
 
}
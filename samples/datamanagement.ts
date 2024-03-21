import { SdkManager, SdkManagerBuilder } from  "@aps_sdk/autodesk-sdkmanager"
import {DataManagementClient, Folder, FolderContents, FolderContentsData, FolderData, FolderDataAttributes, FolderDataAttributesExtension, FolderDataAttributesExtensionData, FolderPayload, FolderPayloadData, FolderPayloadDataAttributes, FolderPayloadDataRelationships, FolderPayloadDataRelationshipsParent, FolderPayloadDataRelationshipsParentData, Hub, HubData, HubDataAttributes, HubDataAttributesExtension, Hubs, HubsData, HubsDataAttributes, HubsDataAttributesExtension, HubsLinksSelf, Item, ItemPayload, ItemPayloadIncluded, ItemPayloadIncludedAttributes, ModifyFolderPayloadJsonapi, Project, Projects, ProjectsData, ProjectsDataAttributes, ProjectsDataAttributesExtension, RelationshipRefsPayloadDataMetaExtension,StorageDataRelationshipsTarget, StorageDataRelationshipsTargetData, TopFolders, TopFoldersData, Type, VersionDetails, VersionNumber, VersionPayload} from "@aps_sdk/data-management";

const token: string = "<token>";

let hub_id : string="<hubId>";
let project_id :string="<projectId>";
let folder_id:string="<folderId>>";

const sdkmanager: SdkManager = SdkManagerBuilder
    .create() 
    .build();

let _dataManagementApi :DataManagementClient = new DataManagementClient(sdkmanager);

//HUBS
// Returns a collectionof accessible hubs for this member.
async function hubsData() {
    const getHubs: Hubs = await _dataManagementApi.getHubs(token);
    getHubs.data.forEach(current =>{
        const HubsId :string=current.id;
        const hubsType :string=current.type;
        console.log(HubsId)

        // Attributes
        const hubsAttributes: HubsDataAttributes = current.attributes;
        const hubsAttributeName: string = hubsAttributes.name;
        const hubsAttributesRegion: string = hubsAttributes.region;

        const hubsDataAttributesExtension: HubsDataAttributesExtension = hubsAttributes.extension;
        const hubsDataAttributesExtensionType: string = hubsDataAttributesExtension.type;
        const hubsDataAttributesExtensionVersion: string = hubsDataAttributesExtension.version;

        const hubsAttributesExtensionData: any = hubsDataAttributesExtension.data;

        const hubsAttributesExtensionSchema: HubsLinksSelf = hubsDataAttributesExtension.schema;
        const hubsAttributesExtensionSchemaHref: string = hubsAttributesExtensionSchema.href;
    })
}
// hubsData();

//Hub
// Returns data on a specific hub_id.
async function hubdata() {
    const getHub:Hub = await _dataManagementApi.getHub(token, hub_id);
    console.log(getHub)
    const getHubData:HubData = getHub.data;
    const hubsType :string= getHubData.type;
    const hubsId  :string= getHubData.id;

    // Atrributes
    const hubAttributes:HubDataAttributes = getHubData.attributes;
    const hubAttributeName:string = hubAttributes.name;
    const hubAttributesRegion :string = hubAttributes.region;

    const hubAttributesExtension:HubDataAttributesExtension  = hubAttributes.extension;
    const hubAttributesExtensionType:string = hubAttributesExtension.type;
    const hubAttributesExtensionVersion:string = hubAttributesExtension.version;

    const hubAttributesExtensionData:Object= hubAttributesExtension.data;

    const hubAttributesExtensionSchema: HubsLinksSelf  = hubAttributesExtension.schema;
    const hubAttributesExtensionSchemaHref:string = hubAttributesExtensionSchema.href;
 
}
// hubdata();

//Projects
async function projectsData() {
    const getHubProjects: Projects = await _dataManagementApi.getHubProjects(token, hub_id);
    console.log(getHubProjects)
    getHubProjects.data.forEach(currentProject => {
        // Getting type and ID for the current project.
        const hubProjectsType: string = currentProject.type;
        const hubProjectsId: string = currentProject.id;

        // Accessing project attributes.
        const hubProjectsAttributes: ProjectsDataAttributes = currentProject.attributes;
        const hubProjectsAttributesName: string = hubProjectsAttributes.name;

        // Accessing and iterating through project scopes.
        const hubProjectsAttributesScopes: Object[] = hubProjectsAttributes.scopes;
        for (const scope of hubProjectsAttributesScopes) {
            console.log(scope);
        }
        const hubProjectsAttributesExtension: ProjectsDataAttributesExtension = hubProjectsAttributes.extension;
        const hubProjectsAttributesExtensionType: string = hubProjectsAttributesExtension.type;
        const hubProjectsAttributesExtensionVersion: string = hubProjectsAttributesExtension.version;

        const hubProjectsAttributesExtensionData: object = hubProjectsAttributesExtension.data;

        const hubProjectsAttributesExtensionSchema: HubsLinksSelf = hubProjectsAttributesExtension.schema;
        const hubProjectsAttributesExtensionSchemaHref: string = hubProjectsAttributesExtensionSchema.href;
    
    });
}
// projectsData() 

//Project
//Returns a project for a given project_id
async function projectData() {
    const  getHubProject:Project = await _dataManagementApi.getProject(token, hub_id, project_id);
    const getHubProjectData :ProjectsData = getHubProject.data;
    const  getHubProjectDataType :string = getHubProjectData.type;
    const getHubProjectDataId :string = getHubProjectData.id;

    // Attributes
    const hubProjectAttributes: ProjectsDataAttributes = getHubProjectData.attributes;
    const hubProjectAttributesName: string = hubProjectAttributes.name;
    const hubProjectAttributesScopes: object[] = hubProjectAttributes.scopes;
    for (const scope of hubProjectAttributesScopes) {
        console.log(scope);
    }
    
    const hubProjectAttributesExtension: ProjectsDataAttributesExtension = hubProjectAttributes.extension;
    const hubProjectAttributesExtensionType: string = hubProjectAttributesExtension.type;
    const hubProjectAttributesExtensionVersion: string = hubProjectAttributesExtension.version;
    const hubProjectAttributesExtensionData: object = hubProjectAttributesExtension.data;
    
    const hubProjectAttributesExtensionSchema: HubsLinksSelf = hubProjectAttributesExtension.schema;
    const hubProjectAttributesExtensionSchemaHref: string = hubProjectAttributesExtensionSchema.href;
}
// projectData()

// Returns the details of the highest level folders the user has access to for a given project
async function topFolderDetail(){
    const projectTopFolders: TopFolders = await _dataManagementApi.getProjectTopFolders(token, hub_id, project_id, {excludeDeleted: true});
    console.log(projectTopFolders)
    const projectTopFoldersJsonapiVersion: string = projectTopFolders.jsonapi.version;
    const projectTopFoldersLinksSelfHref: string = projectTopFolders.links.self.href;
    const topFoldersData: TopFoldersData[] = Array.from(projectTopFolders.data);
    for (const topFolder of topFoldersData) {
        const topFolderDataAttributesName: string = topFolder.attributes.name;
        const topFolderDataAttributesDisplayName: string = topFolder.attributes.displayName;

        const topFolderDataAttributesExtensionType: string = topFolder.attributes.extension.type;
        const topFolderDataAttributesExtensionVersion: string = topFolder.attributes.extension.version;
        const topFolderDataAttributesExtensionSchemaHref: string = topFolder.attributes.extension.schema.href;
    }    
}
// topFolderDetail()

// Folders
// Describe the folder to be created
async function createFolder() {
    
    let createFolder: FolderPayload = {
        jsonapi:<ModifyFolderPayloadJsonapi>{version:VersionNumber._10},
        data:<FolderPayloadData>
        {
            type:Type.Folders,
            attributes:<FolderPayloadDataAttributes>
            {
                name:"Test_folder",
                extension:<RelationshipRefsPayloadDataMetaExtension>
                {
                    type:Type.FoldersautodeskCoreFolder,
                    version:VersionNumber._10
                }
            },
            relationships: <FolderPayloadDataRelationships>
            {
                parent:<FolderPayloadDataRelationshipsParent>
                {
                    data:<FolderPayloadDataRelationshipsParentData>
                    {
                        type:Type.Folders, id:folder_id
                    }
                }
            }
        }   
    };
    const folder:Folder  = await _dataManagementApi.createFolder(token, project_id, createFolder);
    console.log(folder)
    let createdFolderData: FolderData = createFolder.data;
    let createdFolderDataType: string = createdFolderData.type;
    let createdFolderDataId: string = createdFolderData.id;
    let createdFolderDataAttributes: FolderDataAttributes = createdFolderData.attributes;
    let createdFolderDataAttributesName: string = createdFolderDataAttributes.name;
    let createdFolderDataAttributesDisplayName: string = createdFolderDataAttributes.displayName;
    let createdFolderDataAttributesCreateTime: string = createdFolderDataAttributes.createTime;
    let createdFolderDataAttributesCreateUserId: string = createdFolderDataAttributes.createUserId;
    let createdFolderDataAttributesCreateUserName: string = createdFolderDataAttributes.createUserName;
    let createdFolderDataAttributesLastModifiedTime: string = createdFolderDataAttributes.lastModifiedTime;
    let createdFolderDataAttributesLastModifiedUserId: string = createdFolderDataAttributes.lastModifiedUserId;
    let createdFolderDataAttributesLastModifiedUserName: string = createdFolderDataAttributes.lastModifiedUserName;
    let createdFolderDataAttributesLastModifiedTimeRollup: string =createdFolderDataAttributes.lastModifiedTimeRollup;
    let createdFolderDataAttributesObjectCount: number | undefined = createdFolderDataAttributes.objectCount;
    let createdFolderDataAttributesHidden: boolean | undefined = createdFolderDataAttributes.hidden;

    let createdFolderDataAttributesExtension: FolderDataAttributesExtension = createdFolderDataAttributes.extension;
    let createdFolderDataAttributesExtensionType: string = createdFolderDataAttributesExtension.type;
    let createdFolderDataAttributesExtensionVersion: string = createdFolderDataAttributesExtension.version;

    let createdFolderDataAttributesExtensionSchema: HubsLinksSelf = createdFolderDataAttributesExtension.schema;
    let createdFolderDataAttributesExtensionSchemaHref: string = createdFolderDataAttributesExtensionSchema.href;

    let createdFolderDataAttributesExtensionData: FolderDataAttributesExtensionData = createdFolderDataAttributesExtension.data;
    let createdFolderDataAttributesExtensionDataAllowedTypes: Object[] = createdFolderDataAttributesExtensionData.allowedTypes;
    createdFolderDataAttributesExtensionDataAllowedTypes.forEach((allowedType) => {
        console.log(allowedType);
    });

    let createdFolderDataAttributesExtensionDataVisibleTypes: Object[] = createdFolderDataAttributesExtensionData.visibleTypes;
    createdFolderDataAttributesExtensionDataVisibleTypes.forEach((visibleType) => {
        console.log(visibleType);
    });

    let createdFolderDataAttributesExtensionDataNamingStandardIds: Object[] = createdFolderDataAttributesExtensionData.namingStandardIds;
    createdFolderDataAttributesExtensionDataNamingStandardIds.forEach((namingStandardId) => {
        console.log(namingStandardId);
    });

}
// createFolder();

//Folder
async function folderData() {
    const folderContents: FolderContents = await _dataManagementApi.getFolderContents(token, project_id, folder_id);
    console.log(folderContents.data)
    const folderContentsJsonapiVersion: string = folderContents.jsonapi?.version;

    const folderContentsLinksSelfHref: string = folderContents.links?.self?.href;
    const folderContentsLinksFirstHref: string = folderContents.links?.first?.href;
    const folderContentsLinksPrevHref: string = folderContents.links?.prev?.href;
    const folderContentsLinksNextHref: string = folderContents.links?.next?.href;

    folderContents.data.forEach(contentData => {
        const contentDataType: string = contentData.type;
        const contentDataId: string = contentData.id;

        const contentDataAttributesName: string = contentData.attributes.name;
        const contentDataAttributesDisplayName: string = contentData.attributes.displayName;

        const contentDataAttributesExtensionType: string = contentData.attributes.extension.type;
        const contentDataAttributesExtensionVersion: string = contentData.attributes.extension.version;
    });    
}
folderData();

//Item
async function createItem() {
    

    const itemPayload: ItemPayload = {
        jsonapi: {
            version: VersionNumber._10,
        },
        data: {
            type: Type.Items,
            attributes: {
                displayName: "drawing3.dwg",
                extension: {
                    type: Type.ItemsautodeskCoreFile,
                    version: VersionNumber._10,
                },
            },
            relationships: {
                tip: {
                    data: {
                        type: Type.Versions,
                        id: "1",
                    },
                },
                parent: {
                    data: {
                        type: Type.Folders,
                        id: "urn:adsk.wipprod:fs.folder:co.zk8KLsPPTkiK1Kub-9PPHg",
                    },
                },
            },
        },
        included:<ItemPayloadIncluded[]>[{
            type:Type.Versions,
            id:"1",
            attributes:{
                name:"drawing3.dwg",
                extension:{
                    type : Type.VersionsautodeskCoreFile,
                    version:VersionNumber._10,
                }
            }
        }
        ] 
    };
    const createdItem: Item = await _dataManagementApi.createItem(token, project_id, itemPayload);

    const createdItemJsonapiVersion: string = createdItem.jsonapi.version;
    const createdItemLinks: string = createdItem.links.self.href;
    const createdItemDataType: string = createdItem.data.type;
    const createdItemDataId: string = createdItem.data.id;
    const createdItemDataAttributesDisplayName: string = createdItem.data.attributes.displayName;
    const createdItemDataAttributesCreateTime: string = createdItem.data.attributes.createTime;
    const createdItemDataAttributesCreateUserId: string = createdItem.data.attributes.createUserId;
    const createdItemDataAttributesCreateUserName: string = createdItem.data.attributes.createUserName;
    const createdItemDataAttributesLastModifiedTime: string = createdItem.data.attributes.lastModifiedTime;
    const createdItemDataAttributesLastModifiedUserId: string = createdItem.data.attributes.lastModifiedUserId;
    const createdItemDataAttributesLastModifiedUserName: string = createdItem.data.attributes.lastModifiedUserName;
    const createdItemDataAttributesHidden: boolean | null = createdItem.data.attributes.hidden;
    const createdItemDataAttributesReserved: boolean | null = createdItem.data.attributes.reserved;
    const createdItemDataAttributesExtensionType: string = createdItem.data.attributes.extension.type;
    const createdItemDataAttributesExtensionVersion: string = createdItem.data.attributes.extension.version;

}    
// createItem();

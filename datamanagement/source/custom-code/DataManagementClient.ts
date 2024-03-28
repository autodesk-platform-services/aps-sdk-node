import { ApsServiceRequestConfig, SdkManager } from "@aps_sdk/autodesk-sdkmanager"; 
import {CommandsApi,HubsApi,ItemsApi,ProjectsApi,FoldersApi,VersionsApi, GetFolderRelationshipsRefsFilterRefTypeEnum, GetFolderRelationshipsRefsFilterDirectionEnum, GetItemRelationshipsRefsFilterRefTypeEnum, GetItemRelationshipsRefsFilterDirectionEnum, GetVersionRelationshipsRefsFilterRefTypeEnum, GetVersionRelationshipsRefsFilterDirectionEnum} from "../api";
import { Command, CommandPayload, Download, DownloadDetails, DownloadFormats, DownloadPayload, Downloads, Folder, FolderContents, FolderPayload, FolderRefs, Hub, Hubs, Item, ItemPayload, ItemTip, Job, ModifyFolderPayload, ModifyItemPayload, ModifyVersionPayload, Project, Projects, Refs, RelationshipLinks, RelationshipRefs, RelationshipRefsPayload, Search, StoragePayload, TopFolders, Version, VersionDetails, VersionPayload, Versions} from "../model";


export class DataManagementClient {
    public commandsApi: CommandsApi;
    public foldersApi: FoldersApi;
    public hubsApi: HubsApi;
    public itemsApi: ItemsApi;
    public projectsApi: ProjectsApi;
    public versionsApi: VersionsApi;

    constructor(sdkManager: SdkManager) {
        this.commandsApi = new CommandsApi(sdkManager);
        this.foldersApi = new FoldersApi(sdkManager);
        this.hubsApi = new HubsApi(sdkManager);
        this.itemsApi = new ItemsApi(sdkManager);
        this.projectsApi = new ProjectsApi(sdkManager);
        this.versionsApi = new VersionsApi(sdkManager);
    }



    public async postCommand(accessToken: string, projectId: string, optionalArgs?:{xUserId?: string, commandPayload?: CommandPayload, options?: ApsServiceRequestConfig}): Promise<Command> {
        const response = await this.commandsApi.postCommand(accessToken,projectId, optionalArgs?.xUserId, optionalArgs?.commandPayload, optionalArgs?.options);
        return response.content;
    }

    public async getFolder(accessToken: string, projectId: string, folderId: string, optionalArgs?:{ifModifiedSince?: string, xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Folder> {
        const response = await this.foldersApi.getFolder(accessToken, projectId, folderId, optionalArgs?.ifModifiedSince, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    public async getFolderContents(accessToken: string, projectId: string, folderId: string, optionalArgs?:{xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>, filterLastModifiedTimeRollup?: Array<string>, pageNumber?: number, pageLimit?: number, includeHidden?: boolean, options?: ApsServiceRequestConfig}): Promise<FolderContents> {
        const response = await this.foldersApi.getFolderContents(accessToken, projectId, folderId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.filterLastModifiedTimeRollup, optionalArgs?.pageNumber, optionalArgs?.pageLimit, optionalArgs?.includeHidden, optionalArgs?.options);
        return response.content;
    }
    public async getFolderParent(accessToken: string, projectId: string, folderId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Folder> {
        const response = await this.foldersApi.getFolderParent(accessToken, projectId, folderId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    public async getFolderRefs(accessToken: string, projectId: string, folderId: string, optionalArgs?:{xUserId?: string, filterType?: string, filterId?: string, filterExtensionType?: string, options?: ApsServiceRequestConfig}): Promise<FolderRefs> {
        const response = await this.foldersApi.getFolderRefs(accessToken, projectId, folderId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }
    public async getFolderRelationshipsLinks(accessToken: string, projectId: string, folderId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<RelationshipLinks> {
        const response = await this.foldersApi.getFolderRelationshipsLinks(accessToken, projectId, folderId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    public async getFolderRelationshipsRefs(accessToken: string, folderId: string, projectId: string, optionalArgs?:{xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetFolderRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetFolderRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig}): Promise<RelationshipRefs> {
        const response = await this.foldersApi.getFolderRelationshipsRefs( accessToken, folderId, projectId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterRefType, optionalArgs?.filterDirection, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }
    public async getFolderSearch(accessToken: string, projectId: string, folderId: string, optionalArgs?:{filter?: string, pageNumber?: number, options?: ApsServiceRequestConfig}): Promise<Search> {
        const response = await this.foldersApi.getFolderSearch(accessToken ,projectId, folderId, optionalArgs?.filter, optionalArgs?.pageNumber, optionalArgs?.options);
        return response.content;
    }
    public async patchFolder(accessToken: string, projectId: string, folderId: string, modifyFolderPayload: ModifyFolderPayload, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Folder> {
        const response = await this.foldersApi.patchFolder(accessToken,projectId, folderId, optionalArgs?.xUserId, modifyFolderPayload, optionalArgs.options);
        return response.content;
    }
    public async createFolder(accessToken: string, projectId: string, folderPayload: FolderPayload, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Folder> {
        const response = await this.foldersApi.createFolder( accessToken,projectId, optionalArgs?.xUserId, folderPayload, optionalArgs?.options);
        return response.content;
    }
    public async createFolderRelationshipsRef(accessToken: string, folderId: string, projectId: string, relationshipRefsPayload: RelationshipRefsPayload, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Response> {
        const response = await this.foldersApi.createFolderRelationshipsRef(accessToken,folderId, projectId, optionalArgs?.xUserId, relationshipRefsPayload, optionalArgs?.options);
        return response.content;
    }

    public async getHub(accessToken: string, hubId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Hub> {
        const response = await this.hubsApi.getHub(accessToken, hubId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    public async getHubs(accessToken: string, optionalArgs?:{xUserId?: string, filterId?: Array<string>, filterName?: string, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig}): Promise<Hubs> {
        const response = await this.hubsApi.getHubs(accessToken, optionalArgs?.xUserId, optionalArgs?.filterId, optionalArgs?.filterName, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }

    public async getItem(accessToken: string, projectId: string, itemId: string, optionalArgs?:{xUserId?: string, includePathInProject?: boolean, options?: ApsServiceRequestConfig}): Promise<Item> {
        const response = await this.itemsApi.getItem(accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.includePathInProject, optionalArgs?.options);
        return response.content;
    }
    public async getItemParentFolder(accessToken: string, projectId: string, itemId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Folder> {
        const response = await this.itemsApi.getItemParentFolder(accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    public async getItemRefs(accessToken: string, projectId: string, itemId: string, optionalArgs?:{xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig}): Promise<Refs> {
        const response = await this.itemsApi.getItemRefs(accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }

    public async getItemRelationshipsLinks(accessToken: string, projectId: string, itemId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<RelationshipLinks> {
        const response = await this.itemsApi.getItemRelationshipsLinks(accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    public async getItemRelationshipsRefs(accessToken: string, projectId: string, itemId: string, optionalArgs?:{xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetItemRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetItemRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig}): Promise<RelationshipRefs> {
        const response = await this.itemsApi.getItemRelationshipsRefs(accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterRefType, optionalArgs?.filterDirection, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }

    public async getItemTip(accessToken: string, projectId: string, itemId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<ItemTip> {
        const response = await this.itemsApi.getItemTip(accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    public async getItemVersions(accessToken: string, projectId: string, itemId: string, optionalArgs?:{xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, filterVersionNumber?: Array<number>, pageNumber?: number, pageLimit?: number, options?: ApsServiceRequestConfig}): Promise<Versions> {
        const response = await this.itemsApi.getItemVersions(accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.filterVersionNumber, optionalArgs?.pageNumber, optionalArgs?.pageLimit, optionalArgs?.options);
        return response.content;
    }

    public async patchItem(accessToken: string, projectId: string, itemId: string, modifyItemPayload: ModifyItemPayload, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Item> {
        const response = await this.itemsApi.patchItem(accessToken, projectId, itemId, optionalArgs?.xUserId, modifyItemPayload, optionalArgs?.options);
        return response.content;
    }

    public async createItem(accessToken: string, projectId: string, itemPayload: ItemPayload, optionalArgs?:{xUserId?: string, copyFrom?: string, options?: ApsServiceRequestConfig}): Promise<Item> {
        const response = await this.itemsApi.createItem(accessToken, projectId, optionalArgs?.xUserId, optionalArgs?.copyFrom, itemPayload, optionalArgs?.options);
        return response.content;
    }

    public async createItemRelationshipsRef(accessToken: string, projectId: string, itemId: string, relationshipRefsPayload: RelationshipRefsPayload, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Response> {
        const response = await this.itemsApi.createItemRelationshipsRef(accessToken, projectId, itemId, optionalArgs?.xUserId, relationshipRefsPayload, optionalArgs?.options);
        return response.content;
    }
    public async getDownload(accessToken: string, projectId: string, downloadId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Download> {
        const response = await this.projectsApi.getDownload(accessToken, projectId, downloadId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    public async getDownloadJob(accessToken: string, projectId: string, jobId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Job> {
        const response = await this.projectsApi.getDownloadJob(accessToken, projectId, jobId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    public async createDownload(accessToken: string, projectId: string, downloadPayload: DownloadPayload, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<DownloadDetails> {
        const response = await this.projectsApi.createDownload(accessToken, projectId, optionalArgs?.xUserId, downloadPayload, optionalArgs?.options);
        return response.content;
    }
    public async getHubProjects(accessToken: string, hubId: string, optionalArgs?:{xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, pageNumber?: number, pageLimit?: number, options?: ApsServiceRequestConfig}): Promise<Projects> {
        const response = await this.projectsApi.getHubProjects(accessToken, hubId, optionalArgs?.xUserId, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.pageNumber, optionalArgs?.pageLimit, optionalArgs?.options);
        return response.content;
    }
    public async getProject(accessToken: string, hubId: string, projectId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Project> {
        const response = await this.projectsApi.getProject(accessToken, hubId, projectId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    public async getProjectHub(accessToken: string, hubId: string, projectId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Hub> {
        const response = await this.projectsApi.getProjectHub(accessToken, hubId, projectId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    public async getProjectTopFolders(accessToken: string, hubId: string, projectId: string, optionalArgs?:{xUserId?: string, excludeDeleted?: boolean, projectFilesOnly?: boolean, options?: ApsServiceRequestConfig}): Promise<TopFolders> {
        const response = await this.projectsApi.getProjectTopFolders(accessToken, hubId, projectId, optionalArgs?.xUserId, optionalArgs?.excludeDeleted, optionalArgs?.projectFilesOnly, optionalArgs?.options);
        return response.content;
    }
    public async createStorage(accessToken: string, projectId: string, storagePayload: StoragePayload, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Storage> {
        const response = await this.projectsApi.createStorage(accessToken, projectId, optionalArgs?.xUserId, storagePayload, optionalArgs?.options);
        return response.content;
    }
    public async getVersion(accessToken: string, projectId: string, versionId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Version> {
        const response = await this.versionsApi.getVersion(accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    public async getVersionDownloadFormats(accessToken: string, projectId: string, versionId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<DownloadFormats> {
        const response = await this.versionsApi.getVersionDownloadFormats(accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    public async getVersionDownloads(accessToken: string, projectId: string, versionId: string, optionalArgs?:{xUserId?: string, filterFormatFileType?: Array<string>, options?: ApsServiceRequestConfig}): Promise<Downloads> {
        const response = await this.versionsApi.getVersionDownloads(accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.filterFormatFileType, optionalArgs?.options);
        return response.content;
    }
    
    public async getVersionItem(accessToken: string, projectId: string, versionId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<Item> {
        const response = await this.versionsApi.getVersionItem(accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    
    public async getVersionRefs(accessToken: string, projectId: string, versionId: string, optionalArgs?:{xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig}): Promise<Refs> {
        const response = await this.versionsApi.getVersionRefs(accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }
    
    public async getVersionRelationshipsLinks(accessToken: string, projectId: string, versionId: string, optionalArgs?:{xUserId?: string, options?: ApsServiceRequestConfig}): Promise<RelationshipLinks> {
        const response = await this.versionsApi.getVersionRelationshipsLinks(accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    
    public async getVersionRelationshipsRefs(accessToken: string, projectId: string, versionId: string, optionalArgs?:{xUserId?: string, filterType?: Array<string>, filterId?: Array<string>, filterRefType?: GetVersionRelationshipsRefsFilterRefTypeEnum, filterDirection?: GetVersionRelationshipsRefsFilterDirectionEnum, filterExtensionType?: Array<string>, options?: ApsServiceRequestConfig}): Promise<RelationshipRefs> {
        const response = await this.versionsApi.getVersionRelationshipsRefs(accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterRefType, optionalArgs?.filterDirection, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }
    
    public async patchVersion(accessToken: string, projectId: string, versionId: string, modifyVersionPayload: ModifyVersionPayload, optionalArgs?:{options?: ApsServiceRequestConfig}): Promise<Version> {
        const response = await this.versionsApi.patchVersion(accessToken, projectId, versionId, modifyVersionPayload, optionalArgs?.options);
        return response.content;
    }
    
    public async createVersion(accessToken: string, projectId: string, versionPayload: VersionPayload, optionalArgs?:{xUserId?: string, copyFrom?: string, options?: ApsServiceRequestConfig}): Promise<VersionDetails> {
        const response = await this.versionsApi.createVersion(accessToken, projectId, optionalArgs?.xUserId, optionalArgs?.copyFrom, versionPayload, optionalArgs?.options);
        return response.content;
    }
    
    public async createVersionRelationshipsRef(accessToken: string, projectId: string, versionId: string, optionalArgs?:{xUserId?: string, relationshipRefsPayload?: RelationshipRefsPayload, options?: ApsServiceRequestConfig}): Promise<Version> {
        const response = await this.versionsApi.createVersionRelationshipsRef(accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.relationshipRefsPayload, optionalArgs?.options);
        return response.content;
    }
    
    
}

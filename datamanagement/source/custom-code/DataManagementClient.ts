import { SDKManager } from "autodesk-sdkmanager"; 
import {CommandsApi,HubsApi,ItemsApi,ProjectsApi,FoldersApi,VersionsApi, GetFolderRelationshipsRefsFilterRefTypeEnum, GetFolderRelationshipsRefsFilterDirectionEnum, GetItemRelationshipsRefsFilterRefTypeEnum, GetItemRelationshipsRefsFilterDirectionEnum, GetVersionRelationshipsRefsFilterRefTypeEnum, GetVersionRelationshipsRefsFilterDirectionEnum} from "../api";
import { Command, CommandPayload, Download, DownloadDetails, DownloadFormats, DownloadPayload, Downloads, Folder, FolderContents, FolderPayload, FolderRefs, Hub, Hubs, Item, ItemPayload, ItemTip, Job, ModifyFolderPayload, ModifyItemPayload, ModifyVersionPayload, Project, Projects, Refs, RelationshipLinks, RelationshipRefs, RelationshipRefsPayload, Search, StoragePayload, TopFolders, Version, VersionDetails, VersionPayload, Versions} from "../model";


export class DataManagementClient {
    public commandsApi: CommandsApi;
    public foldersApi: FoldersApi;
    public hubsApi: HubsApi;
    public itemsApi: ItemsApi;
    public projectsApi: ProjectsApi;
    public versionsApi: VersionsApi;

    constructor(sdkManager: SDKManager) {
        this.commandsApi = new CommandsApi(sdkManager);
        this.foldersApi = new FoldersApi(sdkManager);
        this.hubsApi = new HubsApi(sdkManager);
        this.itemsApi = new ItemsApi(sdkManager);
        this.projectsApi = new ProjectsApi(sdkManager);
        this.versionsApi = new VersionsApi(sdkManager);
    }



    public async PostCommandAsync(accessToken: string | null = null,projectId: string, xUserId: string | null = null, commandPayload: CommandPayload): Promise<Command> {
        const response = await this.commandsApi.postCommand(accessToken,projectId, xUserId, commandPayload);
        return response.content;
    }

    public async GetFolderAsync(accessToken: string | null = null,projectId: string, folderId: string, ifModifiedSince: string | null = null, xUserId: string | null = null): Promise<Folder> {
        const response = await this.foldersApi.getFolder(projectId, folderId, ifModifiedSince, xUserId);
        return response.content;
    }

    public async GetFolderContentsAsync(accessToken: string | null = null,projectId: string, folderId: string, xUserId: string | null = null, filterType: string[] | null = null, filterId: string[] | null = null, filterExtensionType: string[] | null = null, filterLastModifiedTimeRollup: string[] | null = null, pageNumber: number | null = null, pageLimit: number | null = null, includeHidden: boolean | null = null): Promise<FolderContents> {
        const response = await this.foldersApi.getFolderContents(accessToken,projectId, folderId, xUserId, filterType, filterId, filterExtensionType, filterLastModifiedTimeRollup, pageNumber, pageLimit, includeHidden);
        return response.content;
    }
    public async GetFolderParentAsync(accessToken: string | null = null,projectId: string, folderId: string, xUserId: string | null = null,  throwOnError = true): Promise<Folder> {
        const response = await this.foldersApi.getFolderParent(accessToken, projectId, folderId, xUserId);
        return response.content;
    }
    public async GetFolderRefsAsync( accessToken: string | null = null,projectId: string, folderId: string, xUserId: string | null = null, filterType: string | null = null, filterId: string | null = null, filterExtensionType: string | null = null): Promise<FolderRefs> {
        const response = await this.foldersApi.getFolderRefs(accessToken,projectId, folderId, xUserId, filterType, filterId, filterExtensionType);
        return response.content;
    }
    public async GetFolderRelationshipsLinksAsync(accessToken: string | null = null, projectId: string, folderId: string, xUserId: string | null = null): Promise<RelationshipLinks> {
        const response = await this.foldersApi.getFolderRelationshipsLinks(projectId, folderId, xUserId);
        return response.content;
    }

    public async GetFolderRelationshipsRefsAsync(accessToken: string | null = null, folderId: string, projectId: string, xUserId: string | null = null, filterType: string[] | null = null, filterId: string[] | null = null, filterRefType:GetFolderRelationshipsRefsFilterRefTypeEnum, filterDirection: GetFolderRelationshipsRefsFilterDirectionEnum, filterExtensionType: string[] | null = null): Promise<RelationshipRefs> {
        const response = await this.foldersApi.getFolderRelationshipsRefs( accessToken,folderId, projectId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType);
        return response.content;
    }
    public async GetFolderSearchAsync(accessToken: string | null = null ,projectId: string, folderId: string, filter: string | null = null, pageNumber: number | null = null): Promise<Search> {
        const response = await this.foldersApi.getFolderSearch(accessToken ,projectId, folderId, filter, pageNumber);
        return response.content;
    }
    public async PatchFolderAsync(accessToken: string | null = null,projectId: string, folderId: string, xUserId: string | null = null, modifyFolderPayload: ModifyFolderPayload ): Promise<Folder> {
        const response = await this.foldersApi.patchFolder(accessToken,projectId, folderId, xUserId, modifyFolderPayload);
        return response.content;
    }
    public async CreateFolderAsync(accessToken: string | null = null, projectId: string, xUserId: string | null = null, folderPayload: FolderPayload | null = null): Promise<Folder> {
        const response = await this.foldersApi.createFolder( accessToken,projectId, xUserId, folderPayload);
        return response.content;
    }
    public async CreateFolderRelationshipsRefAsync(accessToken: string | null = null,folderId: string, projectId: string, xUserId: string | null = null,relationshipRefsPayload: RelationshipRefsPayload | null = null): Promise<Response> {
        const response = await this.foldersApi.createFolderRelationshipsRef(accessToken,folderId, projectId, xUserId, relationshipRefsPayload);
        return response.content;
    }
    public async GetHubAsync( accessToken: string | null = null,hubId: string, xUserId: string | null = null,): Promise<Hub> {
        const response = await this.hubsApi.getHub(accessToken,hubId, xUserId);
        return response.content;
    }
    public async GetHubsAsync(accessToken: string | null = null,xUserId: string | null = null, filterId: string[] | null = null, filterName: string | null = null, filterExtensionType: string[] | null = null,): Promise<Hubs> {
        const response = await this.hubsApi.getHubs(accessToken,xUserId, filterId, filterName, filterExtensionType);
        return response.content;
    }
    public async GetItemAsync(accessToken: string | null = null,projectId: string, itemId: string, xUserId: string | null = null, includePathInProject: boolean | null = null): Promise<Item> {
        const response = await this.itemsApi.getItem(accessToken,projectId, itemId, xUserId, includePathInProject);
        return response.content;
    }
    public async GetItemParentFolderAsync( accessToken: string | null = null,projectId: string, itemId: string, xUserId: string | null = null): Promise<Folder> {
        const response = await this.itemsApi.getItemParentFolder(accessToken,projectId, itemId, xUserId);
        return response.content;
    }

    public async GetItemRefsAsync( accessToken: string | null = null,projectId: string, itemId: string, xUserId: string | null = null, filterType: string[] | null = null, filterId: string[] | null = null, filterExtensionType: string[] | null = null): Promise<Refs> {
        const response = await this.itemsApi.getItemRefs(accessToken,projectId, itemId, xUserId, filterType, filterId, filterExtensionType);
        return response.content;
    }

    public async GetItemRelationshipsLinksAsync( accessToken: string | null = null,projectId: string, itemId: string, xUserId: string | null = null): Promise<RelationshipLinks> {
        const response = await this.itemsApi.getItemRelationshipsLinks(accessToken,projectId, itemId, xUserId);
        return response.content;
    }

    public async GetItemRelationshipsRefsAsync(accessToken: string | null = null,projectId: string, itemId: string, xUserId: string | null = null, filterType: string[] | null = null, filterId: string[] | null = null, filterRefType: GetItemRelationshipsRefsFilterRefTypeEnum | null = null, filterDirection: GetItemRelationshipsRefsFilterDirectionEnum | null = null, filterExtensionType: string[] | null = null): Promise<RelationshipRefs> {
        const response = await this.itemsApi.getItemRelationshipsRefs(accessToken,projectId, itemId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType);
        return response.content;
    }

    public async GetItemTipAsync( accessToken: string | null = null,projectId: string, itemId: string, xUserId: string | null = null): Promise<ItemTip> {
        const response = await this.itemsApi.getItemTip(accessToken,projectId, itemId, xUserId);
        return response.content;
    }
    public async GetItemVersionsAsync(accessToken: string | null = null,projectId: string, itemId: string, xUserId: string | null = null, filterId: string[] | null = null, filterExtensionType: string[] | null = null, filterVersionNumber: (number | null)[] | null = null, pageNumber: number | null = null, pageLimit: number | null = null): Promise<Versions> {
        const response = await this.itemsApi.getItemVersions(accessToken,projectId, itemId, xUserId, filterId, filterExtensionType, filterVersionNumber, pageNumber, pageLimit);
        return response.content;
    }

    public async PatchItemAsync(accessToken: string | null = null,projectId: string, itemId: string, xUserId: string | null = null, modifyItemPayload: ModifyItemPayload | null = null,): Promise<Item> {
        const response = await this.itemsApi.patchItem(accessToken,projectId, itemId, xUserId, modifyItemPayload);
        return response.content;
    }

    public async CreateItemAsync(accessToken: string | null = null,projectId: string, xUserId: string | null = null, copyFrom: string | null = null, itemPayload: ItemPayload| null = null,): Promise<Item> {
        const response = await this.itemsApi.createItem(accessToken,projectId, xUserId, copyFrom, itemPayload);
        return response.content;
    }

    public async CreateItemRelationshipsRefAsync(accessToken: string | null = null,projectId: string, itemId: string, xUserId: string | null = null, relationshipRefsPayload: RelationshipRefsPayload | null = null,): Promise<Response> {
        const response = await this.itemsApi.createItemRelationshipsRef(accessToken,projectId, itemId, xUserId, relationshipRefsPayload);
        return response.content;
    }
    public async GetDownloadAsync(accessToken: string, projectId: string, downloadId: string, xUserId: string | null = null ): Promise<Download> {
        const response = await this.projectsApi.getDownload(accessToken,projectId, downloadId, xUserId);
        return response.content;
    }

    public async GetDownloadJobAsync(accessToken: string, projectId: string, jobId: string, xUserId: string | null = null): Promise<Job> {
        const response = await this.projectsApi.getDownloadJob(accessToken,projectId, jobId, xUserId);
        return response.content;
    }

    public async CreateDownloadAsync(accessToken: string, projectId: string, xUserId: string | null = null, downloadPayload?: DownloadPayload): Promise<DownloadDetails> {
        const response = await this.projectsApi.createDownload(accessToken,projectId, xUserId, downloadPayload);
        return response.content;
    }
    public async GetHubProjectsAsync(accessToken: string | null = null, hubId: string, xUserId: string | undefined = undefined, filterId: string[] | undefined = undefined, filterExtensionType: string[] | undefined = undefined, pageNumber: number | undefined = undefined, pageLimit: number | undefined = undefined): Promise<Projects> {

        const response = await this.projectsApi.getHubProjects(accessToken, hubId, xUserId, filterId, filterExtensionType, pageNumber, pageLimit);
        return response.content;
    }
    public async GetProjectAsync(accessToken: string | null = null, hubId: string, projectId: string, xUserId: string | undefined = undefined): Promise<Project> {
        const response = await this.projectsApi.getProject(accessToken, hubId, projectId, xUserId);
        return response.content;
    }

    public async GetProjectHubAsync(accessToken: string | null = null, hubId: string, projectId: string, xUserId: string | undefined = undefined): Promise<Hub> {
        const response = await this.projectsApi.getProjectHub(accessToken, hubId, projectId, xUserId);
        return response.content;
    }

    public async GetProjectTopFoldersAsync(accessToken: string | null = null, hubId: string, projectId: string, xUserId: string | undefined = undefined, excludeDeleted: boolean | undefined = undefined, projectFilesOnly: boolean | undefined = undefined): Promise<TopFolders> {
        const response = await this.projectsApi.getProjectTopFolders(accessToken, hubId, projectId, xUserId, excludeDeleted, projectFilesOnly);
        return response.content;
    }
    public async CreateStorageAsync(accessToken: string | null = null, projectId: string, xUserId: string | null = null, storagePayload?: StoragePayload): Promise<Storage> {
        const response = await this.projectsApi.createStorage(accessToken,projectId, xUserId, storagePayload);
        return response.content;
    }
    public async GetVersionAsync(accessToken: string | null = null,projectId: string, versionId: string, xUserId: string = ''): Promise<Version> {
        const response = await this.versionsApi.getVersion(accessToken,projectId, versionId, xUserId);
        return response.content;
    }
    
    public async GetVersionDownloadFormatsAsync(accessToken: string | null = null,projectId: string, versionId: string, xUserId: string = ''): Promise<DownloadFormats> {
        const response = await this.versionsApi.getVersionDownloadFormats(accessToken,projectId, versionId, xUserId);
        return response.content;
    }
    
    public async GetVersionDownloadsAsync(accessToken: string | null = null,projectId: string, versionId: string, xUserId: string = '', filterFormatFileType: string[] | null = null): Promise<Downloads> {
        const response = await this.versionsApi.getVersionDownloads(accessToken,projectId, versionId, xUserId, filterFormatFileType);
        return response.content;
    }
    
    public async GetVersionItemAsync(accessToken: string | null = null,projectId: string, versionId: string, xUserId: string = ''): Promise<Item> {
        const response = await this.versionsApi.getVersionItem(accessToken,projectId, versionId, xUserId);
        return response.content;
    }
    
    public async GetVersionRefsAsync(accessToken: string | null = null,projectId: string, versionId: string, xUserId: string = '', filterType: string[] | null = null, filterId: string[] | null = null, filterExtensionType: string[] | null = null): Promise<Refs> {
        const response = await this.versionsApi.getVersionRefs(accessToken,projectId, versionId, xUserId, filterType, filterId, filterExtensionType);
        return response.content;
    }
    
    public async GetVersionRelationshipsLinksAsync(accessToken: string | null = null,projectId: string, versionId: string, xUserId: string = ''): Promise<RelationshipLinks> {
        const response = await this.versionsApi.getVersionRelationshipsLinks(accessToken,projectId, versionId, xUserId);
        return response.content;
    }
    
    public async GetVersionRelationshipsRefsAsync(accessToken: string | null = null,projectId: string, versionId: string, xUserId: string = '', filterType: string[] | null = null, filterId: string[] | null = null, filterRefType: GetVersionRelationshipsRefsFilterRefTypeEnum | null = null, filterDirection: GetVersionRelationshipsRefsFilterDirectionEnum | null = null, filterExtensionType: string[] | null = null): Promise<RelationshipRefs> {
        const response = await this.versionsApi.getVersionRelationshipsRefs(accessToken,projectId, versionId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType);
        return response.content;
    }
    
    public async PatchVersionAsync(accessToken: string | null = null,projectId: string, versionId: string, modifyVersionPayload?: ModifyVersionPayload): Promise<Version> {
        const response = await this.versionsApi.patchVersion(accessToken,projectId, versionId, modifyVersionPayload );
        return response.content;
    }
    
    public async CreateVersionAsync(accessToken: string | null = null,projectId: string, xUserId: string = '', copyFrom: string | null = null, versionPayload?: VersionPayload): Promise<VersionDetails> {
        const response = await this.versionsApi.createVersion(accessToken,projectId, xUserId, copyFrom, versionPayload);
        return response.content;
    }
    
    public async CreateVersionRelationshipsRefAsync(accessToken: string | null = null,projectId: string, versionId: string, xUserId: string = '', relationshipRefsPayload: RelationshipRefsPayload | null = null): Promise<Version> {
        const response = await this.versionsApi.createVersionRelationshipsRef(accessToken,projectId, versionId, xUserId, relationshipRefsPayload);
        return response.content;
    }
    
    
}

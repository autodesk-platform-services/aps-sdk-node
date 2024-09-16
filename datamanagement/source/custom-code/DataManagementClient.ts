import {
  ApiResponse,
  ApsServiceRequestConfig,
  SdkManager,
  BaseClient,
  IAuthenticationProvider,
  SdkManagerBuilder
} from '@aps_sdk/autodesk-sdkmanager';
import {
  CommandsApi,
  HubsApi,
  ItemsApi,
  ProjectsApi,
  FoldersApi,
  VersionsApi
} from '../api';
import {
  Command,
  CommandPayload,
  Download,
  DownloadFormats,
  CreatedDownload,
  DownloadPayload,
  Downloads,
  Folder,
  RelationshipRefs,
  Search,
  FolderContents,
  FolderPayload,
  FolderRefs,
  Hub,
  Hubs,
  Item,
  ItemPayload,
  ItemTip,
  Job,
  ModifyFolderPayload,
  ModifyItemPayload,
  ModifyVersionPayload,
  Project,
  Projects,
  Refs,
  RelationshipLinks,
  RelationshipRefsPayload,
  StoragePayload,
  TopFolders,
  CreatedVersion,
  VersionPayload,
  Versions,
  CheckPermissionPayload,
  VersionNumber,
  JsonApiVersion,
  CheckPermission,
  ListItemsPayload,
  ListItems,
  ListRefsPayload,
  ListRefs,
  GetPublishModelJobPayload,
  GetPublishModelJob,
  PublishModelPayload,
  PublishModel,
  PublishWithoutLinksPayload,
  PublishWithoutLinks,
  TypeFilter,
  TypeRef,
  MetarefsDirection,
  Version
} from '../model';

export class DataManagementClient extends BaseClient {
  public commandsApi: CommandsApi;
  public foldersApi: FoldersApi;
  public hubsApi: HubsApi;
  public itemsApi: ItemsApi;
  public projectsApi: ProjectsApi;
  public versionsApi: VersionsApi;

  constructor(optionalArgs?: {
    sdkManager?: SdkManager;
    authenticationProvider?: IAuthenticationProvider;
  }) {
    super(optionalArgs?.authenticationProvider);
    if (!optionalArgs?.sdkManager) {
      (optionalArgs ??= {}).sdkManager = SdkManagerBuilder.create().build();
    }
    this.commandsApi = new CommandsApi(optionalArgs.sdkManager);
    this.foldersApi = new FoldersApi(optionalArgs.sdkManager);
    this.hubsApi = new HubsApi(optionalArgs.sdkManager);
    this.itemsApi = new ItemsApi(optionalArgs.sdkManager);
    this.projectsApi = new ProjectsApi(optionalArgs.sdkManager);
    this.versionsApi = new VersionsApi(optionalArgs.sdkManager);
  }

  public async getHubs(optionalArgs?: {
    accessToken?: string;
    xUserId?: string;
    filterId?: Array<string>;
    filterName?: Array<string>;
    filterExtensionType?: Array<string>;
    options?: ApsServiceRequestConfig;
  }): Promise<Hubs> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.hubsApi.getHubs(
      optionalArgs?.accessToken,
      optionalArgs?.xUserId,
      optionalArgs?.filterId,
      optionalArgs?.filterName,
      optionalArgs?.filterExtensionType,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getHub(
    hubId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Hub> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.hubsApi.getHub(
      optionalArgs?.accessToken,
      hubId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getFolder(
    projectId: string,
    folderId: string,
    optionalArgs?: {
      accessToken?: string;
      ifModifiedSince?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Folder> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.foldersApi.getFolder(
      optionalArgs?.accessToken,
      projectId,
      folderId,
      optionalArgs?.ifModifiedSince,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getFolderContents(
    projectId: string,
    folderId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      filterType?: Array<TypeFilter>;
      filterId?: Array<string>;
      filterExtensionType?: Array<string>;
      filterLastModifiedTimeRollup?: Array<string>;
      pageNumber?: number;
      pageLimit?: number;
      includeHidden?: boolean;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<FolderContents> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.foldersApi.getFolderContents(
      optionalArgs?.accessToken,
      projectId,
      folderId,
      optionalArgs?.xUserId,
      optionalArgs?.filterType,
      optionalArgs?.filterId,
      optionalArgs?.filterExtensionType,
      optionalArgs?.filterLastModifiedTimeRollup,
      optionalArgs?.pageNumber,
      optionalArgs?.pageLimit,
      optionalArgs?.includeHidden,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getFolderParent(
    projectId: string,
    folderId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Folder> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.foldersApi.getFolderParent(
      optionalArgs?.accessToken,
      projectId,
      folderId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getFolderRefs(
    projectId: string,
    folderId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      filterType?: Array<TypeFilter>;
      filterId?: Array<string>;
      filterExtensionType?: Array<string>;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<FolderRefs> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.foldersApi.getFolderRefs(
      optionalArgs?.accessToken,
      projectId,
      folderId,
      optionalArgs?.xUserId,
      optionalArgs?.filterType,
      optionalArgs?.filterId,
      optionalArgs?.filterExtensionType,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getFolderRelationshipsLinks(
    projectId: string,
    folderId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<RelationshipLinks> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.foldersApi.getFolderRelationshipsLinks(
      optionalArgs?.accessToken,
      projectId,
      folderId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getFolderRelationshipsRefs(
    folderId: string,
    projectId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      filterType?: Array<TypeFilter>;
      filterId?: Array<string>;
      filterRefType?: TypeRef;
      filterDirection?: MetarefsDirection;
      filterExtensionType?: Array<string>;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<RelationshipRefs> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.foldersApi.getFolderRelationshipsRefs(
      optionalArgs?.accessToken,
      folderId,
      projectId,
      optionalArgs?.xUserId,
      optionalArgs?.filterType,
      optionalArgs?.filterId,
      optionalArgs?.filterRefType,
      optionalArgs?.filterDirection,
      optionalArgs?.filterExtensionType,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getFolderSearch(
    projectId: string,
    folderId: string,
    optionalArgs?: {
      accessToken?: string;
      filter?: Array<string>;
      pageNumber?: number;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Search> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.foldersApi.getFolderSearch(
      optionalArgs?.accessToken,
      projectId,
      folderId,
      optionalArgs?.filter,
      optionalArgs?.pageNumber,
      optionalArgs?.options
    );
    return response.content;
  }

  public async patchFolder(
    projectId: string,
    folderId: string,
    modifyFolderPayload: ModifyFolderPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Folder> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.foldersApi.patchFolder(
      optionalArgs?.accessToken,
      projectId,
      folderId,
      optionalArgs?.xUserId,
      modifyFolderPayload,
      optionalArgs.options
    );
    return response.content;
  }

  public async createFolder(
    projectId: string,
    folderPayload: FolderPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Folder> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.foldersApi.createFolder(
      optionalArgs?.accessToken,
      projectId,
      optionalArgs?.xUserId,
      folderPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async createFolderRelationshipsRef(
    folderId: string,
    projectId: string,
    relationshipRefsPayload: RelationshipRefsPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Response> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.foldersApi.createFolderRelationshipsRef(
      optionalArgs?.accessToken,
      folderId,
      projectId,
      optionalArgs?.xUserId,
      relationshipRefsPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getItem(
    projectId: string,
    itemId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      includePathInProject?: boolean;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Item> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.itemsApi.getItem(
      optionalArgs?.accessToken,
      projectId,
      itemId,
      optionalArgs?.xUserId,
      optionalArgs?.includePathInProject,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getItemParentFolder(
    projectId: string,
    itemId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Folder> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.itemsApi.getItemParentFolder(
      optionalArgs?.accessToken,
      projectId,
      itemId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getItemRefs(
    projectId: string,
    itemId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      filterType?: Array<TypeFilter>;
      filterId?: Array<string>;
      filterExtensionType?: Array<string>;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Refs> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.itemsApi.getItemRefs(
      optionalArgs?.accessToken,
      projectId,
      itemId,
      optionalArgs?.xUserId,
      optionalArgs?.filterType,
      optionalArgs?.filterId,
      optionalArgs?.filterExtensionType,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getItemRelationshipsLinks(
    projectId: string,
    itemId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<RelationshipLinks> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.itemsApi.getItemRelationshipsLinks(
      optionalArgs?.accessToken,
      projectId,
      itemId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getItemRelationshipsRefs(
    projectId: string,
    itemId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      filterType?: Array<TypeFilter>;
      filterId?: Array<string>;
      filterRefType?: TypeRef;
      filterDirection?: MetarefsDirection;
      filterExtensionType?: Array<string>;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<RelationshipRefs> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.itemsApi.getItemRelationshipsRefs(
      optionalArgs?.accessToken,
      projectId,
      itemId,
      optionalArgs?.xUserId,
      optionalArgs?.filterType,
      optionalArgs?.filterId,
      optionalArgs?.filterRefType,
      optionalArgs?.filterDirection,
      optionalArgs?.filterExtensionType,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getItemTip(
    projectId: string,
    itemId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<ItemTip> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.itemsApi.getItemTip(
      optionalArgs?.accessToken,
      projectId,
      itemId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getItemVersions(
    projectId: string,
    itemId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      filterId?: Array<string>;
      filterExtensionType?: Array<string>;
      filterVersionNumber?: Array<number>;
      pageNumber?: number;
      pageLimit?: number;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Versions> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.itemsApi.getItemVersions(
      optionalArgs?.accessToken,
      projectId,
      itemId,
      optionalArgs?.xUserId,
      optionalArgs?.filterId,
      optionalArgs?.filterExtensionType,
      optionalArgs?.filterVersionNumber,
      optionalArgs?.pageNumber,
      optionalArgs?.pageLimit,
      optionalArgs?.options
    );
    return response.content;
  }

  public async patchItem(
    projectId: string,
    itemId: string,
    modifyItemPayload: ModifyItemPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Item> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.itemsApi.patchItem(
      optionalArgs?.accessToken,
      projectId,
      itemId,
      optionalArgs?.xUserId,
      modifyItemPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async createItem(
    projectId: string,
    itemPayload: ItemPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      copyFrom?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Item> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.itemsApi.createItem(
      optionalArgs?.accessToken,
      projectId,
      optionalArgs?.xUserId,
      optionalArgs?.copyFrom,
      itemPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async createItemRelationshipsRef(
    projectId: string,
    itemId: string,
    relationshipRefsPayload: RelationshipRefsPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Response> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.itemsApi.createItemRelationshipsRef(
      optionalArgs?.accessToken,
      projectId,
      itemId,
      optionalArgs?.xUserId,
      relationshipRefsPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getDownload(
    projectId: string,
    downloadId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Download> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.projectsApi.getDownload(
      optionalArgs?.accessToken,
      projectId,
      downloadId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getDownloadJob(
    projectId: string,
    jobId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Job> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.projectsApi.getDownloadJob(
      optionalArgs?.accessToken,
      projectId,
      jobId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async startDownload(
    projectId: string,
    downloadPayload: DownloadPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<CreatedDownload> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.projectsApi.createDownload(
      optionalArgs?.accessToken,
      projectId,
      optionalArgs?.xUserId,
      downloadPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getHubProjects(
    hubId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      filterId?: Array<string>;
      filterExtensionType?: Array<string>;
      pageNumber?: number;
      pageLimit?: number;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Projects> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.projectsApi.getHubProjects(
      optionalArgs?.accessToken,
      hubId,
      optionalArgs?.xUserId,
      optionalArgs?.filterId,
      optionalArgs?.filterExtensionType,
      optionalArgs?.pageNumber,
      optionalArgs?.pageLimit,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getProject(
    hubId: string,
    projectId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Project> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.projectsApi.getProject(
      optionalArgs?.accessToken,
      hubId,
      projectId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getProjectHub(
    hubId: string,
    projectId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Hub> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.projectsApi.getProjectHub(
      optionalArgs?.accessToken,
      hubId,
      projectId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getProjectTopFolders(
    hubId: string,
    projectId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      excludeDeleted?: boolean;
      projectFilesOnly?: boolean;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<TopFolders> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.projectsApi.getProjectTopFolders(
      optionalArgs?.accessToken,
      hubId,
      projectId,
      optionalArgs?.xUserId,
      optionalArgs?.excludeDeleted,
      optionalArgs?.projectFilesOnly,
      optionalArgs?.options
    );
    return response.content;
  }

  public async createStorage(
    projectId: string,
    storagePayload: StoragePayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Storage> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.projectsApi.createStorage(
      optionalArgs?.accessToken,
      projectId,
      optionalArgs?.xUserId,
      storagePayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getVersion(
    projectId: string,
    versionId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Version> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.versionsApi.getVersion(
      optionalArgs?.accessToken,
      projectId,
      versionId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getVersionDownloadFormats(
    projectId: string,
    versionId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<DownloadFormats> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.versionsApi.getVersionDownloadFormats(
      optionalArgs?.accessToken,
      projectId,
      versionId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getVersionDownloads(
    projectId: string,
    versionId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      filterFormatFileType?: Array<string>;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Downloads> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.versionsApi.getVersionDownloads(
      optionalArgs?.accessToken,
      projectId,
      versionId,
      optionalArgs?.xUserId,
      optionalArgs?.filterFormatFileType,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getVersionItem(
    projectId: string,
    versionId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Item> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.versionsApi.getVersionItem(
      optionalArgs?.accessToken,
      projectId,
      versionId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getVersionRefs(
    projectId: string,
    versionId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      filterType?: Array<TypeFilter>;
      filterId?: Array<string>;
      filterExtensionType?: Array<string>;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Refs> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.versionsApi.getVersionRefs(
      optionalArgs?.accessToken,
      projectId,
      versionId,
      optionalArgs?.xUserId,
      optionalArgs?.filterType,
      optionalArgs?.filterId,
      optionalArgs?.filterExtensionType,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getVersionRelationshipsLinks(
    projectId: string,
    versionId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<RelationshipLinks> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.versionsApi.getVersionRelationshipsLinks(
      optionalArgs?.accessToken,
      projectId,
      versionId,
      optionalArgs?.xUserId,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getVersionRelationshipsRefs(
    projectId: string,
    versionId: string,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      filterType?: Array<TypeFilter>;
      filterId?: Array<string>;
      filterRefType?: TypeRef;
      filterDirection?: MetarefsDirection;
      filterExtensionType?: Array<string>;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<RelationshipRefs> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.versionsApi.getVersionRelationshipsRefs(
      optionalArgs?.accessToken,
      projectId,
      versionId,
      optionalArgs?.xUserId,
      optionalArgs?.filterType,
      optionalArgs?.filterId,
      optionalArgs?.filterRefType,
      optionalArgs?.filterDirection,
      optionalArgs?.filterExtensionType,
      optionalArgs?.options
    );
    return response.content;
  }

  public async patchVersion(
    projectId: string,
    versionId: string,
    modifyVersionPayload: ModifyVersionPayload,
    optionalArgs?: { accessToken?: string; options?: ApsServiceRequestConfig }
  ): Promise<Version> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.versionsApi.patchVersion(
      optionalArgs?.accessToken,
      projectId,
      versionId,
      modifyVersionPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async createVersion(
    projectId: string,
    versionPayload: VersionPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      copyFrom?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<CreatedVersion> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.versionsApi.createVersion(
      optionalArgs?.accessToken,
      projectId,
      optionalArgs?.xUserId,
      optionalArgs?.copyFrom,
      versionPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async createVersionRelationshipsRef(
    projectId: string,
    versionId: string,
    relationshipRefsPayload: RelationshipRefsPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<Response> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }
    const response = await this.versionsApi.createVersionRelationshipsRef(
      optionalArgs?.accessToken,
      projectId,
      versionId,
      optionalArgs?.xUserId,
      relationshipRefsPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async executeCheckPermissionCommand(
    projectId: string,
    checkPermissionPayload: CheckPermissionPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<CheckPermission> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }

    const commandPayload: CommandPayload = {
      jsonapi: <JsonApiVersion>{
        version: VersionNumber._10
      },
      data: checkPermissionPayload
    };

    const response = await this.commandsApi.executeCommand(
      optionalArgs?.accessToken,
      projectId,
      optionalArgs?.xUserId,
      commandPayload,
      optionalArgs?.options
    );

    const commandResponse = response.content as Command;
    const checkPermissionData = commandResponse.data as CheckPermission;

    return checkPermissionData;
  }

  public async executeListItemsCommand(
    projectId: string,
    listItemsPayload: ListItemsPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<ListItems> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }

    const commandPayload: CommandPayload = {
      jsonapi: <JsonApiVersion>{
        version: VersionNumber._10
      },
      data: listItemsPayload
    };

    const response = await this.commandsApi.executeCommand(
      optionalArgs?.accessToken,
      projectId,
      optionalArgs?.xUserId,
      commandPayload,
      optionalArgs?.options
    );

    const commandResponse = response.content as Command;
    const listItemsData = commandResponse.data as ListItems;

    return listItemsData;
  }

  public async executeListRefsCommand(
    projectId: string,
    listRefsPayload: ListRefsPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<ListRefs> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }

    const commandPayload: CommandPayload = {
      jsonapi: <JsonApiVersion>{
        version: VersionNumber._10
      },
      data: listRefsPayload
    };

    const response = await this.commandsApi.executeCommand(
      optionalArgs?.accessToken,
      projectId,
      optionalArgs?.xUserId,
      commandPayload,
      optionalArgs?.options
    );

    const commandResponse = response.content as Command;
    const listRefsData = commandResponse.data as ListRefs;

    return listRefsData;
  }

  public async executeGetPublishModelJobCommand(
    projectId: string,
    getPublishModelJobPayload: GetPublishModelJobPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<GetPublishModelJob> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }

    const commandPayload: CommandPayload = {
      jsonapi: <JsonApiVersion>{
        version: VersionNumber._10
      },
      data: getPublishModelJobPayload
    };

    const response = await this.commandsApi.executeCommand(
      optionalArgs?.accessToken,
      projectId,
      optionalArgs?.xUserId,
      commandPayload,
      optionalArgs?.options
    );

    const commandResponse = response.content as Command;
    const getPublishModelJobData = commandResponse.data as GetPublishModelJob;

    return getPublishModelJobData;
  }

  public async executePublishModelCommand(
    projectId: string,
    publishModelPayload: PublishModelPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<PublishModel> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }

    const commandPayload: CommandPayload = {
      jsonapi: <JsonApiVersion>{
        version: VersionNumber._10
      },
      data: publishModelPayload
    };

    const response = await this.commandsApi.executeCommand(
      optionalArgs?.accessToken,
      projectId,
      optionalArgs?.xUserId,
      commandPayload,
      optionalArgs?.options
    );

    const commandResponse = response.content as Command;
    const publishModelData = commandResponse.data as PublishModel;

    return publishModelData;
  }

  public async executePublishWithoutLinksCommand(
    projectId: string,
    publishWithoutLinksPayload: PublishWithoutLinksPayload,
    optionalArgs?: {
      accessToken?: string;
      xUserId?: string;
      options?: ApsServiceRequestConfig;
    }
  ): Promise<PublishWithoutLinks> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error(
        'Please provide a valid access token or an authentication provider'
      );
    } else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken =
        await this.authenticationProvider.getAccessToken();
    }

    const commandPayload: CommandPayload = {
      jsonapi: <JsonApiVersion>{
        version: VersionNumber._10
      },
      data: publishWithoutLinksPayload
    };

    const response = await this.commandsApi.executeCommand(
      optionalArgs?.accessToken,
      projectId,
      optionalArgs?.xUserId,
      commandPayload,
      optionalArgs?.options
    );

    const commandResponse = response.content as Command;
    const publishWithoutLinksData = commandResponse.data as PublishWithoutLinks;

    return publishWithoutLinksData;
  }
}

import { ApiResponse, ApsServiceRequestConfig, BaseClient, IAuthenticationProvider, SdkManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager";
import { CommandsApi, HubsApi, ItemsApi, ProjectsApi, FoldersApi, VersionsApi } from "../api";
import { CreatedDownload, CreatedVersion, Download, DownloadFormats, DownloadPayload, Downloads, FilterType, FolderContents, FolderPayload, FolderRefs, Job, ModifyFolderPayload, ModifyVersionPayload, Project, Projects, Search, StoragePayload, TopFolders, Version, VersionPayload } from "../model";
import { Hub, Hubs } from "../model";
import { CheckPermission, CheckPermissionPayload, Command, PublishModelJobPayload, CommandPayload, CreatedItem, FilterDirection, FilterRefType, FilterTypeVersion, Folder, Item, ItemPayload, ItemTip, JsonApiVersion, JsonApiVersionValue, ListItems, ListItemsPayload, ListRefs, ListRefsPayload, ModifyItemPayload, Refs, RelationshipLinks, RelationshipRefs, RelationshipRefsPayload, Versions, PublishWithoutLinksPayload, PublishWithoutLinks, PublishModel, PublishModelPayload, ComparisonTypes } from "../model";

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

    //#region Hubs
    /**
     * Returns the hub specified by the ``hub_id`` parameter.  For BIM 360 Docs, a hub ID corresponds to a BIM 360 account ID. To convert a BIM 360 account ID to a hub ID, prefix the account ID with ``b.``. For example, an account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get a Hub
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getHub(hubId: string, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Hub> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hubsApi.getHub(optionalArgs?.accessToken, hubId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns a collection of hubs that the user of your app can access.  The returned hubs can be BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, ACC Docs (Autodesk Docs) accounts, or BIM 360 Docs accounts. Only active hubs are returned.  For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with ``b.``. For example, an Account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Hubs
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterName] Filter by the &#x60;&#x60;name&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getHubs(optionalArgs?: { xUserId?: string, filterId?: Array<string>, filterName?: Array<string>, filterExtensionType?: Array<string>, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Hubs> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hubsApi.getHubs(optionalArgs?.accessToken, optionalArgs?.xUserId, optionalArgs?.filterId, optionalArgs?.filterName, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }

    //#region Projects
    /**
     * Kicks off a job to generate the specified download format of the version. Once the job completes, the specified format becomes available for download.  
     * @summary Create Download
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {DownloadPayload} [downloadPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async createDownload(projectId: string, downloadPayload: DownloadPayload,optionalArgs?: { xUserId?: string,accessToken?: string, options?: ApsServiceRequestConfig }): Promise<CreatedDownload> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.createDownload(optionalArgs?.accessToken, projectId, optionalArgs?.xUserId, downloadPayload, optionalArgs?.options)
        return response.content;
    }

    /**getProject
     * Creates a placeholder for an item or a version of an item in the OSS. Later, you can upload the binary content for the item or version to this storage location.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Create a Storage Location in OSS
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {StoragePayload} [storagePayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async createStorage(projectId: string, storagePayload: StoragePayload, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Storage> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.createStorage(optionalArgs?.accessToken, projectId, optionalArgs?.xUserId,storagePayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns the details of a downloadable format of a version of an item. 
     * @summary Get Download Details
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} downloadId The Job ID of the job used to generate the download.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    public async getDownload(projectId: string, downloadId: string, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Download> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.getDownload(optionalArgs?.accessToken, projectId, downloadId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    /**
     * Checks the status of a job that generates a downloadable format of a version of an item.   **Note**: If the job has finished, this operation returns a HTTP status 303, with the ``location`` return header set to the URI that returns the details of the download. 
     * @summary Check Download Creation Progress
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} jobId The unique identifier of a job.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getDownloadJob(projectId: string, jobId: string, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Job> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.getDownloadJob(optionalArgs?.accessToken, projectId, jobId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    /**
     * Returns the hub that contains the project specified by the  ``project_id`` parameter.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Hub for Project
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getHubProjects(hubId: string, optionalArgs?: { xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, pageNumber?: number, pageLimit?: number, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Projects> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.getHubProjects(optionalArgs?.accessToken, hubId, optionalArgs?.xUserId, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.pageNumber, optionalArgs?.pageLimit, optionalArgs?.options);
        return response.content;
    }
    /**
     * Returns the specified project from within the specified hub.  For BIM 360 Docs, a hub ID corresponds to a BIM 360 account ID. To convert a BIM 360 account ID to a hub ID, prefix the account ID with ``b.``. For example, an account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.  Similarly, to convert a BIM 360 project ID to a Data Management project ID prefix the BIM 360 Project ID with ``b.``. For example, a project ID of ``c8b0c73d-3ae9`` translates to a project ID of ``b.c8b0c73d-3ae9``.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get a Project
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getProject(hubId: string, projectId: string, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Project> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.getProject(optionalArgs?.accessToken, hubId, projectId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    /**
     * Returns the hub that contains the project specified by the  ``project_id`` parameter.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Hub for Project
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getProjectHub(hubId: string, projectId: string, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Hub> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.getProjectHub(optionalArgs?.accessToken, hubId, projectId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    /**
     * Returns the details of the highest level folders within a project that the user calling this operation has access to. The user must have at least read access to the folders.  If the user is a Project Admin, it returns all top-level folders in the project. Otherwise, it returns all the highest level folders in the folder hierarchy the user has access to.  Users with access permission to a folder has access permission to all its subfolders.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Top-level Project Folders
     * @param {string} hubId The unique identifier of a hub.
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {boolean} [excludeDeleted] Specifies whether deleted folders are excluded from the response for BIM 360 Docs projects, when user context is provided.   - &#x60;&#x60;true&#x60;&#x60;: Response excludes deleted folders for BIM 360 Docs projects.   - &#x60;&#x60;false&#x60;&#x60;: (Default) Response will not exclude deleted folders for BIM 360 Docs projects. 
     * @param {boolean} [projectFilesOnly] Specifies what folders and subfolders to return for BIM 360 Docs projects, when user context is provided.   - &#x60;&#x60;true&#x60;&#x60;: Response will be restricted to folder and subfolders containing project files for BIM 360 Docs projects.   - &#x60;&#x60;false&#x60;&#x60;: (Default) Response will include all available folders. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getProjectTopFolders(hubId: string, projectId: string, optionalArgs?: { xUserId?: string, excludeDeleted?: boolean, projectFilesOnly?: boolean, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<TopFolders> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.getProjectTopFolders(optionalArgs?.accessToken, hubId, projectId, optionalArgs?.xUserId,optionalArgs?.excludeDeleted, optionalArgs?.projectFilesOnly, optionalArgs?.options);
        return response.content;
    }

    //#region Folders
    /**
     * Returns the folder specified by the ``folder_id`` parameter from within the project identified by the ``project_id`` parameter. All folders and subfolders within a project (including the root folder) have a unique ID.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [ifModifiedSince] Specify a date in the &#x60;&#x60;YYYY-MM-DDThh:mm:ss.sz&#x60;&#x60; format. If the resource has not been modified since the specified date/time, the response will return a HTTP status of 304 without any response body; the &#x60;&#x60;Last-Modified&#x60;&#x60; response header will contain the date of last modification.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getFolder(projectId: string, folderId: string, optionalArgs?:{ifModifiedSince?: string, xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Folder> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.foldersApi.getFolder(optionalArgs?.accessToken, projectId, folderId, optionalArgs?.ifModifiedSince, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    /**
     * Creates a new folder in the specified project. Use the ``parent`` attribute in the request body to specify where in the hierarchy the new folder should be located. Folders can be nested up to 25 levels deep.  Use the `Modify a Folder </en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH/>`_ operation to delete and restore folders.  Before you use the Data Management API to access BIM 360 Docs folders, provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Create a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {FolderPayload} [folderPayload] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async createFolder(projectId: string, folderPayload: FolderPayload, optionalArgs?:{xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Folder> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.foldersApi.createFolder( optionalArgs?.accessToken, projectId, optionalArgs?.xUserId, folderPayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Creates a custom relationship between a folder and another resource within the data domain service (folder, item, or version).
     * @summary Create a Custom Relationship for a Folder
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async createFolderRelationshipsRef(folderId: string, projectId: string, relationshipRefsPayload: RelationshipRefsPayload, optionalArgs?:{xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Response> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.foldersApi.createFolderRelationshipsRef(optionalArgs?.accessToken,folderId, projectId, optionalArgs?.xUserId, relationshipRefsPayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns a list of items and folders within the specified folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc.  The resources contained in the ``included`` array of the response are their tip versions.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Folder Contents
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterType>} [filterType] Filter by the type of the objects in the folder. Supported values are &#x60;&#x60;folders&#x60;&#x60; and &#x60;&#x60;items&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param {Array<string>} [filterLastModifiedTimeRollup] Filter by the &#x60;&#x60;lastModifiedTimeRollup&#x60;&#x60; attribute. Supported values are date-time string in the form &#x60;&#x60;YYYY-MM-DDTHH:MM:SS.000000Z&#x60;&#x60; or &#x60;&#x60;YYYY-MM-DDTHH:MM:SS&#x60;&#x60; based on RFC3339.
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
     * @param {boolean} [includeHidden] &#x60;&#x60;true&#x60;&#x60;: Response will contain items and folders that were deleted from BIM 360 Docs projects.   &#x60;&#x60;false&#x60;&#x60;: (Default): Response will not contain items and folders that were deleted from BIM 360 Docs projects.    To return only items and folders that were deleted from BIM 360 Docs projects, see the documentation on [Filtering](/en/docs/data/v2/overview/filtering/). 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getFolderContents(projectId: string, folderId: string, optionalArgs?:{xUserId?: string, filterType?: Array<FilterType>, filterId?: Array<string>, filterExtensionType?: Array<string>, filterLastModifiedTimeRollup?: Array<string>, pageNumber?: number, pageLimit?: number, includeHidden?: boolean, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<FolderContents> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.foldersApi.getFolderContents(optionalArgs?.accessToken, projectId, folderId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.filterLastModifiedTimeRollup, optionalArgs?.pageNumber, optionalArgs?.pageLimit, optionalArgs?.includeHidden, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns the parent folder of the specified folder. In a project, folders are organized in a hierarchy. Each folder except for the root folder has a parent folder.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Parent of a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getFolderParent(projectId: string, folderId: string, optionalArgs?:{xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Folder> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.foldersApi.getFolderParent(optionalArgs?.accessToken, projectId, folderId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Related Resources for a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getFolderRefs(projectId: string, folderId: string, optionalArgs?:{xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterExtensionType?: Array<string>, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<FolderRefs> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.foldersApi.getFolderRefs(optionalArgs?.accessToken, projectId, folderId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns a list of links for the specified folder.   Custom relationships can be established between a folder and other external resources residing outside the data domain service. A link’s ``href`` attribute defines the target URI to access a resource.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Relationship Links for a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getFolderRelationshipsLinks(projectId: string, folderId: string, optionalArgs?:{xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<RelationshipLinks> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.foldersApi.getFolderRelationshipsLinks(optionalArgs?.accessToken, projectId, folderId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns the custom relationships associated with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).  Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for a Folder](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-refs-GET/) operation.    **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Custom Relationships for a Folder
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {FilterRefType} [filterRefType] Filter by &#x60;&#x60;refType&#x60;&#x60;. Possible values: &#x60;&#x60;derived&#x60;&#x60;, &#x60;&#x60;dependencies&#x60;&#x60;, &#x60;&#x60;auxiliary&#x60;&#x60;, &#x60;&#x60;xrefs&#x60;&#x60;, and &#x60;&#x60;includes&#x60;&#x60;.
     * @param {FilterDirection} [filterDirection] Filter by the direction of the reference. Possible values: &#x60;&#x60;from&#x60;&#x60; and &#x60;&#x60;to&#x60;&#x60;.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getFolderRelationshipsRefs(folderId: string, projectId: string, optionalArgs?:{xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterRefType?: FilterRefType, filterDirection?: FilterDirection, filterExtensionType?: Array<string>, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<RelationshipRefs> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.foldersApi.getFolderRelationshipsRefs(optionalArgs?.accessToken, folderId, projectId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterRefType, optionalArgs?.filterDirection, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }

    /**
     * Searches the specified folder and its subfolders and returns a list of the latest versions of the items you can access.   Use the ``filter`` query string parameter to narrow down the list as appropriate. You can filter by the following properties of the version payload:   - ``type`` property,  - ``id`` property,  - any of the attributes object properties.   For example, you can filter by ``createTime`` and ``mimeType``. It returns tip versions (latest versions) of properties where the filter conditions are satisfied. To verify the properties of the attributes object for a specific version, use the [Get a Version](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-GET/) operation.  To list the immediate contents of the folder without parsing subfolders, use the [List Folder Contents](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Folder and Subfolder Contents
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} filterFieldName Field name for filtering the data. See the Filtering section for details.
     * @param {Array<string>} [filterValue] Value to match the filter with. See the Filtering section for details.
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getFolderSearch(projectId: string, folderId: string, optionalArgs?:{filters?: { field: string; operator?: ComparisonTypes; value: string }[], pageNumber?: number, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Search> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.foldersApi.getFolderSearch(optionalArgs?.accessToken,projectId, folderId, optionalArgs?.filters, optionalArgs?.pageNumber, optionalArgs?.options);
        return response.content;
    }

    /**
     * Renames, moves, hides, or unhides a folder. Marking a BIM 360 Docs folder as hidden effectively deletes it. You can restore it by changing its ``hidden`` attribute. You can also move BIM 360 Docs folders by changing their parent folder.  You cannot permanently delete BIM 360 Docs folders. They are tagged as hidden folders and are removed from the BIM 360 Docs UI and from regular Data Management API responses. You can use the hidden filter (``filter[hidden]=true``) to get a list of deleted folders with the [List Folder Contents](/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) operation.  Before you use the Data Management API to access BIM 360 Docs folders, provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](/en.docs.acc.v1/overview/introduction/). 
     * @summary Modify a Folder
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} folderId The unique identifier of a folder.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {ModifyFolderPayload} [modifyFolderPayload] Describe the folder to be patched.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async patchFolder(projectId: string, folderId: string, modifyFolderPayload: ModifyFolderPayload, optionalArgs?:{xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Folder> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.foldersApi.patchFolder(optionalArgs?.accessToken,projectId, folderId, optionalArgs?.xUserId, modifyFolderPayload, optionalArgs.options);
        return response.content;
    }


    //#region Versions

    /**
     * Returns the specified version of an item.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get a Version
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getVersion(projectId: string, versionId: string, optionalArgs?:{xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Version> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.versionsApi.getVersion(optionalArgs?.accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns a list of file formats the specified version of an item can be downloaded as.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Supported Download Formats
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getVersionDownloadFormats(projectId: string, versionId: string, optionalArgs?:{xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<DownloadFormats> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.versionsApi.getVersionDownloadFormats(optionalArgs?.accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns the list of file formats of the specified version of an item currently available for download.  **Note:** This operation is not fully implemented as yet. It currently returns an empty data object.
     * @summary List Available Download Formats
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterFormatFileType] Filter by the file type of the download object.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getVersionDownloads(projectId: string, versionId: string, optionalArgs?:{xUserId?: string, filterFormatFileType?: Array<string>, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Downloads> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.versionsApi.getVersionDownloads(optionalArgs?.accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.filterFormatFileType, optionalArgs?.options);
        return response.content;
    }
    
    /**
     * Returns the item corresponding to the specified version.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Item by Version
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getVersionItem(projectId: string, versionId: string, optionalArgs?:{xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Item> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.versionsApi.getVersionItem(optionalArgs?.accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    
    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the specified version.  Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).  - Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links. - Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. - The response body will have an included array that contains the ref resources that are involved in the relationship, which is essentially the response to the [List Custom Relationships for a Version](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-GET/) operation.   **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Related Resources for a Version
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getVersionRefs(projectId: string, versionId: string, optionalArgs?:{xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterExtensionType?: Array<string>, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Refs> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.versionsApi.getVersionRefs(optionalArgs?.accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }
    
    /**
     * Returns a collection of links for the specified version of an item. Custom relationships can be established between a version of an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access the resource.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Links for a Version
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getVersionRelationshipsLinks(projectId: string, versionId: string, optionalArgs?:{xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<RelationshipLinks> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.versionsApi.getVersionRelationshipsLinks(optionalArgs?.accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    
    /**
     * Returns the custom relationships for the specified version.   Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).  - Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data. - Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. - The response body will have an included array that contains the resources in the relationship, which is essentially the response to the [List Related Resources operation](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-POST/). - To get custom relationships for multiple versions, see the ListRefs command.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Custom Relationships for a Version
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {FilterRefType} [filterRefType] Filter by &#x60;&#x60;refType&#x60;&#x60;. Possible values: &#x60;&#x60;derived&#x60;&#x60;, &#x60;&#x60;dependencies&#x60;&#x60;, &#x60;&#x60;auxiliary&#x60;&#x60;, &#x60;&#x60;xrefs&#x60;&#x60;, and &#x60;&#x60;includes&#x60;&#x60;.
     * @param {FilterDirection} [filterDirection] Filter by the direction of the reference. Possible values: &#x60;&#x60;from&#x60;&#x60; and &#x60;&#x60;to&#x60;&#x60;.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getVersionRelationshipsRefs(projectId: string, versionId: string, optionalArgs?:{xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterRefType?: FilterRefType, filterDirection?: FilterDirection, filterExtensionType?: Array<string>, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<RelationshipRefs> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.versionsApi.getVersionRelationshipsRefs(optionalArgs?.accessToken, projectId, versionId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterRefType, optionalArgs?.filterDirection, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }
    
    /**
     * Updates the properties of the specified version of an  item. Currently, you can only change the name of the version.  **Note:** This operation is not supported for BIM 360 and ACC. If you want to rename a version, create a new version with a new name. 
     * @summary Update a Version
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {ModifyVersionPayload} [modifyVersionPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async patchVersion(projectId: string, versionId: string, modifyVersionPayload: ModifyVersionPayload, optionalArgs?:{accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Version> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.versionsApi.patchVersion(optionalArgs?.accessToken, projectId, versionId, modifyVersionPayload, optionalArgs?.options);
        return response.content;
    }
    
    /**
     * Creates a new versions of an existing item.  Before creating a new version you must create a storage location for the version in OSS, and upload the file to that location. For more details about the workflow, see the tutorial on uploading a file.  This operation also allows you to create a new version of an item by copying a specific version of an existing item from another folder within the project. The new version becomes the tip version of the item.  Use the [Create an Item](/en/docs/data/v2/reference/http/projects-project_id-items-POST/) operation to copy a specific version of an existing item as a new item in another folder.  This operation can also be used to delete files on BIM360 Document Management. For more information, please refer to the delete and restore a file tutorial.  Before you use the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Create a Version
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {string} [copyFrom] The Version ID (URN) of the version to copy from.   **Note**: This parameter is relevant only for copying files to BIM 360 Docs.  For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an &#x60;&#x60;item:autodesk.bim360:Document&#x60;&#x60; item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an &#x60;&#x60;item:autodesk.bim360:File&#x60;&#x60; item extension type.    To verify an item’s extension type, use the [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation, and check the &#x60;&#x60;attributes.extension.type&#x60;&#x60; attribute.    Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.    Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the &#x60;&#x60;attributes.extension.data.processState&#x60;&#x60; attribute. 
     * @param {VersionPayload} [versionPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApi
     */
    public async createVersion(projectId: string, versionPayload: VersionPayload, optionalArgs?:{xUserId?: string, copyFrom?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<CreatedVersion> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.versionsApi.createVersion(optionalArgs?.accessToken, projectId, optionalArgs?.xUserId, optionalArgs?.copyFrom, versionPayload, optionalArgs?.options);
        return response.content;
    }
    
    /**
     * Creates a custom relationship between a version of an item and another resource within the data domain service (folder, item, or version).
     * @summary Create a Custom Relationship for a Version
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} versionId The URL encoded unique identifier of a version.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async createVersionRelationshipsRef(projectId: string, versionId: string, relationshipRefsPayload: RelationshipRefsPayload, optionalArgs?:{xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig}): Promise<Version> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.versionsApi.createVersionRelationshipsRef(optionalArgs?.accessToken, projectId, versionId, optionalArgs?.xUserId, relationshipRefsPayload, optionalArgs?.options);
        return response.content;
    }

    
    //#region Items

    /**
    * Creates the first version of a file (item). To create additional versions of an item, use POST versions.  Before you create the first version of an item, you must create a placeholder for the file, and upload the file to the placeholder. For more details about the workflow, see the tutorial on uploading a file.  This operation also allows you to create a new item by copying a specific version of an existing item to another folder. The copied version becomes the first version of the new item in the target folder.  **Note:** You cannot copy versions of items across different projects and accounts.  Use the [Create Version](/en/docs/data/v2/reference/http/projects-project_id-versions-POST/) operation with the ``copyFrom`` parameter if you want to create a new version of an item by copying a specific version of another item.   Before you use the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
    * @summary Create an Item
    * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
    * @param {string} [copyFrom] The Version ID (URN) of the version to copy from.   **Note**: This parameter is relevant only for copying files to BIM 360 Docs.  For information on how to find the URN, see the initial steps of the [Download a File](/en/docs/data/v2/tutorials/download-file/) tutorial.  You can only copy files to the Plans folder or to subfolders of the Plans folder with an &#x60;&#x60;item:autodesk.bim360:Document&#x60;&#x60; item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an &#x60;&#x60;item:autodesk.bim360:File&#x60;&#x60; item extension type.    To verify an item’s extension type, use the [Get an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation, and check the &#x60;&#x60;attributes.extension.type&#x60;&#x60; attribute.    Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.    Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the &#x60;&#x60;attributes.extension.data.processState&#x60;&#x60; attribute. 
    * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.          Note that for a three-legged OAuth flow or for a two-legged OAuth flow with user impersonation (&#x60;&#x60;x-user-id&#x60;&#x60;), the users of your app must have permission to upload files to the specified parent folder (&#x60;&#x60;data.attributes.relationships.parent.data.id&#x60;&#x60;).  For copying files, users of your app must have permission to view the source folder.   For information about managing and verifying folder permissions for BIM 360 Docs, see the section on [Managing Folder Permissions](http://help.autodesk.com/view/BIM360D/ENU/?guid&#x3D;GUID-2643FEEF-B48A-45A1-B354-797DAD628C37).\&#39; 
    * @param {ItemPayload} [itemPayload] 
    * @param accessToken bearer access token
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ItemsApiInterface
    */
    public async createItem(projectId: string, itemPayload: ItemPayload, optionalArgs?: { copyFrom?: string, xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<CreatedItem> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.itemsApi.createItem(optionalArgs?.accessToken, projectId, optionalArgs?.copyFrom, optionalArgs?.xUserId, itemPayload, optionalArgs?.options);
        return response.content;
    }


    /**
     * Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version).
     * @summary Create a Custom Relationship for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {RelationshipRefsPayload} [relationshipRefsPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    public async createItemRelationshipsRef(projectId: string, itemId: string, relationshipRefsPayload: RelationshipRefsPayload, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        return await this.itemsApi.createItemRelationshipsRef(optionalArgs?.accessToken, projectId, itemId, optionalArgs?.xUserId, relationshipRefsPayload, optionalArgs?.options);

    }


    /**
     * Retrieves an item. Items represent Word documents, Fusion 360 design files, drawings, spreadsheets, etc.  The tip version for the item is included in the included array of the payload. To retrieve multiple items, see the ListItems command.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {boolean} [includePathInProject] Specify whether to return &#x60;&#x60;pathInProject&#x60;&#x60; attribute in response for BIM 360 Docs projects. &#x60;&#x60;pathInProject&#x60;&#x60; is the relative path of the item starting from project’s root folder.   - &#x60;&#x60;true&#x60;&#x60;: Response will include the &#x60;&#x60;pathInProject&#x60;&#x60; attribute for BIM 360 Docs projects.   - &#x60;&#x60;false&#x60;&#x60;: (Default) Response will not include &#x60;&#x60;pathInProject&#x60;&#x60; attribute for BIM 360 Docs projects. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    public async getItem(projectId: string, itemId: string, optionalArgs?: { xUserId?: string, includePathInProject?: boolean, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Item> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.itemsApi.getItem(optionalArgs?.accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.includePathInProject, optionalArgs?.options);
        return response.content;
    }


    /**
     * Returns the parent folder of the specified item.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Parent of an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    public async getItemParentFolder(projectId: string, itemId: string, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Folder> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.itemsApi.getItemParentFolder(optionalArgs?.accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }


    /**
     * Returns the resources (items, folders, and versions) that have a custom relationship with the specified item. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).   Each relationship is defined by the ID of the object at the other end of the relationship, together with type, attributes, and relationships links. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in.   **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Related Resources for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    public async getItemRefs(projectId: string, itemId: string, optionalArgs?: { xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterExtensionType?: Array<string>, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Refs> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.itemsApi.getItemRefs(optionalArgs?.accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }


    /**
     * Returns a list of links for the specified item.   Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s ``href`` attribute defines the target URI to access a resource.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Relationship Links for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    public async getItemRelationshipsLinks(projectId: string, itemId: string, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<RelationshipLinks> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.itemsApi.getItemRelationshipsLinks(optionalArgs?.accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns the custom relationships that are associated with the specified item. Custom relationships can be established between an item and other resources within the ``data`` domain service (folders, items, and versions).  Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data. Callers will typically use a filter parameter to restrict the response to the custom relationship types (``filter[meta.refType]``) they are interested in. The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for an Item](/en/docs/data/v2/reference/http/projects-project_id-items-item_id-refs-GET/) operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List Custom Relationships for an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<FilterTypeVersion>} [filterType] Filter by the &#x60;&#x60;type&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target. Supported values include &#x60;&#x60;folders&#x60;&#x60;, &#x60;&#x60;items&#x60;&#x60;, and &#x60;&#x60;versions&#x60;&#x60;.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {FilterRefType} [filterRefType] Filter by &#x60;&#x60;refType&#x60;&#x60;. Possible values: &#x60;&#x60;derived&#x60;&#x60;, &#x60;&#x60;dependencies&#x60;&#x60;, &#x60;&#x60;auxiliary&#x60;&#x60;, &#x60;&#x60;xrefs&#x60;&#x60;, and &#x60;&#x60;includes&#x60;&#x60;.
     * @param {FilterDirection} [filterDirection] Filter by the direction of the reference. Possible values: &#x60;&#x60;from&#x60;&#x60; and &#x60;&#x60;to&#x60;&#x60;.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    public async getItemRelationshipsRefs(projectId: string, itemId: string, optionalArgs?: { xUserId?: string, filterType?: Array<FilterTypeVersion>, filterId?: Array<string>, filterRefType?: FilterRefType, filterDirection?: FilterDirection, filterExtensionType?: Array<string>, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<RelationshipRefs> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.itemsApi.getItemRelationshipsRefs(optionalArgs?.accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.filterType, optionalArgs?.filterId, optionalArgs?.filterRefType, optionalArgs?.filterDirection, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }


    /**
     * Returns the latest version of the specified item. A project can contain multiple versions of a resource item. The latest version is referred to as the tip version, which is returned by this operation.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Get Tip Version of an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    public async getItemTip(projectId: string, itemId: string, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ItemTip> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.itemsApi.getItemTip(optionalArgs?.accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }


    /**
     * Lists all versions of the specified item. A project can contain multiple versions of a resource item.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary List all Versions of an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {Array<string>} [filterId] Filter by the &#x60;&#x60;id&#x60;&#x60; of the &#x60;&#x60;ref&#x60;&#x60; target.
     * @param {Array<string>} [filterExtensionType] Filter by the extension type.  
     * @param {Array<number>} [filterVersionNumber] Filter by versionNumber.
     * @param {number} [pageNumber] Specifies what page to return. Page numbers are 0-based (the first page is page 0).
     * @param {number} [pageLimit] Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    public async getItemVersions(projectId: string, itemId: string, optionalArgs?: { xUserId?: string, filterId?: Array<string>, filterExtensionType?: Array<string>, filterVersionNumber?: Array<number>, pageNumber?: number, pageLimit?: number, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Versions> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.itemsApi.getItemVersions(optionalArgs?.accessToken, projectId, itemId, optionalArgs?.xUserId, optionalArgs?.filterId, optionalArgs?.filterExtensionType, optionalArgs?.filterVersionNumber, optionalArgs?.pageNumber, optionalArgs?.pageLimit, optionalArgs?.options);
        return response.content;
    }


    /**
     * Updates the ``displayName`` of the specified item. Note that updating the ``displayName`` of an item is not supported for BIM 360 Docs or ACC items.  **Note:** This operation supports Autodesk Construction Cloud (ACC) Projects. For more information, see the [ACC Platform API documentation](https://en.docs.acc.v1/overview/introduction/). 
     * @summary Update an Item
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} itemId The unique identifier of an item.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {ModifyItemPayload} [modifyItemPayload] Describe the item to be patched.
     * @param {string} [accessToken] bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApiInterface
     */
    public async patchItem(projectId: string, itemId: string, modifyItemPayload: ModifyItemPayload, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Item> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.itemsApi.patchItem(optionalArgs?.accessToken, projectId, itemId, optionalArgs?.xUserId, modifyItemPayload, optionalArgs?.options);
        return response.content;
    }

    //#endregion


    //#region Commands

    /**
     * Checks if a user has permission to perform specified actions on specified resources.
     * @summary Execute Check Permission Command
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {CheckPermissionPayload} checkPermissionPayload The payload for the check permission command.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {string} [accessToken] bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApiInterface
     */
    public async executeCheckPermissionCommand(projectId: string, checkPermissionPayload: CheckPermissionPayload, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<CheckPermission> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error('Please provide a valid access token or an authentication provider');
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const commandPayload: CommandPayload = { jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 }, data: checkPermissionPayload };
        const response = await this.commandsApi.executeCommand(optionalArgs?.accessToken, projectId, optionalArgs?.xUserId, commandPayload, optionalArgs?.options);
        return response.content.data as CheckPermission;

    }


    /**
     * Retrieves metadata for up to 50 specified items.
     * @summary Execute List Items Command
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {ListItemsPayload} listItemsPayload The payload for the list items command.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {string} [accessToken] bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApiInterface
     */
    public async executeListItemsCommand(projectId: string, listItemsPayload: ListItemsPayload, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ListItems> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error('Please provide a valid access token or an authentication provider');
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const commandPayload: CommandPayload = { jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 }, data: listItemsPayload };
        const response = await this.commandsApi.executeCommand(optionalArgs?.accessToken, projectId, optionalArgs?.xUserId, commandPayload, optionalArgs?.options);
        return response.content.data as ListItems;

    }


    /**
     * Retrieves the custom relationships between specified versions of items and other resources
     * @summary Execute List Refs Command
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {ListItemsPayload} listItemsPayload The payload for the list items command. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {string} [accessToken] bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApiInterface
     */
    public async executeListRefsCommand(projectId: string, listRefsPayload: ListRefsPayload, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ListRefs> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error('Please provide a valid access token or an authentication provider');
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const commandPayload: CommandPayload = { jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 }, data: listRefsPayload };
        const response = await this.commandsApi.executeCommand(optionalArgs?.accessToken, projectId, optionalArgs?.xUserId, commandPayload, optionalArgs?.options);
        return response.content.data as ListRefs;

    }

    /**
     * Verifies whether a Collaboration for Revit (C4R) model needs to be published to BIM 360 Docs.
     * @summary Execute GetPublishModelJob Command
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {PublishModelJobPayload} PublishModelJobPayload The payload for the get publish model job command. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {string} [accessToken] bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApiInterface
     */
    public async executeGetPublishModelJobCommand(projectId: string, PublishModelJobPayload: PublishModelJobPayload, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<PublishModel> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error('Please provide a valid access token or an authentication provider'
            );
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const commandPayload: CommandPayload = { jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 }, data: PublishModelJobPayload };
        const response = await this.commandsApi.executeCommand(optionalArgs?.accessToken, projectId, optionalArgs?.xUserId, commandPayload, optionalArgs?.options);
        return response.content.data as PublishModel;

    }

    /**
     * Publishes the latest version of a Collaboration for Revit (C4R) model to BIM 360 Docs. 
     * @summary Execute PublishModel Command
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {PublishModelPayload} publishModelPayload The payload for the publish model command.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {string} [accessToken] bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApiInterface
     */
    public async executePublishModelCommand(projectId: string, publishModelPayload: PublishModelPayload, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<PublishModel> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error('Please provide a valid access token or an authentication provider');
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const commandPayload: CommandPayload = { jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 }, data: publishModelPayload };
        const response = await this.commandsApi.executeCommand(optionalArgs?.accessToken, projectId, optionalArgs?.xUserId, commandPayload, optionalArgs?.options);
        return response.content.data as PublishModel;
    }

    /**
     * Publishes the latest version of a Collaboration for Revit (C4R) model without the links it contains to BIM 360 Docs. 
     * @summary Execute PublishWithoutLinks Command
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {PublishModelPayload} publishModelPayload The payload for the publish model command.
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {string} [accessToken] bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApiInterface
     */
    public async executePublishWithoutLinksCommand(projectId: string, publishWithoutLinksPayload: PublishWithoutLinksPayload, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<PublishWithoutLinks> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error('Please provide a valid access token or an authentication provider');
        } else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }

        const commandPayload: CommandPayload = { jsonapi: <JsonApiVersion>{ version: JsonApiVersionValue._10 }, data: publishWithoutLinksPayload };
        const response = await this.commandsApi.executeCommand(optionalArgs?.accessToken, projectId, optionalArgs?.xUserId, commandPayload, optionalArgs?.options);
        return response.content.data as PublishWithoutLinks;
    }

    //#endregion Commands

}

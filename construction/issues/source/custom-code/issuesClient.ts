import { ApiResponse, ApsServiceRequestConfig, BaseClient, IAuthenticationProvider, SdkManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager";
import { IssueAttributeDefinitionsApi, IssueAttributeMappingsApi, IssueCommentsApi, IssueRootCauseCategoriesApi, IssueTypesApi, IssuesApi, IssuesProfileApi } from "../api";
import { Attachments, AttachmentsPayload, AttrDefinitionPage, AttrMappingPage, Comment, CommentsPage, CommentsPayload, DataType, Fields, Issue, IssuePayload, IssuesPage, Region, RootCauseCategoriesPage, SortBy, TypesPage, User } from "../model";
import { IssueAttachmentsApi } from "../api/issue-attachments-api";

export class IssuesClient extends BaseClient {

  public issueAttachmentsApi: IssueAttachmentsApi;
  public issueattributedefinitionsapi: IssueAttributeDefinitionsApi;
  public issueAttributemappingsapi: IssueAttributeMappingsApi;
  public issuecommentsapi: IssueCommentsApi;
  public issuerootcausecategoriesapi: IssueRootCauseCategoriesApi;
  public issuetypesapi: IssueTypesApi;
  public issuesapi: IssuesApi;
  public issuesprofileapi: IssuesProfileApi;
  constructor(optionalArgs?: { sdkManager?: SdkManager, authenticationProvider?: IAuthenticationProvider }) {
    super(optionalArgs?.authenticationProvider);
    if (!optionalArgs?.sdkManager) {
      (optionalArgs ??= {}).sdkManager = SdkManagerBuilder.create().build();
    }
    this.issueAttachmentsApi = new IssueAttachmentsApi(optionalArgs.sdkManager);
    this.issueattributedefinitionsapi = new IssueAttributeDefinitionsApi(optionalArgs.sdkManager);
    this.issueAttributemappingsapi = new IssueAttributeMappingsApi(optionalArgs.sdkManager);
    this.issuecommentsapi = new IssueCommentsApi(optionalArgs.sdkManager);
    this.issuerootcausecategoriesapi = new IssueRootCauseCategoriesApi(optionalArgs.sdkManager);
    this.issuetypesapi = new IssueTypesApi(optionalArgs.sdkManager);
    this.issuesapi = new IssuesApi(optionalArgs.sdkManager);
    this.issuesprofileapi = new IssuesProfileApi(optionalArgs.sdkManager);
  }
  /**
         * Adds attachments to an existing issue.
         * 
         * Links one or more files in Autodesk Docs (uploaded via the Data Management OSS API) to the specified issue.
         *
         * Note that an issue can have up to 100 attachments. Files can include images,
         * PDFs, or other supported formats.
         *
         * For more information about uploading attachments, see the Upload Issue Attachment tutorial.
         * @summary Your POST endpoint
         * @param {string} projectId The ID of the project.
         * @param {AttachmentsPayload} attachmentsPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
  public async addAttachments(projectId: string, attachmentsPayload: AttachmentsPayload, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Attachments> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.issueAttachmentsApi.addAttachments(optionalArgs?.accessToken, projectId, attachmentsPayload, optionalArgs?.options);
    return response.content;
  }
  /**
   * Deletes a specific attachment from an issue in a project.
   * @summary Your DELETE endpoint
   * @param {string} projectId The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the ACC API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
   * @param {string} issueId The unique identifier of the issue. To find the ID, call GET issues.
   * @param {string} attachmentId The unique identifier of the attachment. To find the ID, call GET attachments.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
  */
  public async deleteAttachment(projectId: string, issueId: string, attachmentId: string, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ApiResponse> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.issueAttachmentsApi.deleteAttachment(optionalArgs?.accessToken, projectId, issueId, attachmentId, optionalArgs?.options);
    return response;
  }
  /**
  * Retrieves all attachments for a specific issue in a project.
  * For details about retrieving metadata for a specific attachment, see the Retrieve Issue Attachment tutorial.
  * For details about downloading an attachment, see the Download Issue Attachment tutorial.
  * @summary Your GET endpoint
  * @param {string} projectId The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the ACC API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
  * @param {string} issueId The unique identifier of the issue. To find the ID, call GET issues.
  * @param {*} [options] Override http request option.
  * @throws {RequiredError}
  */
  public async getAttachments(projectId: string, issueId: string, optionalArgs?: { accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Attachments> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.issueAttachmentsApi.getAttachments(optionalArgs?.accessToken, projectId, issueId, optionalArgs?.options);
    return response.content;
  }

  /**
   * Retrieves information about issue custom attributes (custom fields) for a project, including the custom attribute title, description and type.
   * @summary Your GET endpoint
   * @param {string} projectId
   * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
   * 
   * - ``US`` : (Default) Data center for the US region.
   * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
   * - ``AUS`` : (Beta) Data center for Australia.
   * - ``CAN`` : Data center for the Canada region.
   * - ``DEU`` : Data center for the Germany region.
   * - ``IND`` : Data center for the India region.
   * - ``JPN`` : Data center for the Japan region.
   * - ``GBR`` : Data center for the United Kingdom region.
   * 
   * **Note:** Beta features are subject to change. Please do not use in production environments.
   * @param {number} [limit] The number of custom attribute definitions to return in the response payload. For example, limit&#x3D;2. Acceptable values: 1-200. Default value: 200.
   * @param {number} [offset] The number of custom attribute definitions you want to begin retrieving results from.
   * @param {string} [filterCreatedAt] Retrieves items that were created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
   * @param {string} [filterUpdatedAt] Retrieves items that were last updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
   * @param {string} [filterDeletedAt] Retrieves types that were deleted at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
   * @param {Array<DataType>} [filterDataType] Retrieves issue custom attribute definitions with the specified data type. Possible values: list (this corresponds to dropdown in the UI), text, paragraph, numeric. For example, filter[dataType]&#x3D;text,numeric.
   * @param {string} [accessToken] Bearer access token.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IssueAttributeDefinitionsApiInterface
   */
  public async getAttributeDefinitions(projectId: string, optionalArgs?: { xAdsRegion?: Region, limit?: number, offset?: number, filterCreatedAt?: string, filterUpdatedAt?: string, filterDeletedAt?: string, filterDataType?: Array<DataType>, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<AttrDefinitionPage> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    } 
    const response = await this.issueattributedefinitionsapi.getAttributeDefinitions(optionalArgs?.accessToken, projectId, optionalArgs?.xAdsRegion, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.filterCreatedAt, optionalArgs?.filterUpdatedAt, optionalArgs?.filterDeletedAt, optionalArgs?.filterDataType, optionalArgs?.options);
    return response.content;
  }
  /**
   * Retrieves information about the issue custom attributes (custom fields) that are assigned to issue categories and issue types.
   * @summary Your GET endpoint
   * @param {string} projectId The ID of the project.
   * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
   * 
   * - ``US`` : (Default) Data center for the US region.
   * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
   * - ``AUS`` : (Beta) Data center for Australia.
   * - ``CAN`` : Data center for the Canada region.
   * - ``DEU`` : Data center for the Germany region.
   * - ``IND`` : Data center for the India region.
   * - ``JPN`` : Data center for the Japan region.
   * - ``GBR`` : Data center for the United Kingdom region.
   * 
   * **Note:** Beta features are subject to change. Please do not use in production environments.
   * @param {number} [limit] The number of custom attribute mappings to return in the response payload. For example, limit&#x3D;2. Acceptable values: 1-200. Default value: 200.
   * @param {number} [offset] The number of custom attribute mappings you want to begin retrieving results from.
   * @param {string} [filterCreatedAt] Retrieves items that were created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
   * @param {string} [filterUpdatedAt] Retrieves items that were last updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
   * @param {string} [filterDeletedAt] Retrieves types that were deleted at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
   * @param {string} [filterAttributeDefinitionId] Retrieves issue custom attribute mappings associated with the specified issue custom attribute definitions. Separate multiple values with commas. For example: filter[attributeDefinitionId]&#x3D;18ee5858-cbf1-451a-a525-7c6ff8156775.
   * @param {string} [filterMappedItemId] Retrieves issue custom attribute mappings associated with the specified items (project, type, or subtype). Separate multiple values with commas. For example: filter[mappedItemId]&#x3D;18ee5858-cbf1-451a-a525-7c6ff8156775. Note that this does not retrieve inherited custom attribute mappings or custom attribute mappings of descendants.
   * @param accessToken bearer access token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IssueAttributeMappingsApiInterface
   */
  public async getAttributeMappings(projectId: string, optionalArgs?: { xAdsRegion?: Region, limit?: number, offset?: number, filterCreatedAt?: string, filterUpdatedAt?: string, filterDeletedAt?: string, filterAttributeDefinitionId?: string, filterMappedItemId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<AttrMappingPage> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    } 
    const response = await this.issueAttributemappingsapi.getAttributeMappings(optionalArgs?.accessToken, projectId, optionalArgs?.xAdsRegion, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.filterCreatedAt, optionalArgs?.filterUpdatedAt, optionalArgs?.filterDeletedAt, optionalArgs?.filterAttributeDefinitionId, optionalArgs?.filterMappedItemId, optionalArgs?.options);
    return response.content;
  }
  /**
   * Creates a new comment under a specific issue.
   * @summary 
   * @param {string} projectId The ID of the project.
   * @param {string} issueId The unique identifier of the issue.
   * @param {CommentsPayload} commentsPayload The comment data to create.
   * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
   * 
   * - ``US`` : (Default) Data center for the US region.
   * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
   * - ``AUS`` : (Beta) Data center for Australia.
   * - ``CAN`` : Data center for the Canada region.
   * - ``DEU`` : Data center for the Germany region.
   * - ``IND`` : Data center for the India region.
   * - ``JPN`` : Data center for the Japan region.
   * - ``GBR`` : Data center for the United Kingdom region.
   * 
   * **Note:** Beta features are subject to change. Please do not use in production environments.
   * @param {string} [accessToken] Bearer access token.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public async createComments(projectId: string, issueId: string, commentsPayload: CommentsPayload, optionalArgs?: { xAdsRegion?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Comment> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    } 
    const request = await this.issuecommentsapi.createComments(optionalArgs?.accessToken|| await this.authenticationProvider.getAccessToken(), projectId, issueId, optionalArgs?.xAdsRegion, commentsPayload, optionalArgs?.options);
    return request.content;
  }
  /**
   * Get all the comments for a specific issue.
   * @summary Your GET endpoint
   * @param {string} projectId The ID of the project.
   * @param {string} issueId The unique identifier of the issue.
   * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
   * 
   * - ``US`` : (Default) Data center for the US region.
   * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
   * - ``AUS`` : (Beta) Data center for Australia.
   * - ``CAN`` : Data center for the Canada region.
   * - ``DEU`` : Data center for the Germany region.
   * - ``IND`` : Data center for the India region.
   * - ``JPN`` : Data center for the Japan region.
   * - ``GBR`` : Data center for the United Kingdom region.
   * 
   * **Note:** Beta features are subject to change. Please do not use in production environments.
   * @param {string} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
   * @param {string} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination).
   * @param {Array<SortBy>} [sortBy] Sort issue comments by specified fields. Separate multiple values with commas. To sort in descending order add a - (minus sign) before the sort criteria
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public async getComments(projectId: string, issueId: string, optionalArgs?: { xAdsRegion?: Region, limit?: string, offset?: string, sortBy?: Array<SortBy>, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<CommentsPage> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    } 
    const request = await this.issuecommentsapi.getComments(optionalArgs?.accessToken, projectId, issueId, optionalArgs?.xAdsRegion, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.sortBy, optionalArgs?.options);
    return request.content;
  }
  /**
   * Retrieves a list of supported root cause categories and root causes that you can allocate to an issue. For example, communication and coordination.
   * @summary Your GET endpoint
   * @param {string} projectId The ID of the project.
   * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
     * 
     * - ``US`` : (Default) Data center for the US region.
     * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
     * - ``AUS`` : (Beta) Data center for Australia.
     * - ``CAN`` : Data center for the Canada region.
     * - ``DEU`` : Data center for the Germany region.
     * - ``IND`` : Data center for the India region.
     * - ``JPN`` : Data center for the Japan region.
     * - ``GBR`` : Data center for the United Kingdom region.
     * 
     * **Note:** Beta features are subject to change. Please do not use in production environments.
   * @param {string} [include] Add ‘include&#x3D;rootcauses’ to add the root causes for each category.
   * @param {number} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
   * @param {number} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination)
   * @param {string} [filterUpdatedAt] Retrieves root cause categories updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
   * @param accessToken bearer access token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IssueRootCauseCategoriesApiInterface
   */
  public async getRootCauseCategories(projectId: string, optionalArgs?: { xAdsRegion?: Region, include?: string, limit?: number, offset?: number, filterUpdatedAt?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<RootCauseCategoriesPage> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    } 
    const response = await this.issuerootcausecategoriesapi.getRootCauseCategories(optionalArgs?.accessToken, projectId, optionalArgs?.xAdsRegion, optionalArgs?.include, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.filterUpdatedAt, optionalArgs?.options);
    return response.content;
  }
  /**
  * Retrieves a project’s categories and types.
  * @summary Your GET endpoint
  * @param {string} projectId 
  * @param {string} [include] Use include&#x3D;subtypes to include the types (subtypes) for each category (type).
  * @param {number} [limit] Add limit&#x3D;20 to limit the results count (together with the offset to support pagination).
  * @param {number} [offset] Add offset&#x3D;20 to get partial results (together with the limit to support pagination).
  * @param {string} [filterUpdatedAt] Retrieves types that were last updated at the specified date and time, in in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
  * @param {boolean} [filterIsActive] Filter types by status e.g. filter[isActive]&#x3D;true will only return active types. Default value: undefined (meaning both active &amp; inactive issue type categories will return).
  * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
     * 
     * - ``US`` : (Default) Data center for the US region.
     * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
     * - ``AUS`` : (Beta) Data center for Australia.
     * - ``CAN`` : Data center for the Canada region.
     * - ``DEU`` : Data center for the Germany region.
     * - ``IND`` : Data center for the India region.
     * - ``JPN`` : Data center for the Japan region.
     * - ``GBR`` : Data center for the United Kingdom region.
     * 
     * **Note:** Beta features are subject to change. Please do not use in production environments.
  * @param accessToken bearer access token
  * @param {*} [options] Override http request option.
  * @throws {RequiredError}
  * @memberof IssueTypesApiInterface
  */
  public async getIssuesTypes(projectId: string, optionalArgs?: { include?: string, limit?: number, offset?: number, filterUpdatedAt?: string, filterIsActive?: boolean, xAdsRegion?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<TypesPage> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    } 
    const response = await this.issuetypesapi.getIssuesTypes(optionalArgs?.accessToken, projectId, optionalArgs?.include, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.filterUpdatedAt, optionalArgs?.filterIsActive, optionalArgs?.xAdsRegion, optionalArgs?.options)
    return response.content;
  }
  /**
   * Adds an issue to a project.
   * @summary 
   * @param {string} projectId The ID of the project.
   * @param {IssuePayload} issuePayload The issue data to create.
   * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
   * 
   * - ``US`` : (Default) Data center for the US region.
   * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
   * - ``AUS`` : (Beta) Data center for Australia.
   * - ``CAN`` : Data center for the Canada region.
   * - ``DEU`` : Data center for the Germany region.
   * - ``IND`` : Data center for the India region.
   * - ``JPN`` : Data center for the Japan region.
   * - ``GBR`` : Data center for the United Kingdom region.
   * 
   * **Note:** Beta features are subject to change. Please do not use in production environments.
   * @param {string} [accessToken] Bearer access token.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IssuesApiInterface
   */
  public async createIssue(projectId: string, issuePayload: IssuePayload, optionalArgs?: { xAdsRegion?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Issue> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    } 
    const response = await this.issuesapi.createIssue(optionalArgs?.accessToken, projectId, optionalArgs?.xAdsRegion, issuePayload, optionalArgs?.options);
    return response.content;
  }

  /**
   * Retrieves detailed information about a single issue. For general information about all the issues in a project.
   * @summary Your GET endpoint
   * @param {string} projectId The ID of the project.
   * @param {string} issueId The unique identifier of the issue.
   * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
     * 
     * - ``US`` : (Default) Data center for the US region.
     * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
     * - ``AUS`` : (Beta) Data center for Australia.
     * - ``CAN`` : Data center for the Canada region.
     * - ``DEU`` : Data center for the Germany region.
     * - ``IND`` : Data center for the India region.
     * - ``JPN`` : Data center for the Japan region.
     * - ``GBR`` : Data center for the United Kingdom region.
     * 
     * **Note:** Beta features are subject to change. Please do not use in production environments.
   * @param accessToken bearer access token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IssuesApiInterface
   */
  public async getIssueDetails(projectId: string, issueId: string, optionalArgs?: { xAdsRegion?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Issue> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    } 
    const response = await this.issuesapi.getIssueDetails(optionalArgs?.accessToken, projectId, issueId, optionalArgs?.xAdsRegion, optionalArgs?.options);
    return response.content;
  }

  /**
   * Retrieves information about all the issues in a project, including details about their associated comments and attachments.
   * @summary Your GET endpoint
   * @param {string} projectId The ID of the project.
   * @param {Array<string>} [filterId] Filter issues by the unique issue ID. Separate multiple values with commas.
   * @param {Array<string>} [filterIssueTypeId] Filter issues by the unique identifier of the category of the issue. Note that the API name for category is type. Separate multiple values with commas.
   * @param {Array<string>} [filterIssueSubtypeId] Filter issues by the unique identifier of the type of the issue. Note that the API name for type is subtype. Separate multiple values with commas.
   * @param {string} [filterStatus] Filter issues by their status. Separate multiple values with commas.
   * @param {Array<string>} [filterLinkedDocumentUrn] Retrieves pushpin issues associated with the specified files. We support all file types that are compatible with the Files tool. You need to specify the URL-encoded file item IDs.
   * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
     * 
     * - ``US`` : (Default) Data center for the US region.
     * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
     * - ``AUS`` : (Beta) Data center for Australia.
     * - ``CAN`` : Data center for the Canada region.
     * - ``DEU`` : Data center for the Germany region.
     * - ``IND`` : Data center for the India region.
     * - ``JPN`` : Data center for the Japan region.
     * - ``GBR`` : Data center for the United Kingdom region.
     * 
     * **Note:** Beta features are subject to change. Please do not use in production environments.
   * @param {string} [filterDueDate] Filter issues by due date, in one of the following URL-encoded format: YYYY-MM-DD. Separate multiple values with commas.
   * @param {string} [filterStartDate] Filter issues by start date, in one of the following URL-encoded format: YYYY-MM-DD. Separate multiple values with commas.
   * @param {boolean} [filterDeleted] Filter deleted issues. For example, filter[deleted]=true. If set to true it only returns deleted issues. If set to false it only returns undeleted issues. Note that we do not currently support returning both deleted and undeleted issues. Default value: false.
   * @param {string} [filterCreatedAt] Filter issues created at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas
   * @param {Array<string>} [filterCreatedBy] Filter issues by the unique identifier of the user who created the issue. Separate multiple values with commas.
   * @param {string} [filterUpdatedAt] Filter issues updated at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas. 
   * @param {Array<string>} [filterUpdatedBy] Filter issues by the unique identifier of the user who updated the issue. Separate multiple values with commas.
   * @param {Array<string>} [filterAssignedTo] Filter issues by the unique Autodesk ID of the User/Company/Role identifier of the current assignee of this issue. Separate multiple values with commas.
   * @param {Array<string>} [filterRootCauseId] Filter issues by the unique identifier of the type of root cause for the issue. Separate multiple values with commas.
   * @param {Array<string>} [filterLocationId] Retrieves issues associated with the specified location but not the location’s sublocations. To also retrieve issues that relate to the locations’s sublocations use the sublocationId filter. Separate multiple values with commas.
   * @param {Array<string>} [filterSubLocationId] Retrieves issues associated with the specified unique LBS (Location Breakdown Structure) identifier, as well as issues associated with the sub locations of the LBS identifier. Separate multiple values with commas.
   * @param {Array<string>} [filterClosedBy] Filter issues by the unique identifier of the user who closed the issue. Separate multiple values with commas. For Example: A3RGM375QTZ7.
   * @param {string} [filterClosedAt] Filter issues closed at the specified date and time, in one of the following URL-encoded formats: YYYY-MM-DDThh:mm:ss.sz or YYYY-MM-DD. Separate multiple values with commas.
   * @param {string} [filterSearch] Filter issues using ‘search’ criteria. this will filter both title and issues display ID. For example, use filter[search]&#x3D;300
   * @param {number} [filterDisplayId] Filter issues by the chronological user-friendly identifier. Separate multiple values with commas.
   * @param {string} [filterAssignedToType] Filter issues by the type of the current assignee of this issue. Separate multiple values with commas. Possible values: Possible values: user, company, role, null. For Example: user.
   * @param {Map<string, string[]>} [filterCustomAttributes] Filter issues by the custom attributes. Each custom attribute filter should be defined by it’s uuid. For example: filter[customAttributes][f227d940-ae9b-4722-9297-389f4411f010]&#x3D;1,2,3. Separate multiple values with commas.
   * @param {boolean} [filterValid] Only return valid issues (&#x3D;no empty type/subtype). Default value: undefined (meaning will return both valid &amp; invalid issues).
   * @param {number} [limit] Return specified number of issues. Acceptable values are 1-100. Default value: 100.
   * @param {number} [offset] Return issues starting from the specified offset number. Default value: 0.
   * @param {Array<SortBy>} [sortBy] Sort issue comments by specified fields. Separate multiple values with commas. To sort in descending order add a - (minus sign) before the sort criteria
   * @param {Array<Fields>} [fields] Return only specific fields in issue object. Separate multiple values with commas.
   * @param accessToken bearer access token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IssuesApiInterface
   */
  public async getIssues(projectId: string, optionalArgs?: { filterId?: Array<string>, filterIssueTypeId?: Array<string>, filterIssueSubtypeId?: Array<string>, filterStatus?: string, filterLinkedDocumentUrn?: Array<string>, xAdsRegion?: Region, filterDueDate?: string, filterStartDate?: string,filterDeleted?: boolean, filterCreatedAt?: string, filterCreatedBy?: Array<string>, filterUpdatedAt?: string, filterUpdatedBy?: Array<string>, filterAssignedTo?: Array<string>, filterRootCauseId?: Array<string>, filterLocationId?: Array<string>, filterSubLocationId?: Array<string>, filterClosedBy?: Array<string>, filterClosedAt?: string, filterSearch?: string, filterDisplayId?: number, filterAssignedToType?: string, filterCustomAttributes?: Map<string, string[]>, filterValid?: boolean, limit?: number, offset?: number, sortBy?: Array<SortBy>, fields?: Array<Fields>, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<IssuesPage> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    } 
    const response = await this.issuesapi.getIssues(optionalArgs?.accessToken, projectId, optionalArgs?.filterId, optionalArgs?.filterIssueTypeId, optionalArgs?.filterIssueSubtypeId, optionalArgs?.filterStatus, optionalArgs?.filterLinkedDocumentUrn, optionalArgs?.xAdsRegion, optionalArgs?.filterDueDate, optionalArgs?.filterStartDate,optionalArgs?.filterDeleted, optionalArgs?.filterCreatedAt, optionalArgs?.filterCreatedBy, optionalArgs?.filterUpdatedAt, optionalArgs?.filterUpdatedBy, optionalArgs?.filterAssignedTo, optionalArgs?.filterRootCauseId, optionalArgs?.filterLocationId, optionalArgs?.filterSubLocationId, optionalArgs?.filterClosedBy, optionalArgs?.filterClosedAt, optionalArgs?.filterSearch, optionalArgs?.filterDisplayId, optionalArgs?.filterAssignedToType, optionalArgs?.filterCustomAttributes, optionalArgs?.filterValid, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.sortBy, optionalArgs?.fields, optionalArgs?.options);
    return response.content;
  }

  /**
   * Updates an issue.  To verify whether a user can update issues for a specific project, call GET users/me.  To verify which attributes the user can update, call GET issues/:id and check the permittedAttributes and permittedStatuses lists.
   * @summary 
   * @param {string} projectId The ID of the project.
   * @param {string} issueId The unique identifier of the issue.
   * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
     * 
     * - ``US`` : (Default) Data center for the US region.
     * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
     * - ``AUS`` : (Beta) Data center for Australia.
     * - ``CAN`` : Data center for the Canada region.
     * - ``DEU`` : Data center for the Germany region.
     * - ``IND`` : Data center for the India region.
     * - ``JPN`` : Data center for the Japan region.
     * - ``GBR`` : Data center for the United Kingdom region.
     * 
     * **Note:** Beta features are subject to change. Please do not use in production environments.
   * @param {IssuePayload} [issuePayload] 
   * @param accessToken bearer access token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IssuesApiInterface
   */
  public async patchIssueDetails(projectId: string, issueId: string, issuePayload: IssuePayload, optionalArgs?: { xAdsRegion?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Issue> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    } 
    const response = await this.issuesapi.patchIssueDetails(optionalArgs?.accessToken, projectId, issueId, optionalArgs?.xAdsRegion, issuePayload, optionalArgs?.options);
    return response.content;
  }
  /**
   * Returns the current user permissions.
   * @summary Your GET endpoint
   * @param {string} projectId 
   * @param {Region} [xAdsRegion] Specifies where the bucket containing the object is stored. Possible values are:
     * 
     * - ``US`` : (Default) Data center for the US region.
     * - ``EMEA`` : Data center for the European Union, Middle East, and Africa.
     * - ``AUS`` : (Beta) Data center for Australia.
     * - ``CAN`` : Data center for the Canada region.
     * - ``DEU`` : Data center for the Germany region.
     * - ``IND`` : Data center for the India region.
     * - ``JPN`` : Data center for the Japan region.
     * - ``GBR`` : Data center for the United Kingdom region.
     * 
     * **Note:** Beta features are subject to change. Please do not use in production environments.
   * @param accessToken bearer access token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IssuesProfileApiInterface
   */
  public async getUserProfile(projectId: string, optionalArgs?: { xAdsRegion?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<User> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
      (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    } 
    const response = await this.issuesprofileapi.getUserProfile(optionalArgs?.accessToken, projectId, optionalArgs?.xAdsRegion, optionalArgs?.options);
    return response.content;
  }
}

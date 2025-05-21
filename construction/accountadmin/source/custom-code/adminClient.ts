import { ApsServiceRequestConfig, BaseClient, IAuthenticationProvider, SdkManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager";
import { CompaniesApi, ProjectsApi, ProjectUsersApi, AccountUsersApi, BusinessUnitsApi, UserProjectsApi } from "../api";
import { AccessLevels, BusinessUnitsPayload, BusinessUnits, Classification, Company, CompanyImport, CompanyPatchPayload, CompanyPayload, ProjectCompanies, Fields, FilterTextMatch, OrFilters, Platform, Products, Project, ProjectPatch, ProjectPayload, ProjectUser, ProjectUserPayload, ProjectUserDetails, ProjectUsersPage, ProjectUsersImportPayload, ProjectUsersImport, ProjectUsersUpdatePayload, ProjectsPage, Region, SortBy, Status, StatusFilter, User, UserFields, UserImport, UserPatchPayload, UserPayload, UserSortBy, UserProjectFields, FilterUserProjectsAccessLevels, UserProjectSortBy, CompanyOrFilters, FilterCompanySort, FilterCompanyFields, AccountCompaniesPage } from "../model";

export class AdminClient extends BaseClient {
    public companiesApi: CompaniesApi;
    public projectsApi: ProjectsApi;
    public projectUsersApi: ProjectUsersApi;
    public accountUsersApi: AccountUsersApi;
    public businessUnitAPI: BusinessUnitsApi;
    public userProjectsApi: UserProjectsApi;

    constructor(optionalArgs?: { sdkManager?: SdkManager, authenticationProvider?: IAuthenticationProvider }) {
        super(optionalArgs?.authenticationProvider);
        if (!optionalArgs?.sdkManager) {
            (optionalArgs ??= {}).sdkManager = SdkManagerBuilder.create().build();
        }
        this.companiesApi = new CompaniesApi(optionalArgs.sdkManager);
        this.accountUsersApi = new AccountUsersApi(optionalArgs.sdkManager);
        this.projectsApi = new ProjectsApi(optionalArgs.sdkManager);
        this.projectUsersApi = new ProjectUsersApi(optionalArgs.sdkManager);
        this.businessUnitAPI = new BusinessUnitsApi(optionalArgs.sdkManager);
        this.userProjectsApi = new UserProjectsApi(optionalArgs.sdkManager);
    }

    // Project API

    /**
     * Retrieves a project specified by project ID.
     * @summary Get a project by ID
     * @param {string} projectId 
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async getProject(projectId: string, optionalArgs?: { region?: Region, fields?: Array<Fields>, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Project> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.getProject(optionalArgs?.accessToken, projectId, null, optionalArgs?.region, null, optionalArgs?.fields, optionalArgs?.options);
        return response.content;
    }

    /**
     * Retrieves a list of the projects in the specified account.
     * @summary Get Project in account
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {Array<Fields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param {Array<Classification>} [filterClassification] A list of the classifications of projects to include in the response. Possible values: production, template, component, sample.
     * @param {Array<Platform>} [filterPlatform] Filter resource by platform. Possible values: acc and bim360.
     * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
     * @param {string} [filterName] A project name or name pattern to filter projects by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
     * @param {Array<string>} [filterType] A list of project types to filter projects by. To exclude a project type from the response, prefix it with - (a hyphen); for example, -Bridge excludes bridge projects.
     * @param {Array<Status>} [filterStatus] A list of the statuses of projects to include in the response. Possible values:  active pending archived suspended
     * @param {string} [filterBusinessUnitId] The ID of the business unit that returned projects must be associated with.
     * @param {string} [filterJobNumber] The user-defined identifier for a project to be returned. This ID was defined when the project was created. This filter accepts a partial match based on the value of filterTextMatch that you provide.
     * @param {string} [filterUpdatedAt] A range of dates during which the desired projects were updated. The range must be specified with dates in ISO 8601 format with time required. Separate multiple values with commas.
     * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
     * @param {Array<SortBy>} [sort] A list of fields to sort the returned projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
     * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
     * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async getProjects(accountId: string, optionalArgs?: { region?: Region, fields?: Array<Fields>, filterClassification?: Array<Classification>, filterPlatform?: Array<Platform>, filterProducts?: Array<Products>, filterName?: string, filterType?: Array<string>, filterStatus?: Array<Status>, filterBusinessUnitId?: string, filterJobNumber?: string, filterUpdatedAt?: string, filterTextMatch?: FilterTextMatch, sort?: Array<SortBy>, limit?: number, offset?: number, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ProjectsPage> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.getProjects(optionalArgs?.accessToken, accountId, null, optionalArgs?.region, null, optionalArgs?.fields, optionalArgs?.filterClassification, optionalArgs?.filterPlatform, optionalArgs?.filterProducts, optionalArgs?.filterName, optionalArgs?.filterType, optionalArgs?.filterStatus, optionalArgs?.filterBusinessUnitId, optionalArgs?.filterJobNumber, optionalArgs?.filterUpdatedAt, optionalArgs?.filterTextMatch, optionalArgs?.sort, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.options);
        return response.content;
    }

    /**
     * Creates a new project in the specified account. You can create the project directly, or clone the project from a project template.
     * @summary Create new Project
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [adminUserId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectPayload} [projectPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async createProject(accountId: string, projectPayload: ProjectPayload, optionalArgs?: { region?: Region, adminUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Project> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.createProject(optionalArgs?.accessToken, accountId, null, optionalArgs?.region, optionalArgs?.adminUserId, projectPayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Create or update a project’s image.
     * @summary Create or update a project’s image
     * @param {string} projectId The account ID of the project. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} accountId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the BIM 360 API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async createProjectImage(projectId: string, accountId: string, body: File, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ProjectPatch> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectsApi.createProjectImage(optionalArgs?.accessToken, projectId, accountId, body, optionalArgs?.region, optionalArgs?.options);
        return response.content;
    }


    // Company API


    /**
     * Search partner companies in a specific BIM 360 account by name. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Search companies in account by name
     * @param {string} accountId The account ID of the company.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {string} [name] Company name to match Max length: 255
     * @param {string} [trade] Company trade to match Max length: 255
     * @param {string} [operator] Boolean operator to use: OR (default) or AND
     * @param {boolean} [partial] If true (default), perform a fuzzy match
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async searchCompanies(accountId: string, optionalArgs?: { region?: Region, name?: string, trade?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Array<Company>> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.companiesApi.searchCompanies(optionalArgs?.accessToken, accountId, optionalArgs?.region, optionalArgs?.name, optionalArgs?.trade, optionalArgs?.operator, optionalArgs?.partial, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.sort, optionalArgs?.field, optionalArgs?.options);
        return response.content;
    }

    /**
     * Create or update a specific partner company’s image.
     * @summary Create or update a company’s image
     * @param {string} companyId Company ID
     * @param {string} accountId The account ID of the company.
     * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async patchCompanyImage(companyId: string, accountId: string, body: File, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Company> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.companiesApi.patchCompanyImage(optionalArgs?.accessToken, companyId, accountId, body, optionalArgs?.region, optionalArgs?.options);
        return response.content;
    }

    /**
     * Update the properties of only the specified attributes of a specific partner company.
     * @summary Update the properties of company
     * @param {string} companyId Company ID
     * @param {string} accountId The account ID of the company.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {CompanyPatchPayload} [companyPatchPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async patchCompanyDetails(companyId: string, accountId: string, companyPatchPayload: CompanyPatchPayload, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Company> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.companiesApi.patchCompanyDetails(optionalArgs?.accessToken, companyId, accountId, optionalArgs?.region, companyPatchPayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Bulk import partner companies to the company directory in a specific BIM 360 account. (50 companies maximum can be included in each call.) Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Bulk import partner companies
     * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {Array<CompanyPayload>} [companyPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async importCompanies(accountId: string, companyPayload: Array<CompanyPayload>, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<CompanyImport> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.companiesApi.importCompanies(optionalArgs?.accessToken, accountId, optionalArgs?.region, companyPayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Query all the partner companies in a specific BIM 360 project. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get all companies in a project
     * @param {string} accountId The account ID of the company.
     * @param {string} projectId The ID of the project. 
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async getProjectCompanies(accountId: string, projectId: string, optionalArgs?: { region?: Region, limit?: number, offset?: number, sort?: string, field?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Array<ProjectCompanies>> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.companiesApi.getProjectCompanies(optionalArgs?.accessToken, accountId, projectId, optionalArgs?.region, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.sort, optionalArgs?.field, optionalArgs?.options);
        return response.content;
    }

    /**
     * Query the details of a specific partner company.
     * @summary Get details of a company
     * @param {string} companyId Company ID
     * @param {string} accountId The account ID of the company.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async getCompany(companyId: string, accountId: string, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Company> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.companiesApi.getCompany(optionalArgs?.accessToken, companyId, accountId, optionalArgs?.region, optionalArgs?.options);
        return response.content;
    }

    /**
     * Query all the partner companies in a specific BIM 360 account. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get all companies in an account
     * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order  Prepending a field with - sorts in descending order Invalid fields and whitespaces will be ignored
     * @param {string} [field] Comma-separated fields to include in response  id will always be returned Invalid fields will be ignored
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async getCompanies(accountId: string, optionalArgs?: { region?: Region, limit?: number, offset?: number, sort?: string, field?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Array<Company>> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.companiesApi.getCompanies(optionalArgs?.accessToken, accountId, optionalArgs?.region, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.sort, optionalArgs?.field, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns a list of companies in an account.
     * 
     * You can also use this endpoint to filter out the list of companies by setting the filter parameters.
     * 
     * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get account companies
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
     * @param {string} [userId] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
     * @param {string} [filterName] Filter companies by name. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterTrade] Filter companies by trade. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterErpId] Filter companies by ERP Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterTaxId] Filter companies by tax Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterUpdatedAt] Filter companies by updated at date range. The range must be specified with dates in an ISO-8601 format with time required. The start and end dates of the range should be separated by .. One of the dates in the range may be omitted. For example, to get everything on or before June 1, 2019 the range would be ..2019-06-01T23:59:59.999Z. To get everything after June 1, 2019 the range would be 2019-06-01T00:00:00.000Z... Max length: 100
     * @param {Array<CompanyOrFilters>} [orFilters] List of filtered fields to apply an “or” operator. Valid list of fields are erpId, name, taxId, trade, updatedAt.
     * @param {FilterTextMatch} [filterTextMatch] Defines how text-based filters should match results. Possible values: contains (default) – Returns results where the text appears anywhere in the field. startsWith – Matches only if the field starts with the given value. endsWith – Matches only if the field ends with the given value. equals – Matches only if the field is an exact match.
     * @param {Array<FilterCompanySort>} [sort] The list of fields to sort by. When multiple fields are listed the later property is used to sort the resources where the previous fields have the same value. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). If no direction is specified then asc is assumed. Valid fields for sorting are name, trade, erpId, taxId, status, createdAt, updatedAt, projectSize and userSize. Default sort is name.
     * @param {Array<FilterCompanyFields>} [fields] List of fields to return in the response. Defaults to all fields. Valid list of fields are accountId, name, trade, addresses, websiteUrl, description, erpId, taxId, imageUrl, status, createdAt, updatedAt, projectSize, userSize and originalName.
     * @param {number} [limit] The maximum number of records per request. Default: 20. Minimum: 1, Maximum: 200. If a value greater than 200 is provided, only 200 records are returned.
     * @param {number} [offset] The record number to start returning results from, used for pagination. For example, if limit=20 and offset=20, the request retrieves the second page of results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public async getAccountCompanies(accountId: string, optionalArgs?: { region?: Region, userId?: string, filterName?: string, filterTrade?: string, filterErpId?: string, filterTaxId?: string, filterUpdatedAt?: string, orFilters?: Array<CompanyOrFilters>, filterTextMatch?: FilterTextMatch, sort?: Array<FilterCompanySort>, fields?: Array<FilterCompanyFields>, limit?: number, offset?: number, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<AccountCompaniesPage> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.companiesApi.getAccountCompanies(optionalArgs?.accessToken, accountId, optionalArgs?.region, optionalArgs?.userId, optionalArgs?.filterName, optionalArgs?.filterTrade, optionalArgs?.filterErpId, optionalArgs?.filterTaxId, optionalArgs?.filterUpdatedAt, optionalArgs?.orFilters, optionalArgs?.filterTextMatch, optionalArgs?.sort, optionalArgs?.fields, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.options);
        return response.content;
    }

    /**
     * Create a new partner company. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Create a new partner company
     * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {CompanyPayload} [companyPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async createCompany(accountId: string, companyPayload: CompanyPayload, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Company> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.companiesApi.createCompany(optionalArgs?.accessToken, accountId, optionalArgs?.region, companyPayload, optionalArgs?.options);
        return response.content;
    }


    // Project-User API


    /**
     * Retrieves detailed information about the specified user in a project.  There are two primary reasons to do this:  To verify that a user assigned to the specified project has been activated as a member of the project. To check other information about the user, such as their project user ID, roles, and products.
     * @summary Get project user
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {Array<UserFields>} [fields] A comma-separated list of the project fields to include in the response. Default value: all fields.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async getProjectUser(projectId: string, userId: string, optionalArgs?: { region?: Region, fields?: any, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ProjectUser> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectUsersApi.getProjectUser(optionalArgs?.accessToken, projectId, userId, null, optionalArgs?.region, null, optionalArgs?.fields, optionalArgs?.options);
        return response.content;
    }

    /**
     * Assigns a user to the specified project.
     * @summary Assigns a user to the specified project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [adminUserId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUserPayload} [projectUserPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async assignProjectUser(projectId: string, projectUserPayload: ProjectUserPayload, optionalArgs?: { region?: Region, adminUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ProjectUserDetails> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectUsersApi.assignProjectUser(optionalArgs?.accessToken, projectId, null, optionalArgs?.region, optionalArgs?.adminUserId, projectUserPayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Retrieves information about a filtered subset of users in the specified project.  There are two primary reasons to do this:  To verify that all users assigned to the project have been activated as members of the project. To check other information about users, such as their project user ID, roles, and products. Note that if you want to retrieve information about users associated with a particular Autodesk account, call the GET users endpoint.
     * @summary Get project users
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {Array<Products>} [filterProducts] A comma-separated list of the products that the returned projects must use. Only projects that use one or more of the listed products are returned.
     * @param {string} [filterName] A user name or name pattern to filter users by. Can be a partial match based on the value of filterTextMatch that you provide; for example: filter[name]&#x3D;ABCco filterTextMatch&#x3D;startsWith.  Max length: 255
     * @param {string} [filterEmail] A user email address or address pattern that the returned users must have. This can be a partial match based on the value of filterTextMatch that you provide. For example:  filter[email]&#x3D;sample filterTextMatch&#x3D;startsWith  Max length: 255
     * @param {Array<StatusFilter>} [filterStatus] A list of statuses that the returned project users must be in. The default values are active and pending.
     * @param {Array<AccessLevels>} [filterAccessLevels] A list of user access levels that the returned users must have.
     * @param {string} [filterCompanyId] The ID of a company that the returned users must represent.
     * @param {string} [filterCompanyName] The name of a company that returned users must be associated with. Can be a partial match based on the value of filterTextMatch that you provide. For example: filter[companyName]&#x3D;Sample filterTextMatch&#x3D;startsWith  Max length: 255
     * @param {Array<string>} [filterAutodeskId] A list of the Autodesk IDs of users to retrieve.
     * @param {Array<string>} [filterId] A list of the ACC IDs of users to retrieve.
     * @param {string} [filterRoleId] The ID of a user role that the returned users must have. To obtain a role ID for this filter, you can inspect the roleId field in previous responses to this endpoint or to the GET projects/:projectId/users/:userId endpoint.  Max length: 255
     * @param {Array<string>} [filterRoleIds] A list of the IDs of user roles that the returned users must have. To obtain a role ID for this filter, you can inspect the roleId field in previous responses to this endpoint or to the GET projects/:projectId/users/:userId endpoint.
     * @param {Array<UserSortBy>} [sort] A list of fields to sort the returned users by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field.
     * @param {Array<UserFields>} [fields] A list of the project fields to include in the response. Default value: all fields.
     * @param {Array<OrFilters>} [orFilters] A list of user fields to combine with the SQL OR operator for filtering the returned project users. The OR is automatically incorporated between the fields; any one of them can produce a valid match.
     * @param {FilterTextMatch} [filterTextMatch] When filtering on a text-based field, this value indicates how to do the matching. Default value: contains. Possible values: contains, startsWith, endsWith and equals.
     * @param {number} [limit] The maximum number of records to return in a single request. Possible range: 1-200. Default value: 20.
     * @param {number} [offset] The record number that the returned page should start with. When the total number of records exceeds the value of limit, increase the offset value in subsequent requests to continue getting the remaining results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async getProjectUsers(projectId: string, optionalArgs?: { region?: Region, filterProducts?: Array<Products>, filterName?: string, filterEmail?: string, filterStatus?: Array<StatusFilter>, filterAccessLevels?: Array<AccessLevels>, filterCompanyId?: string, filterCompanyName?: string, filterAutodeskId?: Array<string>, filterId?: Array<string>, filterRoleId?: string, filterRoleIds?: Array<string>, sort?: Array<UserSortBy>, fields?: Array<UserFields>, orFilters?: Array<OrFilters>, filterTextMatch?: FilterTextMatch, limit?: number, offset?: number, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ProjectUsersPage> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectUsersApi.getProjectUsers(optionalArgs?.accessToken, projectId, null, optionalArgs?.region, null, optionalArgs?.filterProducts, optionalArgs?.filterName, optionalArgs?.filterEmail, optionalArgs?.filterStatus, optionalArgs?.filterAccessLevels, optionalArgs?.filterCompanyId, optionalArgs?.filterCompanyName, optionalArgs?.filterAutodeskId, optionalArgs?.filterId, optionalArgs?.filterRoleId, optionalArgs?.filterRoleIds, optionalArgs?.sort, optionalArgs?.fields, optionalArgs?.orFilters, optionalArgs?.filterTextMatch, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.options);
        return response.content;
    }

    /**
     * Assigns multiple users to a project at once. This endpoint can assign up to 200 users per request.
     * @summary Assigns multiple users to a project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [adminUserId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersImportPayload} [projectUsersImportPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async importProjectUsers(projectId: string, projectUsersImportPayload: ProjectUsersImportPayload, optionalArgs?: { region?: Region, adminUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ProjectUsersImport> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectUsersApi.importProjectUsers(optionalArgs?.accessToken, projectId, null, optionalArgs?.region, optionalArgs?.adminUserId, projectUsersImportPayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Removes the specified user from a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Remove Project User
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [adminUserId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async removeProjectUser(projectId: string, userId: string, optionalArgs?: { region?: Region, adminUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<void> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectUsersApi.removeProjectUser(optionalArgs?.accessToken, projectId, userId, null, optionalArgs?.region, optionalArgs?.adminUserId, optionalArgs?.options);
        return response.content;
    }

    /**
     * Updates information about the specified user in a project.  Note that the Authorization header token can be obtained either via a three-legged OAuth flow, or via a two-legged Oauth flow with user impersonation, for which the User-Id header is also required.
     * @summary Update user in project
     * @param {string} projectId The ID of the project. This corresponds to project ID in the Data Management API. To convert a project ID in the Data Management API into a project ID in the ACC API you need to remove the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {Region} [region] The region where the bucket resides. Acceptable values: US, EMEA, AUS.
     * @param {string} [adminUserId] Note that this header is not relevant for Account Admin GET endpoints. The ID of a user on whose behalf your API request is acting. Required if you’re using a 2-legged authentication context, which must be 2-legged OAuth2 security with user impersonation.  Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).
     * @param {ProjectUsersUpdatePayload} [projectUsersUpdatePayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectUsersApi
     */
    public async updateProjectUser(projectId: string, userId: string, projectUsersUpdatePayload: ProjectUsersUpdatePayload, optionalArgs?: { region?: Region, adminUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ProjectUserDetails> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.projectUsersApi.updateProjectUser(optionalArgs?.accessToken, projectId, userId, null, optionalArgs?.region, optionalArgs?.adminUserId, projectUsersUpdatePayload, optionalArgs?.options);
        return response.content;
    }


    // User API


    /**
     * Create a new user in the BIM 360 member directory.
     * @summary Create User
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {UserPayload} [userPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    public async createUser(accountId: string, userPayload: UserPayload, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<User> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.accountUsersApi.createUser(optionalArgs?.accessToken, accountId, optionalArgs?.region, userPayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Query the details of a specific user.
     * @summary Get the details of a user
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    public async getUser(accountId: string, userId: string, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<User> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.accountUsersApi.getUser(optionalArgs?.accessToken, accountId, userId, optionalArgs?.region, optionalArgs?.options);
        return response.content;
    }

    /**
     * Query all the users in a specific BIM 360 account.
     * @summary Get account users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    public async getUsers(accountId: string, optionalArgs?: { region?: Region, limit?: number, offset?: number, sort?: string, field?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Array<User>> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.accountUsersApi.getUsers(optionalArgs?.accessToken, accountId, optionalArgs?.region, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.sort, optionalArgs?.field, optionalArgs?.options);
        return response.content;
    }

    /**
     * Bulk import users to the master member directory in a BIM 360 account. (50 users maximum can be included in each call.)
     * @summary Bulk import users
     * @param {string} accountId The account ID of the users. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {Array<UserPayload>} [userPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    public async importUsers(accountId: string, userPayload: Array<UserPayload>, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<UserImport> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.accountUsersApi.importUsers(optionalArgs?.accessToken, accountId, optionalArgs?.region, userPayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Update a specific user’s status or default company.
     * @summary Update User
     * @param {string} accountId The account ID of the user.
     * @param {string} userId User ID
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {UserPatchPayload} [userPatchPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    public async patchUserDetails(accountId: string, userId: string, userPatchPayload: UserPatchPayload, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<User> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.accountUsersApi.patchUserDetails(optionalArgs?.accessToken, accountId, userId, optionalArgs?.region, userPatchPayload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Search users in the master member directory of a specific BIM 360 account by specified fields.
     * @summary Search Users
     * @param {string} accountId The account ID of the users.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {string} [name] User name to match Max length: 255
     * @param {string} [email] User email to match Max length: 255
     * @param {string} [companyName] User company to match Max length: 255
     * @param {string} [operator] Boolean operator to use: OR (default) or AND
     * @param {boolean} [partial] If true (default), perform a fuzzy match
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountUsersApi
     */
    public async searchUsers(accountId: string, optionalArgs?: { region?: Region, name?: string, email?: string, companyName?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Array<User>> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.accountUsersApi.searchUsers(optionalArgs?.accessToken, accountId, optionalArgs?.region, optionalArgs?.name, optionalArgs?.email, optionalArgs?.companyName, optionalArgs?.operator, optionalArgs?.partial, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.sort, optionalArgs?.field, optionalArgs?.options);
        return response.content;
    }


    // Business-Units API


    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Get Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessUnitsApi
     */
    public async getBusinessUnits(accountId: string, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<BusinessUnits> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.businessUnitAPI.getBusinessUnits(optionalArgs?.accessToken, accountId, optionalArgs?.region, optionalArgs?.options);
        return response.content;
    }

    /**
     * Query all the business units in a specific BIM 360 account.
     * @summary Create Business Units
     * @param {string} accountId The account ID of the business unit. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS. By default, it is set to US.
     * @param {BusinessUnitsRequestPyload} [businessUnitsRequestPyload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessUnitsApi
     */
    public async createBusinessUnits(accountId: string, businessUnitsRequestPyload: BusinessUnitsPayload, optionalArgs?: { region?: Region, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<BusinessUnits> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.businessUnitAPI.createBusinessUnits(optionalArgs?.accessToken, accountId, optionalArgs?.region, businessUnitsRequestPyload, optionalArgs?.options);
        return response.content;
    }

    /**
     * Returns a list of projects for a specified user within an Autodesk Construction Cloud (ACC) or BIM 360 account. Only projects the user participates in will be returned. The calling user must be an account administrator.
     * @summary Get user projects
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {string} userId The ID of the user. You can use either the ACC ID (id) or the Autodesk ID (autodeskId).
     * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA. For a complete list of supported regions, see the Regions page.
     * @param {string} [adminUserId] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
     * @param {Array<string>} [filterId] A list of project IDs to filter by.
     * @param {Array<UserProjectFields>} [fields] A comma-separated list of user project fields to include in the response. If not specified, all available fields are included by default. Possible values: accessLevels, accountId, addressLine1, addressLine2, city, constructionType, country, createdAt, classification, deliveryMethod, endDate, imageUrl, jobNumber, latitude, longitude, name, platform, postalCode, projectValue, sheetCount, startDate, stateOrProvince, status, thumbnailImageUrl, timezone, type, updatedAt, contractType and currentPhase.
     * @param {Array<Classification>} [filterClassification] Filters projects by classification. Possible values: production – Standard production projects. template – Project templates that can be cloned to create production projects. component – Placeholder projects that contain standardized components (e.g., forms) for use across projects. Only one component project is permitted per account. Known as a library in the ACC unified products UI. sample – The single sample project automatically created upon ACC trial setup. Only one sample project is permitted per account.  Max length: 255
     * @param {string} [filterName] Filters projects by name. Supports partial matches when used with filterTextMatch. For example filter[name]=ABCco&filterTextMatch=startsWith returns projects whose names start with “ABCco”. Max length: 255
     * @param {Array<Platform>} [filterPlatform] Filters by platform. Possible values: acc (Autodesk Construction Cloud) and bim360 (BIM 360). Max length: 255
     * @param {Array<Status>} [filterStatus] Filters projects by status. Possible values: active, pending, archived, suspended.
     * @param {Array<string>} [filterType] Filters by project type. To exclude a type, prefix it with - (e.g., -Bridge excludes bridge projects). Possible values: Airport, Assisted Living / Nursing Home, Bridge, Canal / Waterway, Convention Center, Court House, Data Center, Dams / Flood Control / Reservoirs, Demonstration Project, Dormitory, Education Facility, Government Building, Harbor / River Development, Hospital, Hotel / Motel, Library, Manufacturing / Factory, Medical Laboratory, Medical Office, Military Facility, Mining Facility, Multi-Family Housing, Museum, Oil & Gas,``Plant``, Office, OutPatient Surgery Center, Parking Structure / Garage, Performing Arts, Power Plant, Prison / Correctional Facility, Rail, Recreation Building, Religious Building, Research Facility / Laboratory, Restaurant, Retail, Seaport, Single-Family Housing, Solar Farm, Stadium/Arena, Streets / Roads / Highways, Template Project, Theme Park, Training Project, Transportation Building, Tunnel, Utilities, Warehouse (non-manufacturing), Waste Water / Sewers, Water Supply, Wind Farm.
     * @param {string} [filterJobNumber] Filters by a user-defined project identifier. Supports partial matches when used with filterTextMatch. For example, filter[jobNumber]=HP-0002&filterTextMatch=equals returns projects where the job number is exactly “HP-0002”. Max length: 255
     * @param {string} [filterUpdatedAt] Filters projects updated within a specific date range in ISO 8601 format. For example: Date range: 2023-03-02T00:00:00.000Z..2023-03-03T23:59:59 .999Z Specific start date: 2023-03-02T00:00:00.000Z.. Specific end date: ..2023-03-02T23:59:59.999Z  For more details, see JSON API Filtering.  Max length: 100
     * @param {Array<FilterUserProjectsAccessLevels>} [filterAccessLevels] Filters projects by user access level. Possible values: projectAdmin, projectMember. Max length: 255
     * @param {FilterTextMatch} [filterTextMatch] Defines how text-based filters should match results. Possible values: contains (default) – Returns results where the text appears anywhere in the field. startsWith – Matches only if the field starts with the given value. endsWith – Matches only if the field ends with the given value. equals – Matches only if the field is an exact match.
     * @param {Array<UserProjectSortBy>} [sort] A list of fields to sort the returned user projects by. Multiple sort fields are applied in sequence order — each sort field produces groupings of projects with the same values of that field; the next sort field applies within the groupings produced by the previous sort field. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). The default is asc.  Possible values: name (the default), startDate, endDate, type, status, jobNumber, constructionType, deliveryMethod, contractType, currentPhase, createdAt, updatedAt and platform.
     * @param {number} [limit] The maximum number of records per request. Default: 20. Minimum: 1, Maximum: 200. If a value greater than 200 is provided, only 200 records are returned.
     * @param {number} [offset] The record number to start returning results from, used for pagination. For example, if limit=20 and offset=20, the request retrieves the second page of results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserProjectsApi
     */
    public async getUserProjects(accountId: string, userId: string, optionalArgs?: { region?: Region, adminUserId?: string, filterId?: Array<string>, fields?: Array<UserProjectFields>, filterClassification?: Array<Classification>, filterName?: string, filterPlatform?: Array<Platform>, filterStatus?: Array<Status>, filterType?: Array<string>, filterJobNumber?: string, filterUpdatedAt?: string, filterAccessLevels?: Array<FilterUserProjectsAccessLevels>, filterTextMatch?: FilterTextMatch, sort?: Array<UserProjectSortBy>, limit?: number, offset?: number, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<ProjectsPage> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.userProjectsApi.getUserProjects(optionalArgs?.accessToken, accountId, userId, optionalArgs?.region, optionalArgs?.adminUserId, optionalArgs?.filterId, optionalArgs?.fields, optionalArgs?.filterClassification, optionalArgs?.filterName, optionalArgs?.filterPlatform, optionalArgs?.filterStatus, optionalArgs?.filterType, optionalArgs?.filterJobNumber, optionalArgs?.filterUpdatedAt, optionalArgs?.filterAccessLevels, optionalArgs?.filterTextMatch, optionalArgs?.sort, optionalArgs?.limit, optionalArgs?.offset, optionalArgs?.options);
        return response.content;
    }
}

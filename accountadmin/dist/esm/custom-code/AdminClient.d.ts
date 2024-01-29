/// <reference types="node" />
import { ApsServiceRequestConfig, SDKManager } from "autodesk-sdkmanager";
import { CompaniesApi, ProjectsApi, ProjectUsersApi, AccountUsersApi, BusinessUnitsApi } from "../api";
import { AccessLevels, BusinessUnitsRequestPyload, BusinessUnitsResponse, Classification, Company, CompanyImportResponse, CompanyPatchPayload, CompanyPayload, CompanyResponse, Fields, FilterTextMatch, OrFilters, Platform, Products, Project, ProjectPatchResponse, ProjectPayload, ProjectUser, ProjectUserPayload, ProjectUserResponse, ProjectUsers, ProjectUsersImportPayload, ProjectUsersImportResponse, ProjectUsersUpdatePayload, Projects, Region, SortBy, Status, StatusFilter, Type, User, UserFields, UserImportResponse, UserPatchPayload, UserPayload, UserSortBy } from "../model";
export declare class AdminClient {
    companiesApi: CompaniesApi;
    projectsApi: ProjectsApi;
    projectUsersApi: ProjectUsersApi;
    accountUsersApi: AccountUsersApi;
    businessUnitAPI: BusinessUnitsApi;
    constructor(sdkManager: SDKManager);
    GetProjectAsync(accessToken: string, projectId: string, region?: Region, fields?: Array<Fields>): Promise<Project>;
    GetProjectsAsync(accessToken: string, accountId: string, region?: Region, fields?: Array<Fields>, filterClassification?: Array<Classification>, filterPlatform?: Array<Platform>, filterProducts?: Array<Products>, filterName?: string, filterType?: Array<Type>, filterStatus?: Array<Status>, filterBusinessUnitId?: string, filterJobNumber?: string, filterUpdatedAt?: string, filterTextMatch?: FilterTextMatch, sort?: Array<SortBy>, limit?: number, offset?: number): Promise<Projects>;
    CreateProjectAsync(accessToken: string, accountId: string, region?: Region, projectPayload?: ProjectPayload): Promise<Project>;
    CreateProjectImageAsync(accessToken: string, projectId: string, accountId: string, body: Buffer, region?: Region): Promise<ProjectPatchResponse>;
    searchCompaniesAsync(accessToken: string, accountId: string, region?: Region, name?: string, trade?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string): Promise<Array<Company>>;
    patchCompanyImage(accessToken: string, companyId: string, accountId: string, body: File, region?: Region): Promise<Company>;
    patchCompanyDetailsAsync(accessToken: string, companyId: string, accountId: string, region?: Region, companyPatchPayload?: CompanyPatchPayload): Promise<Company>;
    importCompaniesAsync(accessToken: string, accountId: string, region?: Region, companyPayload?: Array<CompanyPayload>): Promise<CompanyImportResponse>;
    getProjectCompaniesAsync(accessToken: string, accountId: string, projectId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string): Promise<Array<CompanyResponse>>;
    getCompanyAsync(accessToken: string, companyId: string, accountId: string, region?: Region): Promise<Company>;
    getCompaniesAsync(accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string): Promise<Array<Company>>;
    createCompanyAsync(accessToken: string, accountId: string, region?: Region, companyPayload?: CompanyPayload): Promise<Company>;
    getProjectUserAsync(accessToken: string, projectId: string, userId: string, region?: Region, fields?: any): Promise<ProjectUser>;
    assignProjectUserAsync(accessToken: string, projectId: string, region?: Region, projectUserPayload?: ProjectUserPayload): Promise<ProjectUserResponse>;
    getProjectUsersAsync(accessToken: string, projectId: string, region?: Region, filterProducts?: Array<Products>, filterName?: string, filterEmail?: string, filterStatus?: Array<StatusFilter>, filterAccessLevels?: Array<AccessLevels>, filterCompanyId?: string, filterCompanyName?: string, filterAutodeskId?: Array<string>, filterId?: Array<string>, filterRoleId?: string, filterRoleIds?: Array<string>, sort?: Array<UserSortBy>, fields?: Array<UserFields>, orFilters?: Array<OrFilters>, filterTextMatch?: FilterTextMatch, limit?: number, offset?: number): Promise<ProjectUsers>;
    importProjectUsersAsync(accessToken: string, projectId: string, region?: Region, projectUsersImportPayload?: ProjectUsersImportPayload): Promise<ProjectUsersImportResponse>;
    removeProjectUserAsync(accessToken: string, projectId: string, userId: string, region?: Region): Promise<void>;
    updateProjectUserAsync(accessToken: string, projectId: string, userId: string, region?: Region, projectUsersUpdatePayload?: ProjectUsersUpdatePayload): Promise<ProjectUserResponse>;
    createUserAsync(accessToken: string, accountId: string, region?: Region, userPayload?: UserPayload): Promise<User>;
    getUserAsync(accessToken: string, accountId: string, userId: string, region?: Region): Promise<User>;
    getUsersAsync(accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string): Promise<Array<User>>;
    importUsersAsync(accessToken: string, accountId: string, region?: Region, userPayload?: Array<UserPayload>): Promise<UserImportResponse>;
    patchUserDetailsAsync(accessToken: string, accountId: string, userId: string, region?: Region, userPatchPayload?: UserPatchPayload): Promise<User>;
    searchUsersAsync(accessToken: string, accountId: string, region?: Region, name?: string, email?: string, companyName?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string): Promise<Array<User>>;
    getBusinessUnitsAsync(accessToken: string, accountId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<BusinessUnitsResponse>;
    createBusinessUnitsAsync(accessToken: string, accountId: string, region?: Region, businessUnitsRequestPyload?: BusinessUnitsRequestPyload, options?: ApsServiceRequestConfig): Promise<BusinessUnitsResponse>;
}

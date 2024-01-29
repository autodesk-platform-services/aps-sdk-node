import { ApsServiceRequestConfig, SDKManager, SdkManagerBuilder } from "autodesk-sdkmanager"; 



import {CompaniesApi, ProjectsApi, ProjectUsersApi, AccountUsersApi, BusinessUnitsApi} from "../api";
import { RequestArgs } from "../base";
import { AccessLevels, BusinessUnitsRequestPyload, BusinessUnitsResponse, Classification, Company, CompanyImportResponse, CompanyPatchPayload, CompanyPayload, CompanyResponse, Fields, FilterTextMatch, OrFilters, Platform, Products, Project, ProjectPatchResponse, ProjectPayload, ProjectUser, ProjectUserPayload, ProjectUserResponse, ProjectUsers, ProjectUsersImportPayload, ProjectUsersImportResponse, ProjectUsersUpdatePayload, Projects, Region, SortBy, Status, StatusFilter, Type, User, UserFields, UserImportResponse, UserPatchPayload, UserPayload, UserSortBy } from "../model";

export class AdminClient {
    public companiesApi: CompaniesApi;
    public projectsApi: ProjectsApi;
    public projectUsersApi: ProjectUsersApi;
    public accountUsersApi: AccountUsersApi;
    public businessUnitAPI: BusinessUnitsApi;

    constructor(sdkManager: SDKManager) {
        this.companiesApi = new CompaniesApi(sdkManager);
        this.accountUsersApi = new AccountUsersApi(sdkManager);
        this.projectsApi = new ProjectsApi(sdkManager);
        this.projectUsersApi = new ProjectUsersApi(sdkManager);
        this.businessUnitAPI = new BusinessUnitsApi(sdkManager);
    }

    // Project API

    public async GetProjectAsync(accessToken: string, projectId: string, region?: Region, fields?: Array<Fields>): Promise<Project> {
        const response = await this.projectsApi.getProject(accessToken, projectId, null, region, null, fields);
        return response.content;
    }
    public async GetProjectsAsync(accessToken: string, accountId: string, region?: Region, fields?: Array<Fields>, filterClassification?: Array<Classification>, filterPlatform?: Array<Platform>, filterProducts?: Array<Products>, filterName?: string, filterType?: Array<Type>, filterStatus?: Array<Status>, filterBusinessUnitId?: string, filterJobNumber?: string, filterUpdatedAt?: string, filterTextMatch?: FilterTextMatch, sort?: Array<SortBy>, limit?: number, offset?: number): Promise<Projects> {
        const response = await this.projectsApi.getProjects(accessToken, accountId, null, region, null, fields, filterClassification, filterPlatform, filterProducts, filterName, filterType, filterStatus, filterBusinessUnitId, filterJobNumber, filterUpdatedAt, filterTextMatch, sort, limit, offset);
        return response.content;
    }
    public async CreateProjectAsync(accessToken: string, accountId: string, region?: Region, projectPayload?: ProjectPayload): Promise<Project> {
        const response = await this.projectsApi.createProject(accessToken, accountId, null, region, null, projectPayload);
        return response.content;
    }
    public async CreateProjectImageAsync(accessToken: string, projectId: string, accountId: string, body: Buffer, region?: Region): Promise<ProjectPatchResponse> {
        const response = await this.projectsApi.createProjectImage(accessToken, projectId, accountId, body, region);
        return response.content;
    }

    // Company API

    public async searchCompaniesAsync(accessToken: string, accountId: string, region?: Region, name?: string, trade?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string): Promise<Array<Company>> {
        const response = await this.companiesApi.searchCompanies(accessToken, accountId, region, name, trade, operator, partial, limit, offset, sort, field);
        return response.content;
    }
    public async patchCompanyImage(accessToken: string, companyId: string, accountId: string, body: File, region?: Region): Promise<Company> {
        const response = await this.companiesApi.patchCompanyImage(accessToken, companyId, accountId, body, region);
        return response.content;
    }
    public async patchCompanyDetailsAsync(accessToken: string, companyId: string, accountId: string, region?: Region, companyPatchPayload?: CompanyPatchPayload): Promise<Company> {
        const response = await this.companiesApi.patchCompanyDetails(accessToken, companyId, accountId, region, companyPatchPayload);
        return response.content;
    }
    public async importCompaniesAsync(accessToken: string, accountId: string, region?: Region, companyPayload?: Array<CompanyPayload>): Promise<CompanyImportResponse> {
        const response = await this.companiesApi.importCompanies(accessToken, accountId, region, companyPayload);
        return response.content;
    }
    public async getProjectCompaniesAsync(accessToken: string, accountId: string, projectId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string): Promise<Array<CompanyResponse>> {
        const response = await this.companiesApi.getProjectCompanies(accessToken, accountId, projectId, region, limit, offset, sort, field);
        return response.content;
    }
    public async getCompanyAsync(accessToken: string, companyId: string, accountId: string, region?: Region): Promise<Company> {
        const response = await this.companiesApi.getCompany(accessToken, companyId, accountId, region);
        return response.content;
    }
    public async getCompaniesAsync(accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string): Promise<Array<Company>> {
        const response = await this.companiesApi.getCompanies(accessToken, accountId, region, limit, offset, sort, field);
        return response.content;
    }
    public async createCompanyAsync(accessToken: string, accountId: string, region?: Region, companyPayload?: CompanyPayload): Promise<Company> {
        const response = await this.companiesApi.createCompany(accessToken, accountId, region, companyPayload);
        return response.content;
    }



    // Project-User API

    public async getProjectUserAsync(accessToken: string, projectId: string, userId: string, region?: Region, fields?: any): Promise<ProjectUser> {
        const response = await this.projectUsersApi.getProjectUser(accessToken, projectId, userId, null, region, null, fields);
        return response.content;
    }
    public async assignProjectUserAsync(accessToken: string, projectId: string, region?: Region, projectUserPayload?: ProjectUserPayload): Promise<ProjectUserResponse> {
        const response = await this.projectUsersApi.assignProjectUser(accessToken, projectId, null, region, null, projectUserPayload);
        return response.content;
    }
    public async getProjectUsersAsync(accessToken: string, projectId: string, region?: Region, filterProducts?: Array<Products>, filterName?: string, filterEmail?: string, filterStatus?: Array<StatusFilter>, filterAccessLevels?: Array<AccessLevels>, filterCompanyId?: string, filterCompanyName?: string, filterAutodeskId?: Array<string>, filterId?: Array<string>, filterRoleId?: string, filterRoleIds?: Array<string>, sort?: Array<UserSortBy>, fields?: Array<UserFields>, orFilters?: Array<OrFilters>, filterTextMatch?: FilterTextMatch, limit?: number, offset?: number): Promise<ProjectUsers> {
        const response = await this.projectUsersApi.getProjectUsers(accessToken, projectId, null, region, null, filterProducts, filterName, filterEmail, filterStatus, filterAccessLevels, filterCompanyId, filterCompanyName, filterAutodeskId, filterId, filterRoleId, filterRoleIds, sort, fields, orFilters, filterTextMatch, limit, offset);
        return response.content;
    }
    public async importProjectUsersAsync(accessToken: string, projectId: string, region?: Region, projectUsersImportPayload?: ProjectUsersImportPayload): Promise<ProjectUsersImportResponse> {
        const response = await this.projectUsersApi.importProjectUsers(accessToken, projectId, null, region, null, projectUsersImportPayload);
        return response.content;
    }
    public async removeProjectUserAsync(accessToken: string, projectId: string, userId: string, region?: Region): Promise<void> {
        const response = await this.projectUsersApi.removeProjectUser(accessToken, projectId, userId, null, region, null);
        return response.content;
    }
    public async updateProjectUserAsync(accessToken: string, projectId: string, userId: string, region?: Region, projectUsersUpdatePayload?: ProjectUsersUpdatePayload): Promise<ProjectUserResponse> {
        const response = await this.projectUsersApi.updateProjectUser(accessToken, projectId, userId, null, region, null, projectUsersUpdatePayload);
        return response.content;
    }

    // User API

    public async createUserAsync(accessToken: string, accountId: string, region?: Region, userPayload?: UserPayload): Promise<User> {
        const response = await this.accountUsersApi.createUser(accessToken, accountId, region, userPayload);
        return response.content;
    }
    public async getUserAsync(accessToken: string, accountId: string, userId: string, region?: Region): Promise<User> {
        const response = await this.accountUsersApi.getUser(accessToken, accountId, userId, region);
        return response.content;
    }
    public async getUsersAsync(accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string): Promise<Array<User>> {
        const response = await this.accountUsersApi.getUsers(accessToken, accountId, region, limit, offset, sort, field);
        return response.content;
    }
    public async importUsersAsync(accessToken: string, accountId: string, region?: Region, userPayload?: Array<UserPayload>): Promise<UserImportResponse> {
        const response = await this.accountUsersApi.importUsers(accessToken, accountId, region, userPayload);
        return response.content;
    }
    public async patchUserDetailsAsync(accessToken: string, accountId: string, userId: string, region?: Region, userPatchPayload?: UserPatchPayload): Promise<User> {
        const response = await this.accountUsersApi.patchUserDetails(accessToken, accountId, userId, region, userPatchPayload);
        return response.content;
    }
    public async searchUsersAsync(accessToken: string, accountId: string, region?: Region, name?: string, email?: string, companyName?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string): Promise<Array<User>> {
        const response = await this.accountUsersApi.searchUsers(accessToken, accountId, region, name, email, companyName, operator, partial, limit, offset, sort, field);
        return response.content;
    }

    // Business-Units API

    public async getBusinessUnitsAsync(accessToken: string, accountId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<BusinessUnitsResponse> {
        const response = await this.businessUnitAPI.getBusinessUnits(accessToken, accountId, region);
        return response.content;
    }
    public async createBusinessUnitsAsync(accessToken: string, accountId: string, region?: Region, businessUnitsRequestPyload?: BusinessUnitsRequestPyload, options?: ApsServiceRequestConfig): Promise<BusinessUnitsResponse> {
        const response = await this.businessUnitAPI.createBusinessUnits(accessToken, accountId, region, businessUnitsRequestPyload,  options);
        return response.content;
    }
}
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminClient = void 0;
const api_1 = require("../api");
class AdminClient {
    constructor(sdkManager) {
        this.companiesApi = new api_1.CompaniesApi(sdkManager);
        this.accountUsersApi = new api_1.AccountUsersApi(sdkManager);
        this.projectsApi = new api_1.ProjectsApi(sdkManager);
        this.projectUsersApi = new api_1.ProjectUsersApi(sdkManager);
        this.businessUnitAPI = new api_1.BusinessUnitsApi(sdkManager);
    }
    // Project API
    GetProjectAsync(accessToken, projectId, region, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.getProject(accessToken, projectId, null, region, null, fields);
            return response.content;
        });
    }
    GetProjectsAsync(accessToken, accountId, region, fields, filterClassification, filterPlatform, filterProducts, filterName, filterType, filterStatus, filterBusinessUnitId, filterJobNumber, filterUpdatedAt, filterTextMatch, sort, limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.getProjects(accessToken, accountId, null, region, null, fields, filterClassification, filterPlatform, filterProducts, filterName, filterType, filterStatus, filterBusinessUnitId, filterJobNumber, filterUpdatedAt, filterTextMatch, sort, limit, offset);
            return response.content;
        });
    }
    CreateProjectAsync(accessToken, accountId, region, projectPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.createProject(accessToken, accountId, null, region, null, projectPayload);
            return response.content;
        });
    }
    CreateProjectImageAsync(accessToken, projectId, accountId, body, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.createProjectImage(accessToken, projectId, accountId, body, region);
            return response.content;
        });
    }
    // Company API
    searchCompaniesAsync(accessToken, accountId, region, name, trade, operator, partial, limit, offset, sort, field) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.companiesApi.searchCompanies(accessToken, accountId, region, name, trade, operator, partial, limit, offset, sort, field);
            return response.content;
        });
    }
    patchCompanyImage(accessToken, companyId, accountId, body, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.companiesApi.patchCompanyImage(accessToken, companyId, accountId, body, region);
            return response.content;
        });
    }
    patchCompanyDetailsAsync(accessToken, companyId, accountId, region, companyPatchPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.companiesApi.patchCompanyDetails(accessToken, companyId, accountId, region, companyPatchPayload);
            return response.content;
        });
    }
    importCompaniesAsync(accessToken, accountId, region, companyPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.companiesApi.importCompanies(accessToken, accountId, region, companyPayload);
            return response.content;
        });
    }
    getProjectCompaniesAsync(accessToken, accountId, projectId, region, limit, offset, sort, field) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.companiesApi.getProjectCompanies(accessToken, accountId, projectId, region, limit, offset, sort, field);
            return response.content;
        });
    }
    getCompanyAsync(accessToken, companyId, accountId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.companiesApi.getCompany(accessToken, companyId, accountId, region);
            return response.content;
        });
    }
    getCompaniesAsync(accessToken, accountId, region, limit, offset, sort, field) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.companiesApi.getCompanies(accessToken, accountId, region, limit, offset, sort, field);
            return response.content;
        });
    }
    createCompanyAsync(accessToken, accountId, region, companyPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.companiesApi.createCompany(accessToken, accountId, region, companyPayload);
            return response.content;
        });
    }
    // Project-User API
    getProjectUserAsync(accessToken, projectId, userId, region, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectUsersApi.getProjectUser(accessToken, projectId, userId, null, region, null, fields);
            return response.content;
        });
    }
    assignProjectUserAsync(accessToken, projectId, region, projectUserPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectUsersApi.assignProjectUser(accessToken, projectId, null, region, null, projectUserPayload);
            return response.content;
        });
    }
    getProjectUsersAsync(accessToken, projectId, region, filterProducts, filterName, filterEmail, filterStatus, filterAccessLevels, filterCompanyId, filterCompanyName, filterAutodeskId, filterId, filterRoleId, filterRoleIds, sort, fields, orFilters, filterTextMatch, limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectUsersApi.getProjectUsers(accessToken, projectId, null, region, null, filterProducts, filterName, filterEmail, filterStatus, filterAccessLevels, filterCompanyId, filterCompanyName, filterAutodeskId, filterId, filterRoleId, filterRoleIds, sort, fields, orFilters, filterTextMatch, limit, offset);
            return response.content;
        });
    }
    importProjectUsersAsync(accessToken, projectId, region, projectUsersImportPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectUsersApi.importProjectUsers(accessToken, projectId, null, region, null, projectUsersImportPayload);
            return response.content;
        });
    }
    removeProjectUserAsync(accessToken, projectId, userId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectUsersApi.removeProjectUser(accessToken, projectId, userId, null, region, null);
            return response.content;
        });
    }
    updateProjectUserAsync(accessToken, projectId, userId, region, projectUsersUpdatePayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectUsersApi.updateProjectUser(accessToken, projectId, userId, null, region, null, projectUsersUpdatePayload);
            return response.content;
        });
    }
    // User API
    createUserAsync(accessToken, accountId, region, userPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.accountUsersApi.createUser(accessToken, accountId, region, userPayload);
            return response.content;
        });
    }
    getUserAsync(accessToken, accountId, userId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.accountUsersApi.getUser(accessToken, accountId, userId, region);
            return response.content;
        });
    }
    getUsersAsync(accessToken, accountId, region, limit, offset, sort, field) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.accountUsersApi.getUsers(accessToken, accountId, region, limit, offset, sort, field);
            return response.content;
        });
    }
    importUsersAsync(accessToken, accountId, region, userPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.accountUsersApi.importUsers(accessToken, accountId, region, userPayload);
            return response.content;
        });
    }
    patchUserDetailsAsync(accessToken, accountId, userId, region, userPatchPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.accountUsersApi.patchUserDetails(accessToken, accountId, userId, region, userPatchPayload);
            return response.content;
        });
    }
    searchUsersAsync(accessToken, accountId, region, name, email, companyName, operator, partial, limit, offset, sort, field) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.accountUsersApi.searchUsers(accessToken, accountId, region, name, email, companyName, operator, partial, limit, offset, sort, field);
            return response.content;
        });
    }
    // Business-Units API
    getBusinessUnitsAsync(accessToken, accountId, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.businessUnitAPI.getBusinessUnits(accessToken, accountId, region);
            return response.content;
        });
    }
    createBusinessUnitsAsync(accessToken, accountId, region, businessUnitsRequestPyload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.businessUnitAPI.createBusinessUnits(accessToken, accountId, region, businessUnitsRequestPyload, options);
            return response.content;
        });
    }
}
exports.AdminClient = AdminClient;

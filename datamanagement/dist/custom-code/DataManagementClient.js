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
exports.DataManagementClient = void 0;
const api_1 = require("../api");
class DataManagementClient {
    constructor(sdkManager) {
        this.commandsApi = new api_1.CommandsApi(sdkManager);
        this.foldersApi = new api_1.FoldersApi(sdkManager);
        this.hubsApi = new api_1.HubsApi(sdkManager);
        this.itemsApi = new api_1.ItemsApi(sdkManager);
        this.projectsApi = new api_1.ProjectsApi(sdkManager);
        this.versionsApi = new api_1.VersionsApi(sdkManager);
    }
    PostCommandAsync(accessToken = null, projectId, xUserId = null, commandPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.commandsApi.postCommand(accessToken, projectId, xUserId, commandPayload);
            return response.content;
        });
    }
    GetFolderAsync(accessToken = null, projectId, folderId, ifModifiedSince = null, xUserId = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.foldersApi.getFolder(projectId, folderId, ifModifiedSince, xUserId);
            return response.content;
        });
    }
    GetFolderContentsAsync(accessToken = null, projectId, folderId, xUserId = null, filterType = null, filterId = null, filterExtensionType = null, filterLastModifiedTimeRollup = null, pageNumber = null, pageLimit = null, includeHidden = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.foldersApi.getFolderContents(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType, filterLastModifiedTimeRollup, pageNumber, pageLimit, includeHidden);
            return response.content;
        });
    }
    GetFolderParentAsync(accessToken = null, projectId, folderId, xUserId = null, throwOnError = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.foldersApi.getFolderParent(accessToken, projectId, folderId, xUserId);
            return response.content;
        });
    }
    GetFolderRefsAsync(accessToken = null, projectId, folderId, xUserId = null, filterType = null, filterId = null, filterExtensionType = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.foldersApi.getFolderRefs(accessToken, projectId, folderId, xUserId, filterType, filterId, filterExtensionType);
            return response.content;
        });
    }
    GetFolderRelationshipsLinksAsync(accessToken = null, projectId, folderId, xUserId = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.foldersApi.getFolderRelationshipsLinks(projectId, folderId, xUserId);
            return response.content;
        });
    }
    GetFolderRelationshipsRefsAsync(accessToken = null, folderId, projectId, xUserId = null, filterType = null, filterId = null, filterRefType, filterDirection, filterExtensionType = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.foldersApi.getFolderRelationshipsRefs(accessToken, folderId, projectId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType);
            return response.content;
        });
    }
    GetFolderSearchAsync(accessToken = null, projectId, folderId, filter = null, pageNumber = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.foldersApi.getFolderSearch(accessToken, projectId, folderId, filter, pageNumber);
            return response.content;
        });
    }
    PatchFolderAsync(accessToken = null, projectId, folderId, xUserId = null, modifyFolderPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.foldersApi.patchFolder(accessToken, projectId, folderId, xUserId, modifyFolderPayload);
            return response.content;
        });
    }
    CreateFolderAsync(accessToken = null, projectId, xUserId = null, folderPayload = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.foldersApi.createFolder(accessToken, projectId, xUserId, folderPayload);
            return response.content;
        });
    }
    CreateFolderRelationshipsRefAsync(accessToken = null, folderId, projectId, xUserId = null, relationshipRefsPayload = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.foldersApi.createFolderRelationshipsRef(accessToken, folderId, projectId, xUserId, relationshipRefsPayload);
            return response.content;
        });
    }
    GetHubAsync(accessToken = null, hubId, xUserId = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.hubsApi.getHub(accessToken, hubId, xUserId);
            return response.content;
        });
    }
    GetHubsAsync(accessToken = null, xUserId = null, filterId = null, filterName = null, filterExtensionType = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.hubsApi.getHubs(accessToken, xUserId, filterId, filterName, filterExtensionType);
            return response.content;
        });
    }
    GetItemAsync(accessToken = null, projectId, itemId, xUserId = null, includePathInProject = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.itemsApi.getItem(accessToken, projectId, itemId, xUserId, includePathInProject);
            return response.content;
        });
    }
    GetItemParentFolderAsync(accessToken = null, projectId, itemId, xUserId = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.itemsApi.getItemParentFolder(accessToken, projectId, itemId, xUserId);
            return response.content;
        });
    }
    GetItemRefsAsync(accessToken = null, projectId, itemId, xUserId = null, filterType = null, filterId = null, filterExtensionType = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.itemsApi.getItemRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterExtensionType);
            return response.content;
        });
    }
    GetItemRelationshipsLinksAsync(accessToken = null, projectId, itemId, xUserId = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.itemsApi.getItemRelationshipsLinks(accessToken, projectId, itemId, xUserId);
            return response.content;
        });
    }
    GetItemRelationshipsRefsAsync(accessToken = null, projectId, itemId, xUserId = null, filterType = null, filterId = null, filterRefType = null, filterDirection = null, filterExtensionType = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.itemsApi.getItemRelationshipsRefs(accessToken, projectId, itemId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType);
            return response.content;
        });
    }
    GetItemTipAsync(accessToken = null, projectId, itemId, xUserId = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.itemsApi.getItemTip(accessToken, projectId, itemId, xUserId);
            return response.content;
        });
    }
    GetItemVersionsAsync(accessToken = null, projectId, itemId, xUserId = null, filterId = null, filterExtensionType = null, filterVersionNumber = null, pageNumber = null, pageLimit = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.itemsApi.getItemVersions(accessToken, projectId, itemId, xUserId, filterId, filterExtensionType, filterVersionNumber, pageNumber, pageLimit);
            return response.content;
        });
    }
    PatchItemAsync(accessToken = null, projectId, itemId, xUserId = null, modifyItemPayload = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.itemsApi.patchItem(accessToken, projectId, itemId, xUserId, modifyItemPayload);
            return response.content;
        });
    }
    CreateItemAsync(accessToken = null, projectId, xUserId = null, copyFrom = null, itemPayload = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.itemsApi.createItem(accessToken, projectId, xUserId, copyFrom, itemPayload);
            return response.content;
        });
    }
    CreateItemRelationshipsRefAsync(accessToken = null, projectId, itemId, xUserId = null, relationshipRefsPayload = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.itemsApi.createItemRelationshipsRef(accessToken, projectId, itemId, xUserId, relationshipRefsPayload);
            return response.content;
        });
    }
    GetDownloadAsync(accessToken, projectId, downloadId, xUserId = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.getDownload(accessToken, projectId, downloadId, xUserId);
            return response.content;
        });
    }
    GetDownloadJobAsync(accessToken, projectId, jobId, xUserId = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.getDownloadJob(accessToken, projectId, jobId, xUserId);
            return response.content;
        });
    }
    CreateDownloadAsync(accessToken, projectId, xUserId = null, downloadPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.createDownload(accessToken, projectId, xUserId, downloadPayload);
            return response.content;
        });
    }
    GetHubProjectsAsync(accessToken = null, hubId, xUserId = undefined, filterId = undefined, filterExtensionType = undefined, pageNumber = undefined, pageLimit = undefined) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.getHubProjects(accessToken, hubId, xUserId, filterId, filterExtensionType, pageNumber, pageLimit);
            return response.content;
        });
    }
    GetProjectAsync(accessToken = null, hubId, projectId, xUserId = undefined) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.getProject(accessToken, hubId, projectId, xUserId);
            return response.content;
        });
    }
    GetProjectHubAsync(accessToken = null, hubId, projectId, xUserId = undefined) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.getProjectHub(accessToken, hubId, projectId, xUserId);
            return response.content;
        });
    }
    GetProjectTopFoldersAsync(accessToken = null, hubId, projectId, xUserId = undefined, excludeDeleted = undefined, projectFilesOnly = undefined) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.getProjectTopFolders(accessToken, hubId, projectId, xUserId, excludeDeleted, projectFilesOnly);
            return response.content;
        });
    }
    CreateStorageAsync(accessToken = null, projectId, xUserId = null, storagePayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.projectsApi.createStorage(accessToken, projectId, xUserId, storagePayload);
            return response.content;
        });
    }
    GetVersionAsync(accessToken = null, projectId, versionId, xUserId = '') {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.versionsApi.getVersion(accessToken, projectId, versionId, xUserId);
            return response.content;
        });
    }
    GetVersionDownloadFormatsAsync(accessToken = null, projectId, versionId, xUserId = '') {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.versionsApi.getVersionDownloadFormats(accessToken, projectId, versionId, xUserId);
            return response.content;
        });
    }
    GetVersionDownloadsAsync(accessToken = null, projectId, versionId, xUserId = '', filterFormatFileType = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.versionsApi.getVersionDownloads(accessToken, projectId, versionId, xUserId, filterFormatFileType);
            return response.content;
        });
    }
    GetVersionItemAsync(accessToken = null, projectId, versionId, xUserId = '') {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.versionsApi.getVersionItem(accessToken, projectId, versionId, xUserId);
            return response.content;
        });
    }
    GetVersionRefsAsync(accessToken = null, projectId, versionId, xUserId = '', filterType = null, filterId = null, filterExtensionType = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.versionsApi.getVersionRefs(accessToken, projectId, versionId, xUserId, filterType, filterId, filterExtensionType);
            return response.content;
        });
    }
    GetVersionRelationshipsLinksAsync(accessToken = null, projectId, versionId, xUserId = '') {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.versionsApi.getVersionRelationshipsLinks(accessToken, projectId, versionId, xUserId);
            return response.content;
        });
    }
    GetVersionRelationshipsRefsAsync(accessToken = null, projectId, versionId, xUserId = '', filterType = null, filterId = null, filterRefType = null, filterDirection = null, filterExtensionType = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.versionsApi.getVersionRelationshipsRefs(accessToken, projectId, versionId, xUserId, filterType, filterId, filterRefType, filterDirection, filterExtensionType);
            return response.content;
        });
    }
    PatchVersionAsync(accessToken = null, projectId, versionId, modifyVersionPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.versionsApi.patchVersion(accessToken, projectId, versionId, modifyVersionPayload);
            return response.content;
        });
    }
    CreateVersionAsync(accessToken = null, projectId, xUserId = '', copyFrom = null, versionPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.versionsApi.createVersion(accessToken, projectId, xUserId, copyFrom, versionPayload);
            return response.content;
        });
    }
    CreateVersionRelationshipsRefAsync(accessToken = null, projectId, versionId, xUserId = '', relationshipRefsPayload = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.versionsApi.createVersionRelationshipsRef(accessToken, projectId, versionId, xUserId, relationshipRefsPayload);
            return response.content;
        });
    }
}
exports.DataManagementClient = DataManagementClient;

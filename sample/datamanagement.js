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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var autodesk_sdkmanager_1 = require("./node_modules/data-management/node_modules/autodesk-sdkmanager");
var data_management_1 = require("data-management");
var token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUSIsInBpLmF0bSI6Ijd6M2gifQ.eyJzY29wZSI6WyJkYXRhOnJlYWQiLCJkYXRhOndyaXRlIiwiZGF0YTpjcmVhdGUiLCJkYXRhOnNlYXJjaCIsImJ1Y2tldDpjcmVhdGUiLCJidWNrZXQ6cmVhZCIsImJ1Y2tldDp1cGRhdGUiLCJidWNrZXQ6ZGVsZXRlIiwiYWNjb3VudDpyZWFkIiwiYWNjb3VudDp3cml0ZSIsImNvZGU6YWxsIl0sImNsaWVudF9pZCI6Ikp1enlEQWlmMjVjSUFYZlpuMHJBd2ltSUFaVEdMeEFRIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20vYXVkL2Fqd3RleHA2MCIsImp0aSI6IkV4ajc2Z1c0TjQ5aU5qMXBYcWpXN3oyRVprNzdCOERyenJ0THNuOWoyMWZZWVAwU0xteXc3d2EyMVNnUnRvZzAiLCJ1c2VyaWQiOiJKMlEyRUw0RktQS1JIVEtGIiwiZXhwIjoxNjk5NTA3Mjc2fQ.g79acoUnLcLLAuZW9omKE919o286fDAL7bTkbJAO5qnJW5rdnKVSGq4blf6Xza1-4dXDU03hY1MAfki6UKZkBdENrvMl6CT0wvLAfu1x1d4M8oGvX36vLoTED_2gzWiCJ6GX8_a50hi3_npPdc8ubTuFZpD-JbQr700jmBlXL4yDVawKnshtPeSP6x0EgJm1-ZZ3owBLayWrgXWm7Z_ry6dLMdQXAiBH9tSe-QwUwLmm3WgMLfNh92A_FU0kM9pPOFanBsYzx9pBc9rrC93_YuU-TV1X1km7WgILnHF1Nj-Sv_SzOhEXOVIFMewVBHY1Wp2G3gjArSKlXvLsWqnz_w";
var hub_id = "a.YnVzaW5lc3M6YXV0b2Rlc2s3MDgw";
var project_id = "a.YnVzaW5lc3M6YXV0b2Rlc2s3MDgwI0QyMDIzMDYyNjY1MTQxNjUyNg";
var folder_id = "urn:adsk.wipprod:fs.folder:co.DSMqf-tKRuKWSaeafkZHIg";
var sdkmanager = autodesk_sdkmanager_1.SdkManagerBuilder
    .Create()
    .build();
var _dataManagementApi = new data_management_1.DataManagementClient(sdkmanager);
//HUBS
// Returns a collectionof accessible hubs for this member.
function hubsData() {
    return __awaiter(this, void 0, void 0, function () {
        var getHubs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _dataManagementApi.GetHubsAsync(token)];
                case 1:
                    getHubs = _a.sent();
                    getHubs.data.forEach(function (current) {
                        var HubsId = current.id;
                        var hubsType = current.type;
                        // Attributes
                        var hubsAttributes = current.attributes;
                        var hubsAttributeName = hubsAttributes.name;
                        var hubsAttributesRegion = hubsAttributes.region;
                        var hubsDataAttributesExtension = hubsAttributes.extension;
                        var hubsDataAttributesExtensionType = hubsDataAttributesExtension.type;
                        var hubsDataAttributesExtensionVersion = hubsDataAttributesExtension.version;
                        var hubsAttributesExtensionData = hubsDataAttributesExtension.data;
                        var hubsAttributesExtensionSchema = hubsDataAttributesExtension.schema;
                        var hubsAttributesExtensionSchemaHref = hubsAttributesExtensionSchema.href;
                    });
                    return [2 /*return*/];
            }
        });
    });
}
hubsData();
//Hub
// Returns data on a specific hub_id.
function hubdata() {
    return __awaiter(this, void 0, void 0, function () {
        var getHub, getHubData, hubsType, hubsId, hubAttributes, hubAttributeName, hubAttributesRegion, hubAttributesExtension, hubAttributesExtensionType, hubAttributesExtensionVersion, hubAttributesExtensionData, hubAttributesExtensionSchema, hubAttributesExtensionSchemaHref;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _dataManagementApi.GetHubAsync(token, hub_id)];
                case 1:
                    getHub = _a.sent();
                    getHubData = getHub.data;
                    hubsType = getHubData.type;
                    hubsId = getHubData.id;
                    hubAttributes = getHubData.attributes;
                    hubAttributeName = hubAttributes.name;
                    hubAttributesRegion = hubAttributes.region;
                    hubAttributesExtension = hubAttributes.extension;
                    hubAttributesExtensionType = hubAttributesExtension.type;
                    hubAttributesExtensionVersion = hubAttributesExtension.version;
                    hubAttributesExtensionData = hubAttributesExtension.data;
                    hubAttributesExtensionSchema = hubAttributesExtension.schema;
                    hubAttributesExtensionSchemaHref = hubAttributesExtensionSchema.href;
                    return [2 /*return*/];
            }
        });
    });
}
hubdata();
//Projects
function projecstData() {
    return __awaiter(this, void 0, void 0, function () {
        var getHubProjects;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _dataManagementApi.GetHubProjectsAsync(token, hub_id)];
                case 1:
                    getHubProjects = _a.sent();
                    getHubProjects.data.forEach(function (currentProject) {
                        // Getting type and ID for the current project.
                        var hubProjectsType = currentProject.type;
                        var hubProjectsId = currentProject.id;
                        // Accessing project attributes.
                        var hubProjectsAttributes = currentProject.attributes;
                        var hubProjectsAttributesName = hubProjectsAttributes.name;
                        // Accessing and iterating through project scopes.
                        var hubProjectsAttributesScopes = hubProjectsAttributes.scopes;
                        for (var _i = 0, hubProjectsAttributesScopes_1 = hubProjectsAttributesScopes; _i < hubProjectsAttributesScopes_1.length; _i++) {
                            var scope = hubProjectsAttributesScopes_1[_i];
                            console.log(scope);
                        }
                        var hubProjectsAttributesExtension = hubProjectsAttributes.extension;
                        var hubProjectsAttributesExtensionType = hubProjectsAttributesExtension.type;
                        var hubProjectsAttributesExtensionVersion = hubProjectsAttributesExtension.version;
                        var hubProjectsAttributesExtensionData = hubProjectsAttributesExtension.data;
                        var hubProjectsAttributesExtensionSchema = hubProjectsAttributesExtension.schema;
                        var hubProjectsAttributesExtensionSchemaHref = hubProjectsAttributesExtensionSchema.href;
                    });
                    return [2 /*return*/];
            }
        });
    });
}
projecstData();
//Project
//Returns a project for a given project_id
function projectData() {
    return __awaiter(this, void 0, void 0, function () {
        var getHubProject, getHubProjectData, getHubProjectDataType, getHubProjectDataId, hubProjectAttributes, hubProjectAttributesName, hubProjectAttributesScopes, _i, hubProjectAttributesScopes_1, scope, hubProjectAttributesExtension, hubProjectAttributesExtensionType, hubProjectAttributesExtensionVersion, hubProjectAttributesExtensionData, hubProjectAttributesExtensionSchema, hubProjectAttributesExtensionSchemaHref;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _dataManagementApi.GetProjectAsync(token, hub_id, project_id)];
                case 1:
                    getHubProject = _a.sent();
                    getHubProjectData = getHubProject.data;
                    getHubProjectDataType = getHubProjectData.type;
                    getHubProjectDataId = getHubProjectData.id;
                    hubProjectAttributes = getHubProjectData.attributes;
                    hubProjectAttributesName = hubProjectAttributes.name;
                    hubProjectAttributesScopes = hubProjectAttributes.scopes;
                    for (_i = 0, hubProjectAttributesScopes_1 = hubProjectAttributesScopes; _i < hubProjectAttributesScopes_1.length; _i++) {
                        scope = hubProjectAttributesScopes_1[_i];
                        console.log(scope);
                    }
                    hubProjectAttributesExtension = hubProjectAttributes.extension;
                    hubProjectAttributesExtensionType = hubProjectAttributesExtension.type;
                    hubProjectAttributesExtensionVersion = hubProjectAttributesExtension.version;
                    hubProjectAttributesExtensionData = hubProjectAttributesExtension.data;
                    hubProjectAttributesExtensionSchema = hubProjectAttributesExtension.schema;
                    hubProjectAttributesExtensionSchemaHref = hubProjectAttributesExtensionSchema.href;
                    return [2 /*return*/];
            }
        });
    });
}
projectData();
// Returns the details of the highest level folders the user has access to for a given project
function topFolderDetail() {
    return __awaiter(this, void 0, void 0, function () {
        var projectTopFolders, projectTopFoldersJsonapiVersion, projectTopFoldersLinksSelfHref, topFoldersData, _i, topFoldersData_1, topFolder, topFolderDataAttributesName, topFolderDataAttributesDisplayName, topFolderDataAttributesExtensionType, topFolderDataAttributesExtensionVersion, topFolderDataAttributesExtensionSchemaHref;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _dataManagementApi.GetProjectTopFoldersAsync(token, hub_id, project_id)];
                case 1:
                    projectTopFolders = _a.sent();
                    projectTopFoldersJsonapiVersion = projectTopFolders.jsonapi.version;
                    projectTopFoldersLinksSelfHref = projectTopFolders.links.self.href;
                    topFoldersData = Array.from(projectTopFolders.data);
                    for (_i = 0, topFoldersData_1 = topFoldersData; _i < topFoldersData_1.length; _i++) {
                        topFolder = topFoldersData_1[_i];
                        topFolderDataAttributesName = topFolder.attributes.name;
                        topFolderDataAttributesDisplayName = topFolder.attributes.displayName;
                        topFolderDataAttributesExtensionType = topFolder.attributes.extension.type;
                        topFolderDataAttributesExtensionVersion = topFolder.attributes.extension.version;
                        topFolderDataAttributesExtensionSchemaHref = topFolder.attributes.extension.schema.href;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
topFolderDetail();
// Folders
// Describe the folder to be created
function createFolder() {
    return __awaiter(this, void 0, void 0, function () {
        var createFolder, folder, createdFolderData, createdFolderDataType, createdFolderDataId, createdFolderDataAttributes, createdFolderDataAttributesName, createdFolderDataAttributesDisplayName, createdFolderDataAttributesCreateTime, createdFolderDataAttributesCreateUserId, createdFolderDataAttributesCreateUserName, createdFolderDataAttributesLastModifiedTime, createdFolderDataAttributesLastModifiedUserId, createdFolderDataAttributesLastModifiedUserName, createdFolderDataAttributesLastModifiedTimeRollup, createdFolderDataAttributesObjectCount, createdFolderDataAttributesHidden, createdFolderDataAttributesExtension, createdFolderDataAttributesExtensionType, createdFolderDataAttributesExtensionVersion, createdFolderDataAttributesExtensionSchema, createdFolderDataAttributesExtensionSchemaHref, createdFolderDataAttributesExtensionData, createdFolderDataAttributesExtensionDataAllowedTypes, createdFolderDataAttributesExtensionDataVisibleTypes, createdFolderDataAttributesExtensionDataNamingStandardIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    createFolder = {
                        jsonapi: { version: data_management_1.VersionNumber._10 },
                        data: {
                            type: data_management_1.Type.Folders,
                            attributes: {
                                name: "Test_folder",
                                extension: {
                                    type: data_management_1.Type.FoldersautodeskCoreFolder,
                                    version: data_management_1.VersionNumber._10
                                }
                            },
                            relationships: {
                                parent: {
                                    data: {
                                        type: data_management_1.Type.Folders, id: folder_id
                                    }
                                }
                            }
                        }
                    };
                    return [4 /*yield*/, _dataManagementApi.CreateFolderAsync(token, project_id, null, createFolder)];
                case 1:
                    folder = _a.sent();
                    createdFolderData = createFolder.data;
                    createdFolderDataType = createdFolderData.type;
                    createdFolderDataId = createdFolderData.id;
                    createdFolderDataAttributes = createdFolderData.attributes;
                    createdFolderDataAttributesName = createdFolderDataAttributes.name;
                    createdFolderDataAttributesDisplayName = createdFolderDataAttributes.displayName;
                    createdFolderDataAttributesCreateTime = createdFolderDataAttributes.createTime;
                    createdFolderDataAttributesCreateUserId = createdFolderDataAttributes.createUserId;
                    createdFolderDataAttributesCreateUserName = createdFolderDataAttributes.createUserName;
                    createdFolderDataAttributesLastModifiedTime = createdFolderDataAttributes.lastModifiedTime;
                    createdFolderDataAttributesLastModifiedUserId = createdFolderDataAttributes.lastModifiedUserId;
                    createdFolderDataAttributesLastModifiedUserName = createdFolderDataAttributes.lastModifiedUserName;
                    createdFolderDataAttributesLastModifiedTimeRollup = createdFolderDataAttributes.lastModifiedTimeRollup;
                    createdFolderDataAttributesObjectCount = createdFolderDataAttributes.objectCount;
                    createdFolderDataAttributesHidden = createdFolderDataAttributes.hidden;
                    createdFolderDataAttributesExtension = createdFolderDataAttributes.extension;
                    createdFolderDataAttributesExtensionType = createdFolderDataAttributesExtension.type;
                    createdFolderDataAttributesExtensionVersion = createdFolderDataAttributesExtension.version;
                    createdFolderDataAttributesExtensionSchema = createdFolderDataAttributesExtension.schema;
                    createdFolderDataAttributesExtensionSchemaHref = createdFolderDataAttributesExtensionSchema.href;
                    createdFolderDataAttributesExtensionData = createdFolderDataAttributesExtension.data;
                    createdFolderDataAttributesExtensionDataAllowedTypes = createdFolderDataAttributesExtensionData.allowedTypes;
                    createdFolderDataAttributesExtensionDataAllowedTypes.forEach(function (allowedType) {
                        console.log(allowedType);
                    });
                    createdFolderDataAttributesExtensionDataVisibleTypes = createdFolderDataAttributesExtensionData.visibleTypes;
                    createdFolderDataAttributesExtensionDataVisibleTypes.forEach(function (visibleType) {
                        console.log(visibleType);
                    });
                    createdFolderDataAttributesExtensionDataNamingStandardIds = createdFolderDataAttributesExtensionData.namingStandardIds;
                    createdFolderDataAttributesExtensionDataNamingStandardIds.forEach(function (namingStandardId) {
                        console.log(namingStandardId);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
createFolder();
//Folder
function folderData() {
    return __awaiter(this, void 0, void 0, function () {
        var folderContents, folderContentsJsonapiVersion, folderContentsLinksSelfHref, folderContentsLinksFirstHref, folderContentsLinksPrevHref, folderContentsLinksNextHref;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _dataManagementApi.GetFolderContentsAsync(token, project_id, folder_id)];
                case 1:
                    folderContents = _a.sent();
                    folderContentsJsonapiVersion = folderContents.jsonapi.version;
                    folderContentsLinksSelfHref = folderContents.links.self.href;
                    folderContentsLinksFirstHref = folderContents.links.first.href;
                    folderContentsLinksPrevHref = folderContents.links.prev.href;
                    folderContentsLinksNextHref = folderContents.links.next.href;
                    folderContents.data.forEach(function (contentData) {
                        var contentDataType = contentData.type;
                        var contentDataId = contentData.id;
                        var contentDataAttributesName = contentData.attributes.name;
                        var contentDataAttributesDisplayName = contentData.attributes.displayName;
                        var contentDataAttributesExtensionType = contentData.attributes.extension.type;
                        var contentDataAttributesExtensionVersion = contentData.attributes.extension.version;
                    });
                    return [2 /*return*/];
            }
        });
    });
}
folderData();
//Item
function createItem() {
    return __awaiter(this, void 0, void 0, function () {
        var itemPayload, createdItem, createdItemJsonapiVersion, createdItemLinks, createdItemDataType, createdItemDataId, createdItemDataAttributesDisplayName, createdItemDataAttributesCreateTime, createdItemDataAttributesCreateUserId, createdItemDataAttributesCreateUserName, createdItemDataAttributesLastModifiedTime, createdItemDataAttributesLastModifiedUserId, createdItemDataAttributesLastModifiedUserName, createdItemDataAttributesHidden, createdItemDataAttributesReserved, createdItemDataAttributesExtensionType, createdItemDataAttributesExtensionVersion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    itemPayload = {
                        jsonapi: {
                            version: data_management_1.VersionNumber._10,
                        },
                        data: {
                            type: data_management_1.Type.Items,
                            attributes: {
                                displayName: "drawing3.dwg",
                                extension: {
                                    type: data_management_1.Type.ItemsautodeskCoreFile,
                                    version: data_management_1.VersionNumber._10,
                                },
                            },
                            relationships: {
                                tip: {
                                    data: {
                                        type: data_management_1.Type.Versions,
                                        id: "1",
                                    },
                                },
                                parent: {
                                    data: {
                                        type: data_management_1.Type.Folders,
                                        id: "urn:adsk.wipprod:fs.folder:co.zk8KLsPPTkiK1Kub-9PPHg",
                                    },
                                },
                            },
                        },
                        included: [{
                                type: data_management_1.Type.Versions,
                                id: "1",
                                attributes: {
                                    name: "drawing3.dwg",
                                    extension: {
                                        type: data_management_1.Type.VersionsautodeskCoreFile,
                                        version: data_management_1.VersionNumber._10,
                                    }
                                }
                            }
                        ]
                    };
                    return [4 /*yield*/, _dataManagementApi.CreateItemAsync(token, project_id, null, null, itemPayload)];
                case 1:
                    createdItem = _a.sent();
                    createdItemJsonapiVersion = createdItem.jsonapi.version;
                    createdItemLinks = createdItem.links.self.href;
                    createdItemDataType = createdItem.data.type;
                    createdItemDataId = createdItem.data.id;
                    createdItemDataAttributesDisplayName = createdItem.data.attributes.displayName;
                    createdItemDataAttributesCreateTime = createdItem.data.attributes.createTime;
                    createdItemDataAttributesCreateUserId = createdItem.data.attributes.createUserId;
                    createdItemDataAttributesCreateUserName = createdItem.data.attributes.createUserName;
                    createdItemDataAttributesLastModifiedTime = createdItem.data.attributes.lastModifiedTime;
                    createdItemDataAttributesLastModifiedUserId = createdItem.data.attributes.lastModifiedUserId;
                    createdItemDataAttributesLastModifiedUserName = createdItem.data.attributes.lastModifiedUserName;
                    createdItemDataAttributesHidden = createdItem.data.attributes.hidden;
                    createdItemDataAttributesReserved = createdItem.data.attributes.reserved;
                    createdItemDataAttributesExtensionType = createdItem.data.attributes.extension.type;
                    createdItemDataAttributesExtensionVersion = createdItem.data.attributes.extension.version;
                    return [2 /*return*/];
            }
        });
    });
}
createItem();

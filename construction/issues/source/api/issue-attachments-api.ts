
import { ApiResponse, ApsServiceRequestConfig, IApsConfiguration, SdkManager } from "@aps_sdk/autodesk-sdkmanager";
import type { AxiosInstance, AxiosPromise } from 'axios';
import { BaseApi, ConstructionIssuesApiError, RequestArgs, RequiredError } from '../base';
import { assertParamExists, createRequestFunction, serializeDataIfNeeded, setBearerAuthToObject, setSearchParams, toPathString } from '../common';
import { Attachments, AttachmentsPayload } from "../model";
/**
 * IssueAttachmentsApi - axios parameter creator
 * @export
 */
export const IssueAttachmentsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Adds attachments to an existing issue.
         * 
         * Links one or more files in Autodesk Docs (uploaded via the Data Management OSS API) to the specified issue.
         * 
         * Note that an issue can have up to 100 attachments. Files can include images, PDFs, or other supported formats.
         * 
         * For more information about uploading attachments, see the Upload Issue Attachment tutorial.
         * @summary Your POST endpoint
         * @param {string} projectId The ID of the project.
         * @param {AttachmentsPayload} attachmentsPayload 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
        */
        addAttachments: async (accessToken: string, projectId: string, attachmentsPayload: AttachmentsPayload, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('addAttachments', 'projectId', projectId)
            // verify required parameter 'attachmentsPayload' is not null or undefined
            assertParamExists('addAttachments', 'attachmentsPayload', attachmentsPayload)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/attachments`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)



            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTIONISSUES/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = serializeDataIfNeeded(attachmentsPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a specific attachment from an issue in a project.
         * @summary Your DELETE endpoint
         * @param {string} projectId The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the ACC API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
         * @param {string} issueId The unique identifier of the issue. To find the ID, call GET issues.
         * @param {string} attachmentId The unique identifier of the attachment. To find the ID, call GET attachments.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAttachment: async (accessToken: string, projectId: string, issueId: string, attachmentId: string, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('deleteAttachment', 'projectId', projectId)
            // verify required parameter 'issueId' is not null or undefined
            assertParamExists('deleteAttachment', 'issueId', issueId)
            // verify required parameter 'attachmentId' is not null or undefined
            assertParamExists('deleteAttachment', 'attachmentId', attachmentId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/attachments/{issueId}/items/{attachmentId}`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"issueId"}}`, encodeURIComponent(String(issueId)))
                .replace(`{${"attachmentId"}}`, encodeURIComponent(String(attachmentId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)



            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTIONISSUES/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
        * Retrieves all attachments for a specific issue in a project.
        * 
        * For details about retrieving metadata for a specific attachment, see the Retrieve Issue Attachment tutorial.
        * 
        * For details about downloading an attachment, see the Download Issue Attachment tutorial.
        * @summary Your GET endpoint
        * @param {string} projectId The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the ACC API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
        * @param {string} issueId The unique identifier of the issue. To find the ID, call GET issues.
        * @param accessToken bearer access token
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        getAttachments: async (accessToken: string, projectId: string, issueId: string, options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getAttachments', 'projectId', projectId)
            // verify required parameter 'issueId' is not null or undefined
            assertParamExists('getAttachments', 'issueId', issueId)
            const localVarPath = `/construction/issues/v1/projects/{projectId}/attachments/{issueId}/items`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
                .replace(`{${"issueId"}}`, encodeURIComponent(String(issueId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)



            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTIONISSUES/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IssueAttachmentsApi - functional programming interface
 * @export
 */
export const IssueAttachmentsApiFp = function (sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = IssueAttachmentsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
        * Adds attachments to an existing issue.
        * 
        * Links one or more files in Autodesk Docs (uploaded via the Data Management OSS API) to the specified issue.
        * 
        * Note that an issue can have up to 100 attachments. Files can include images, PDFs, or other supported formats.
        * 
        * For more information about uploading attachments, see the Upload Issue Attachment tutorial.
        * @summary Your POST endpoint
        * @param {string} projectId The ID of the project.
        * @param {AttachmentsPayload} attachmentsPayload 
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        async addAttachments(accessToken: string, projectId: string, attachmentsPayload: AttachmentsPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachments>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addAttachments(accessToken, projectId, attachmentsPayload, options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
        * Deletes a specific attachment from an issue in a project.
        * @summary Your DELETE endpoint
        * @param {string} projectId The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the ACC API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
        * @param {string} issueId The unique identifier of the issue. To find the ID, call GET issues.
        * @param {string} attachmentId The unique identifier of the attachment. To find the ID, call GET attachments.
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        async deleteAttachment(accessToken: string, projectId: string, issueId: string, attachmentId: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAttachment(accessToken, projectId, issueId, attachmentId, options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
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
        async getAttachments(accessToken: string, projectId: string, issueId: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachments>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAttachments(accessToken, projectId, issueId, options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * IssueAttachmentsApi - interface
 * @export
 * @interface IssueAttachmentsApi
 */
export interface IssueAttachmentsApiInterface {
    /**
     * Adds attachments to an existing issue.
 * 
 * Links one or more files in Autodesk Docs (uploaded via the Data Management OSS API) to the specified issue.
 * 
 * Note that an issue can have up to 100 attachments. Files can include images, PDFs, or other supported formats.
 * 
 * For more information about uploading attachments, see the Upload Issue Attachment tutorial.
     * @summary Your POST endpoint
     * @param {string} projectId The ID of the project.
     * @param {AttachmentsPayload} attachmentsPayload 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueAttachmentsApiInterface
     */
    addAttachments(accessToken: string, projectId: string, attachmentsPayload: AttachmentsPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Deletes a specific attachment from an issue in a project.
     * @summary Your DELETE endpoint
     * @param {string} projectId The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the ACC API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} issueId The unique identifier of the issue. To find the ID, call GET issues.
     * @param {string} attachmentId The unique identifier of the attachment. To find the ID, call GET attachments.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueAttachmentsApiInterface
     */
    deleteAttachment(accessToken: string, projectId: string, issueId: string, attachmentId: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves all attachments for a specific issue in a project.
 * 
 * For details about retrieving metadata for a specific attachment, see the Retrieve Issue Attachment tutorial.
 * 
 * For details about downloading an attachment, see the Download Issue Attachment tutorial.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the ACC API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} issueId The unique identifier of the issue. To find the ID, call GET issues.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueAttachmentsApiInterface
     */
    getAttachments(accessToken: string, projectId: string, issueId: string, options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * IssueAttachmentsApi - object-oriented interface
 * @export
 * @class IssueAttachmentsApi
 * @extends {BaseApi}
 */
export class IssueAttachmentsApi extends BaseApi implements IssueAttachmentsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Adds attachments to an existing issue.
 * 
 * Links one or more files in Autodesk Docs (uploaded via the Data Management OSS API) to the specified issue.
 * 
 * Note that an issue can have up to 100 attachments. Files can include images, PDFs, or other supported formats.
 * 
 * For more information about uploading attachments, see the Upload Issue Attachment tutorial.
     * @summary Your POST endpoint
     * @param {string} projectId The ID of the project.
     * @param {AttachmentsPayload} attachmentsPayload 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueAttachmentsApi
     */
    public async addAttachments(accessToken: string, projectId: string, attachmentsPayload: AttachmentsPayload, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into addAttachments ");
        try {
            const request = await IssueAttachmentsApiFp(this.sdkManager).addAttachments(accessToken, projectId, attachmentsPayload, options);
            const response = await request(this.axios);
            this.logger.logInfo(`addAttachments Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                const responseData = error.response.data;
                const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
                this.logger.logError(`addAttachments Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
                throw new ConstructionIssuesApiError(`addAttachments Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
            } else if (error.request) {
                this.logger.logError(`addAttachments Request failed with no response received: ${error.request}`);
                throw new ConstructionIssuesApiError(`addAttachments Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }

    /**
     * Deletes a specific attachment from an issue in a project.
     * @summary Your DELETE endpoint
     * @param {string} projectId The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the ACC API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} issueId The unique identifier of the issue. To find the ID, call GET issues.
     * @param {string} attachmentId The unique identifier of the attachment. To find the ID, call GET attachments.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueAttachmentsApi
     */
    public async deleteAttachment(accessToken: string, projectId: string, issueId: string, attachmentId: string, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into deleteAttachment ");
        try {
            const request = await IssueAttachmentsApiFp(this.sdkManager).deleteAttachment(accessToken, projectId, issueId, attachmentId, options);
            const response = await request(this.axios);
            this.logger.logInfo(`deleteAttachment Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                const responseData = error.response.data;
                const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
                this.logger.logError(`deleteAttachment Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
                throw new ConstructionIssuesApiError(`deleteAttachment Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
            } else if (error.request) {
                this.logger.logError(`deleteAttachment Request failed with no response received: ${error.request}`);
                throw new ConstructionIssuesApiError(`deleteAttachment Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }

    /**
     * Retrieves all attachments for a specific issue in a project.
 * 
 * For details about retrieving metadata for a specific attachment, see the Retrieve Issue Attachment tutorial.
 * 
 * For details about downloading an attachment, see the Download Issue Attachment tutorial.
     * @summary Your GET endpoint
     * @param {string} projectId The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the ACC API by removing the “b." prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7.
     * @param {string} issueId The unique identifier of the issue. To find the ID, call GET issues.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssueAttachmentsApi
     */
    public async getAttachments(accessToken: string, projectId: string, issueId: string, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into getAttachments ");
        try {
            const request = await IssueAttachmentsApiFp(this.sdkManager).getAttachments(accessToken, projectId, issueId, options);
            const response = await request(this.axios);
            this.logger.logInfo(`getAttachments Request completed successfully with status code: ${response.status}`);
            return new ApiResponse(response, response.data);
        } catch (error) {
            if (error.response) {
                const responseData = error.response.data;
                const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
                this.logger.logError(`getAttachments Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
                throw new ConstructionIssuesApiError(`getAttachments Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
            } else if (error.request) {
                this.logger.logError(`getAttachments Request failed with no response received: ${error.request}`);
                throw new ConstructionIssuesApiError(`getAttachments Request failed with no response received: ${error.request}`, error);
            }
            throw error;
        }
    }
}


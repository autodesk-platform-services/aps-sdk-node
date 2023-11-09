/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse} from "autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, DataManagementApiError } from '../base';
import { Command } from '../model';
import { CommandPayload } from '../model';
import { GetHubs401Response } from '../model';
/**
 * CommandsApi - axios parameter creator
 * @export
 */
export const CommandsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Commands enable you to perform general operations on multiple resources. For example, you can check whether a user has permission to delete specific versions, items, and folders. Commands are executed by sending requests in the body payload. See the [Commands](/en/docs/data/v2/overview/commands/) section for more information. 
         * @summary Create commands
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {CommandPayload} [commandPayload] The POST body is a JSON object with the following attributes.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCommand: async (accessToken: string, projectId: string, xUserId?: string, commandPayload?: CommandPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('postCommand', 'projectId', projectId)
            const localVarPath = `/data/v1/projects/{project_id}/commands`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (xUserId != null) {
                localVarHeaderParameter['x-user-id'] = String(xUserId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/DATA-MANAGEMENT/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(commandPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CommandsApi - functional programming interface
 * @export
 */
export const CommandsApiFp = function(sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = CommandsApiAxiosParamCreator(sdkManager.apsconfiguration)
    return {
        /**
         * Commands enable you to perform general operations on multiple resources. For example, you can check whether a user has permission to delete specific versions, items, and folders. Commands are executed by sending requests in the body payload. See the [Commands](/en/docs/data/v2/overview/commands/) section for more information. 
         * @summary Create commands
         * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
         * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
         * @param {CommandPayload} [commandPayload] The POST body is a JSON object with the following attributes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCommand(accessToken: string, projectId: string, xUserId?: string, commandPayload?: CommandPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Command>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCommand(accessToken, projectId, xUserId, commandPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * CommandsApi - interface
 * @export
 * @interface CommandsApi
 */
export interface CommandsApiInterface {
    /**
     * Commands enable you to perform general operations on multiple resources. For example, you can check whether a user has permission to delete specific versions, items, and folders. Commands are executed by sending requests in the body payload. See the [Commands](/en/docs/data/v2/overview/commands/) section for more information. 
     * @summary Create commands
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {CommandPayload} [commandPayload] The POST body is a JSON object with the following attributes.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApiInterface
     */
    postCommand(accessToken: string,projectId: string, xUserId?: string, commandPayload?: CommandPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * CommandsApi - object-oriented interface
 * @export
 * @class CommandsApi
 * @extends {BaseAPI}
 */
export class CommandsApi extends BaseAPI implements CommandsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Commands enable you to perform general operations on multiple resources. For example, you can check whether a user has permission to delete specific versions, items, and folders. Commands are executed by sending requests in the body payload. See the [Commands](/en/docs/data/v2/overview/commands/) section for more information. 
     * @summary Create commands
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {CommandPayload} [commandPayload] The POST body is a JSON object with the following attributes.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public async postCommand(accessToken: string, projectId: string, xUserId?: string, commandPayload?: CommandPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into postCommand ");
      try {
        const request =  await CommandsApiFp(this.sdkManager).postCommand(accessToken, projectId, xUserId, commandPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`postCommand Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`postCommand Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new DataManagementApiError(`postCommand Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`postCommand Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`postCommand Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}


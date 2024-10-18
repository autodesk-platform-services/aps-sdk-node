/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, DataManagementApiError } from '../base';
import { Command } from '../model';
import { CommandPayload } from '../model';
/**
 * CommandsApi - axios parameter creator
 * @export
 */
export const CommandsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.  For example, you can check whether a user has permission to delete a collection of versions, items, and folders.  The command as well as the input data for the command are specified using the ``data`` object of the request body.   For more information about commands see the [Commands](/en/docs/data/v2/overview/commands/) section in the Developer\'s Guide. 
         * @summary Execute a Command
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {CommandPayload} [commandPayload] The request body\&#39;s &#x60;&#x60;data&#x60;&#x60; object defines the command to execute and contains any required input data.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeCommand: async (accessToken: string, projectId: string, xUserId?: string, commandPayload?: CommandPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('executeCommand', 'projectId', projectId)
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
export const CommandsApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = CommandsApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.  For example, you can check whether a user has permission to delete a collection of versions, items, and folders.  The command as well as the input data for the command are specified using the ``data`` object of the request body.   For more information about commands see the [Commands](/en/docs/data/v2/overview/commands/) section in the Developer\'s Guide. 
         * @summary Execute a Command
         * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
         * @param {CommandPayload} [commandPayload] The request body\&#39;s &#x60;&#x60;data&#x60;&#x60; object defines the command to execute and contains any required input data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async executeCommand(accessToken: string, projectId: string, xUserId?: string, commandPayload?: CommandPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Command>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.executeCommand(accessToken, projectId, xUserId, commandPayload,  options);
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
     * Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.  For example, you can check whether a user has permission to delete a collection of versions, items, and folders.  The command as well as the input data for the command are specified using the ``data`` object of the request body.   For more information about commands see the [Commands](/en/docs/data/v2/overview/commands/) section in the Developer\'s Guide. 
     * @summary Execute a Command
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {CommandPayload} [commandPayload] The request body\&#39;s &#x60;&#x60;data&#x60;&#x60; object defines the command to execute and contains any required input data.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApiInterface
     */
    executeCommand(accessToken: string,projectId: string, xUserId?: string, commandPayload?: CommandPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * CommandsApi - object-oriented interface
 * @export
 * @class CommandsApi
 * @extends {BaseApi}
 */
export class CommandsApi extends BaseApi implements CommandsApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.  For example, you can check whether a user has permission to delete a collection of versions, items, and folders.  The command as well as the input data for the command are specified using the ``data`` object of the request body.   For more information about commands see the [Commands](/en/docs/data/v2/overview/commands/) section in the Developer\'s Guide. 
     * @summary Execute a Command
     * @param {string} projectId The unique identifier of a project.   For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with &#x60;&#x60;b.&#x60;&#x60;. For example, an Account ID of &#x60;&#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60;&#x60; translates to a hub ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;.  Similarly, to convert an ACC or BIM 360 project ID to a Data Management project ID prefix the ACC or BIM 360 project ID with &#x60;&#x60;b.&#x60;&#x60;. For example, a project ID of &#x60;&#x60;c8b0c73d-3ae9&#x60;&#x60; translates to a project ID of &#x60;&#x60;b.c8b0c73d-3ae9&#x60;&#x60;. 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
     * @param {CommandPayload} [commandPayload] The request body\&#39;s &#x60;&#x60;data&#x60;&#x60; object defines the command to execute and contains any required input data.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public async executeCommand(accessToken: string, projectId: string, xUserId?: string, commandPayload?: CommandPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into executeCommand ");
      try {
        const request =  await CommandsApiFp(this.sdkManager).executeCommand(accessToken, projectId, xUserId, commandPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`executeCommand Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`executeCommand Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new DataManagementApiError(`executeCommand Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`executeCommand Request failed with no response received: ${error.request}`);
            throw new DataManagementApiError(`executeCommand Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}


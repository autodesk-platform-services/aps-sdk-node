/* tslint:disable */
/* eslint-disable */

import { ApiResponse, ApsServiceRequestConfig, IApsConfiguration, SdkManager } from "@aps_sdk/autodesk-sdkmanager";
import type { AxiosInstance, AxiosPromise } from 'axios';
import { BaseApi, DataManagementApiError, RequestArgs, RequiredError } from '../base';
import { assertParamExists, createRequestFunction, serializeDataIfNeeded, setBearerAuthToObject, setSearchParams, toPathString } from '../common';
import { Command, CommandPayload } from '../model';
/**
 * CommandsApi - axios parameter creator
 * @export
 */
export const CommandsApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.
	 * 
	 * For example, you can check whether a user has permission to delete a collection of versions, items, and folders.
	 * 
	 * The command as well as the input data for the command are specified using the ``data`` object of the request body. 
	 * 
	 * For more information about commands see the [Commands](/en/docs/data/v2/overview/commands/) section in the Developer's Guide.
	 * 
         * @summary Execute a Command
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {CommandPayload} commandPayload 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
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
         * Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.
	 * 
	 * For example, you can check whether a user has permission to delete a collection of versions, items, and folders.
	 * 
	 * The command as well as the input data for the command are specified using the ``data`` object of the request body. 
	 * 
	 * For more information about commands see the [Commands](/en/docs/data/v2/overview/commands/) section in the Developer's Guide.
	 * 
         * @summary Execute a Command
         * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
         * @param {CommandPayload} commandPayload 
         * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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
     * Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.
	 * 
	 * For example, you can check whether a user has permission to delete a collection of versions, items, and folders.
	 * 
	 * The command as well as the input data for the command are specified using the ``data`` object of the request body. 
	 * 
	 * For more information about commands see the [Commands](/en/docs/data/v2/overview/commands/) section in the Developer's Guide.
	 * 
     * @summary Execute a Command
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {CommandPayload} commandPayload 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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
     * Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.
	 * 
	 * For example, you can check whether a user has permission to delete a collection of versions, items, and folders.
	 * 
	 * The command as well as the input data for the command are specified using the ``data`` object of the request body. 
	 * 
	 * For more information about commands see the [Commands](/en/docs/data/v2/overview/commands/) section in the Developer's Guide.
	 * 
     * @summary Execute a Command
     * @param {string} projectId The unique identifier of a project. 
	 * 
	 * For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with ``b.`` For example, a BIM 360 Account ID or Forma Hub ID of ``c8b0c73d-3ae9`` translates to a Data Management Hub ID of ``b.c8b0c73d-3ae9``.
	 * 
	 * Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with ``b.`` For example, a Project ID of ``c8b0c73d-3ae9`` becomes ``b.c8b0c73d-3ae9``.
	 * 
     * @param {CommandPayload} commandPayload 
     * @param {string} [xUserId] In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act only on behalf of the specified user.
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


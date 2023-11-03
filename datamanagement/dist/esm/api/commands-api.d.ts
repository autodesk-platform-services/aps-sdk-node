import type { AxiosPromise, AxiosInstance } from 'axios';
import { ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse } from "autodesk-sdkmanager";
import { RequestArgs, BaseAPI } from '../base';
import { Command } from '../model';
import { CommandPayload } from '../model';
/**
 * CommandsApi - axios parameter creator
 * @export
 */
export declare const CommandsApiAxiosParamCreator: (apsConfiguration?: IApsConfiguration) => {
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
    postCommand: (accessToken: string, projectId: string, xUserId?: string, commandPayload?: CommandPayload, options?: ApsServiceRequestConfig) => Promise<RequestArgs>;
};
/**
 * CommandsApi - functional programming interface
 * @export
 */
export declare const CommandsApiFp: (sdkManager?: SDKManager) => {
    /**
     * Commands enable you to perform general operations on multiple resources. For example, you can check whether a user has permission to delete specific versions, items, and folders. Commands are executed by sending requests in the body payload. See the [Commands](/en/docs/data/v2/overview/commands/) section for more information.
     * @summary Create commands
     * @param {string} projectId The unique identifier of a project. For BIM 360 Docs, the project ID in the Data Management API corresponds to the project ID in the BIM 360 API. To convert a project ID in the BIM 360 API into a project ID in the Data Management API you need to add a “b.\&quot; prefix. For example, a project ID of c8b0c73d-3ae9 translates to a project ID of b.c8b0c73d-3ae9.
     * @param {string} [xUserId] In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this header, the API call will be limited to act on behalf of only the user specified.
     * @param {CommandPayload} [commandPayload] The POST body is a JSON object with the following attributes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postCommand(accessToken: string, projectId: string, xUserId?: string, commandPayload?: CommandPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Command>>;
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
    postCommand(accessToken: string, projectId: string, xUserId?: string, commandPayload?: CommandPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}
/**
 * CommandsApi - object-oriented interface
 * @export
 * @class CommandsApi
 * @extends {BaseAPI}
 */
export declare class CommandsApi extends BaseAPI implements CommandsApiInterface {
    private logger;
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
    postCommand(accessToken: string, projectId: string, xUserId?: string, commandPayload?: CommandPayload, options?: ApsServiceRequestConfig): Promise<ApiResponse>;
}

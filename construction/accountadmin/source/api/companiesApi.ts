/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SdkManager, ApiResponse} from "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ConstructionAccountAdminApiError } from '../base';
import { CompaniesPage } from '../model';
import { Company } from '../model';
import { CompanyImport } from '../model';
import { CompanyOrFilters } from '../model';
import { CompanyPatchPayload } from '../model';
import { CompanyPayload } from '../model';
import { FilterCompanyFields } from '../model';
import { FilterCompanySort } from '../model';
import { FilterTextMatch } from '../model';
import { ProjectCompanies } from '../model';
import { Region } from '../model';
/**
 * CompaniesApi - axios parameter creator
 * @export
 */
export const CompaniesApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Create a new partner company. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Create a new partner company
         * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {CompanyPayload} [companyPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCompany: async (accessToken: string, accountId: string, region?: Region, companyPayload?: CompanyPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createCompany', 'accountId', accountId)
            const localVarPath = `/hq/v1/accounts/{account_id}/companies`
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(companyPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of companies in an account.
         * 
         * You can also use this endpoint to filter out the list of companies by setting the filter parameters.
         * 
         * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Get account companies
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. For a complete list of supported regions, see the Regions page.
         * @param {string} [userId] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
         * @param {string} [filterName] Filter companies by name. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
         * @param {string} [filterTrade] Filter companies by trade. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
         * @param {string} [filterErpId] Filter companies by ERP Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
         * @param {string} [filterTaxId] Filter companies by tax Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
         * @param {string} [filterUpdatedAt] Filter companies by updated at date range. The range must be specified with dates in an ISO-8601 format with time required. The start and end dates of the range should be separated by .. One of the dates in the range may be omitted. For example, to get everything on or before June 1, 2019 the range would be ..2019-06-01T23:59:59.999Z. To get everything after June 1, 2019 the range would be 2019-06-01T00:00:00.000Z... Max length: 100
         * @param {Array<CompanyOrFilters>} [orFilters] List of filtered fields to apply an “or” operator. Valid list of fields are erpId, name, taxId, trade, updatedAt.
         * @param {FilterTextMatch} [filterTextMatch] Defines how text-based filters should match results. Possible values: contains (default) – Returns results where the text appears anywhere in the field. startsWith – Matches only if the field starts with the given value. endsWith – Matches only if the field ends with the given value. equals – Matches only if the field is an exact match.
         * @param {Array<FilterCompanySort>} [sort] The list of fields to sort by. When multiple fields are listed the later property is used to sort the resources where the previous fields have the same value. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). If no direction is specified then asc is assumed. Valid fields for sorting are name, trade, erpId, taxId, status, createdAt, updatedAt, projectSize and userSize. Default sort is name.
         * @param {Array<FilterCompanyFields>} [fields] List of fields to return in the response. Defaults to all fields. Valid list of fields are accountId, name, trade, addresses, websiteUrl, description, erpId, taxId, imageUrl, status, createdAt, updatedAt, projectSize, userSize and originalName.
         * @param {number} [limit] The maximum number of records per request. Default: 20. Minimum: 1, Maximum: 200. If a value greater than 200 is provided, only 200 records are returned.
         * @param {number} [offset] The record number to start returning results from, used for pagination. For example, if limit=20 and offset=20, the request retrieves the second page of results.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompaniesWithPagination: async (accessToken: string, accountId: string, region?: Region, userId?: string, filterName?: string, filterTrade?: string, filterErpId?: string, filterTaxId?: string, filterUpdatedAt?: string, orFilters?: Array<CompanyOrFilters>, filterTextMatch?: FilterTextMatch, sort?: Array<FilterCompanySort>, fields?: Array<FilterCompanyFields>, limit?: number, offset?: number,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getCompaniesWithPagination', 'accountId', accountId)
            const localVarPath = `/construction/admin/v1/accounts/{accountId}/companies`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (filterName !== undefined) {
                localVarQueryParameter['filter[name]'] = filterName;
            }

            if (filterTrade !== undefined) {
                localVarQueryParameter['filter[trade]'] = filterTrade;
            }

            if (filterErpId !== undefined) {
                localVarQueryParameter['filter[erpId]'] = filterErpId;
            }

            if (filterTaxId !== undefined) {
                localVarQueryParameter['filter[taxId]'] = filterTaxId;
            }

            if (filterUpdatedAt !== undefined) {
                localVarQueryParameter['filter[updatedAt]'] = filterUpdatedAt;
            }

            if (orFilters) {
                localVarQueryParameter['orFilters'] = orFilters;
            }

            if (filterTextMatch !== undefined) {
                localVarQueryParameter['filterTextMatch'] = filterTextMatch;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (region != null) {
                localVarHeaderParameter['Region'] = typeof region === 'string'
                    ? region
                    : JSON.stringify(region);
            }

            if (userId != null) {
                localVarHeaderParameter['User-Id'] = String(userId);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Query all the partner companies in a specific BIM 360 account. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Get all companies in an account
         * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
         * @param {number} [offset] Offset of response array Default value: 0
         * @param {string} [sort] Comma-separated fields to sort by in ascending order  Prepending a field with - sorts in descending order Invalid fields and whitespaces will be ignored
         * @param {string} [field] Comma-separated fields to include in response  id will always be returned Invalid fields will be ignored
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompanies: async (accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getCompanies', 'accountId', accountId)
            const localVarPath = `/hq/v1/accounts/{account_id}/companies`
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (field !== undefined) {
                localVarQueryParameter['field'] = field;
            }

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Query the details of a specific partner company.
         * @summary Get details of a company
         * @param {string} companyId Company ID
         * @param {string} accountId The account ID of the company.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompany: async (accessToken: string, companyId: string, accountId: string, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getCompany', 'companyId', companyId)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getCompany', 'accountId', accountId)
            const localVarPath = `/hq/v1/accounts/{account_id}/companies/{company_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Query all the partner companies in a specific BIM 360 project. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Get all companies in a project
         * @param {string} accountId The account ID of the company.
         * @param {string} projectId The ID of the project. 
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
         * @param {number} [offset] Offset of response array Default value: 0
         * @param {string} [sort] Comma-separated fields to sort by in ascending order
         * @param {string} [field] Comma-separated fields to include in response
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectCompanies: async (accessToken: string, accountId: string, projectId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getProjectCompanies', 'accountId', accountId)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProjectCompanies', 'projectId', projectId)
            const localVarPath = `/hq/v1/accounts/{account_id}/projects/{project_id}/companies`
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (field !== undefined) {
                localVarQueryParameter['field'] = field;
            }

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Bulk import partner companies to the company directory in a specific BIM 360 account. (50 companies maximum can be included in each call.) Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Bulk import partner companies
         * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {Array<CompanyPayload>} [companyPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importCompanies: async (accessToken: string, accountId: string, region?: Region, companyPayload?: Array<CompanyPayload>,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('importCompanies', 'accountId', accountId)
            const localVarPath = `/hq/v1/accounts/{account_id}/companies/import`
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(companyPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update the properties of only the specified attributes of a specific partner company.
         * @summary Update the properties of company
         * @param {string} companyId Company ID
         * @param {string} accountId The account ID of the company.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {CompanyPatchPayload} [companyPatchPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCompanyDetails: async (accessToken: string, companyId: string, accountId: string, region?: Region, companyPatchPayload?: CompanyPatchPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('patchCompanyDetails', 'companyId', companyId)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('patchCompanyDetails', 'accountId', accountId)
            const localVarPath = `/hq/v1/accounts/{account_id}/companies/{company_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(companyPatchPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create or update a specific partner company’s image.
         * @summary Create or update a company’s image
         * @param {string} companyId Company ID
         * @param {string} accountId The account ID of the company.
         * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCompanyImage: async (accessToken: string, companyId: string, accountId: string, body: File, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('patchCompanyImage', 'companyId', companyId)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('patchCompanyImage', 'accountId', accountId)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('patchCompanyImage', 'body', body)
            const localVarPath = `/hq/v1/accounts/{account_id}/companies/{company_id}/image`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const formData = new FormData();

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


            if (body !== undefined) { 
                formData.set('chunk', body);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = formData;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search partner companies in a specific BIM 360 account by name. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Search companies in account by name
         * @param {string} accountId The account ID of the company.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {string} [name] Company name to match Max length: 255
         * @param {string} [trade] Company trade to match Max length: 255
         * @param {string} [operator] Boolean operator to use: OR (default) or AND
         * @param {boolean} [partial] If true (default), perform a fuzzy match
         * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
         * @param {number} [offset] Offset of response array Default value: 0
         * @param {string} [sort] Comma-separated fields to sort by in ascending order
         * @param {string} [field] Comma-separated fields to include in response
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchCompanies: async (accessToken: string, accountId: string, region?: Region, name?: string, trade?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('searchCompanies', 'accountId', accountId)
            const localVarPath = `/hq/v1/accounts/{account_id}/companies/search`
                .replace(`{${"account_id"}}`, encodeURIComponent(String(accountId)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (trade !== undefined) {
                localVarQueryParameter['trade'] = trade;
            }

            if (operator !== undefined) {
                localVarQueryParameter['operator'] = operator;
            }

            if (partial !== undefined) {
                localVarQueryParameter['partial'] = partial;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (field !== undefined) {
                localVarQueryParameter['field'] = field;
            }

            if (region != null) {
                    localVarHeaderParameter['Region'] = typeof region === 'string'
                            ? region
                            : JSON.stringify(region);
            }


    
            localVarHeaderParameter['User-Agent'] = 'APS SDK/CONSTRUCTION-ACCOUNT-ADMIN/TypeScript/1.0.0';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CompaniesApi - functional programming interface
 * @export
 */
export const CompaniesApiFp = function(sdkManager?: SdkManager) {
    const localVarAxiosParamCreator = CompaniesApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Create a new partner company. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Create a new partner company
         * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {CompanyPayload} [companyPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCompany(accessToken: string, accountId: string, region?: Region, companyPayload?: CompanyPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Company>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCompany(accessToken, accountId, region, companyPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a list of companies in an account.
         * 
         * You can also use this endpoint to filter out the list of companies by setting the filter parameters.
         * 
         * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Get account companies
         * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. For a complete list of supported regions, see the Regions page.
         * @param {string} [userId] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
         * @param {string} [filterName] Filter companies by name. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
         * @param {string} [filterTrade] Filter companies by trade. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
         * @param {string} [filterErpId] Filter companies by ERP Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
         * @param {string} [filterTaxId] Filter companies by tax Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
         * @param {string} [filterUpdatedAt] Filter companies by updated at date range. The range must be specified with dates in an ISO-8601 format with time required. The start and end dates of the range should be separated by .. One of the dates in the range may be omitted. For example, to get everything on or before June 1, 2019 the range would be ..2019-06-01T23:59:59.999Z. To get everything after June 1, 2019 the range would be 2019-06-01T00:00:00.000Z... Max length: 100
         * @param {Array<CompanyOrFilters>} [orFilters] List of filtered fields to apply an “or” operator. Valid list of fields are erpId, name, taxId, trade, updatedAt.
         * @param {FilterTextMatch} [filterTextMatch] Defines how text-based filters should match results. Possible values: contains (default) – Returns results where the text appears anywhere in the field. startsWith – Matches only if the field starts with the given value. endsWith – Matches only if the field ends with the given value. equals – Matches only if the field is an exact match.
         * @param {Array<FilterCompanySort>} [sort] The list of fields to sort by. When multiple fields are listed the later property is used to sort the resources where the previous fields have the same value. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). If no direction is specified then asc is assumed. Valid fields for sorting are name, trade, erpId, taxId, status, createdAt, updatedAt, projectSize and userSize. Default sort is name.
         * @param {Array<FilterCompanyFields>} [fields] List of fields to return in the response. Defaults to all fields. Valid list of fields are accountId, name, trade, addresses, websiteUrl, description, erpId, taxId, imageUrl, status, createdAt, updatedAt, projectSize, userSize and originalName.
         * @param {number} [limit] The maximum number of records per request. Default: 20. Minimum: 1, Maximum: 200. If a value greater than 200 is provided, only 200 records are returned.
         * @param {number} [offset] The record number to start returning results from, used for pagination. For example, if limit=20 and offset=20, the request retrieves the second page of results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompaniesWithPagination(accessToken: string, accountId: string, region?: Region, userId?: string, filterName?: string, filterTrade?: string, filterErpId?: string, filterTaxId?: string, filterUpdatedAt?: string, orFilters?: Array<CompanyOrFilters>, filterTextMatch?: FilterTextMatch, sort?: Array<FilterCompanySort>, fields?: Array<FilterCompanyFields>, limit?: number, offset?: number, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompaniesPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompaniesWithPagination(accessToken, accountId, region, userId, filterName, filterTrade, filterErpId, filterTaxId, filterUpdatedAt, orFilters, filterTextMatch, sort, fields, limit, offset,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Query all the partner companies in a specific BIM 360 account. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Get all companies in an account
         * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
         * @param {number} [offset] Offset of response array Default value: 0
         * @param {string} [sort] Comma-separated fields to sort by in ascending order  Prepending a field with - sorts in descending order Invalid fields and whitespaces will be ignored
         * @param {string} [field] Comma-separated fields to include in response  id will always be returned Invalid fields will be ignored
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompanies(accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Company>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompanies(accessToken, accountId, region, limit, offset, sort, field,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Query the details of a specific partner company.
         * @summary Get details of a company
         * @param {string} companyId Company ID
         * @param {string} accountId The account ID of the company.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompany(accessToken: string, companyId: string, accountId: string, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Company>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompany(accessToken, companyId, accountId, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Query all the partner companies in a specific BIM 360 project. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Get all companies in a project
         * @param {string} accountId The account ID of the company.
         * @param {string} projectId The ID of the project. 
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
         * @param {number} [offset] Offset of response array Default value: 0
         * @param {string} [sort] Comma-separated fields to sort by in ascending order
         * @param {string} [field] Comma-separated fields to include in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectCompanies(accessToken: string, accountId: string, projectId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProjectCompanies>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectCompanies(accessToken, accountId, projectId, region, limit, offset, sort, field,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Bulk import partner companies to the company directory in a specific BIM 360 account. (50 companies maximum can be included in each call.) Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Bulk import partner companies
         * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {Array<CompanyPayload>} [companyPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importCompanies(accessToken: string, accountId: string, region?: Region, companyPayload?: Array<CompanyPayload>, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyImport>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importCompanies(accessToken, accountId, region, companyPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Update the properties of only the specified attributes of a specific partner company.
         * @summary Update the properties of company
         * @param {string} companyId Company ID
         * @param {string} accountId The account ID of the company.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {CompanyPatchPayload} [companyPatchPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchCompanyDetails(accessToken: string, companyId: string, accountId: string, region?: Region, companyPatchPayload?: CompanyPatchPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Company>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchCompanyDetails(accessToken, companyId, accountId, region, companyPatchPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Create or update a specific partner company’s image.
         * @summary Create or update a company’s image
         * @param {string} companyId Company ID
         * @param {string} accountId The account ID of the company.
         * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchCompanyImage(accessToken: string, companyId: string, accountId: string, body: File, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Company>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchCompanyImage(accessToken, companyId, accountId, body, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Search partner companies in a specific BIM 360 account by name. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
         * @summary Search companies in account by name
         * @param {string} accountId The account ID of the company.
         * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
         * @param {string} [name] Company name to match Max length: 255
         * @param {string} [trade] Company trade to match Max length: 255
         * @param {string} [operator] Boolean operator to use: OR (default) or AND
         * @param {boolean} [partial] If true (default), perform a fuzzy match
         * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
         * @param {number} [offset] Offset of response array Default value: 0
         * @param {string} [sort] Comma-separated fields to sort by in ascending order
         * @param {string} [field] Comma-separated fields to include in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchCompanies(accessToken: string, accountId: string, region?: Region, name?: string, trade?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Company>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchCompanies(accessToken, accountId, region, name, trade, operator, partial, limit, offset, sort, field,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * CompaniesApi - interface
 * @export
 * @interface CompaniesApi
 */
export interface CompaniesApiInterface {
    /**
     * Create a new partner company. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Create a new partner company
     * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {CompanyPayload} [companyPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    createCompany(accessToken: string,accountId: string, region?: Region, companyPayload?: CompanyPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a list of companies in an account.
     * 
     * You can also use this endpoint to filter out the list of companies by setting the filter parameters.
     * 
     * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get account companies
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. For a complete list of supported regions, see the Regions page.
     * @param {string} [userId] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
     * @param {string} [filterName] Filter companies by name. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterTrade] Filter companies by trade. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterErpId] Filter companies by ERP Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterTaxId] Filter companies by tax Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterUpdatedAt] Filter companies by updated at date range. The range must be specified with dates in an ISO-8601 format with time required. The start and end dates of the range should be separated by .. One of the dates in the range may be omitted. For example, to get everything on or before June 1, 2019 the range would be ..2019-06-01T23:59:59.999Z. To get everything after June 1, 2019 the range would be 2019-06-01T00:00:00.000Z... Max length: 100
     * @param {Array<CompanyOrFilters>} [orFilters] List of filtered fields to apply an “or” operator. Valid list of fields are erpId, name, taxId, trade, updatedAt.
     * @param {FilterTextMatch} [filterTextMatch] Defines how text-based filters should match results. Possible values: contains (default) – Returns results where the text appears anywhere in the field. startsWith – Matches only if the field starts with the given value. endsWith – Matches only if the field ends with the given value. equals – Matches only if the field is an exact match.
     * @param {Array<FilterCompanySort>} [sort] The list of fields to sort by. When multiple fields are listed the later property is used to sort the resources where the previous fields have the same value. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). If no direction is specified then asc is assumed. Valid fields for sorting are name, trade, erpId, taxId, status, createdAt, updatedAt, projectSize and userSize. Default sort is name.
     * @param {Array<FilterCompanyFields>} [fields] List of fields to return in the response. Defaults to all fields. Valid list of fields are accountId, name, trade, addresses, websiteUrl, description, erpId, taxId, imageUrl, status, createdAt, updatedAt, projectSize, userSize and originalName.
     * @param {number} [limit] The maximum number of records per request. Default: 20. Minimum: 1, Maximum: 200. If a value greater than 200 is provided, only 200 records are returned.
     * @param {number} [offset] The record number to start returning results from, used for pagination. For example, if limit=20 and offset=20, the request retrieves the second page of results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getCompaniesWithPagination(accessToken: string,accountId: string, region?: Region, userId?: string, filterName?: string, filterTrade?: string, filterErpId?: string, filterTaxId?: string, filterUpdatedAt?: string, orFilters?: Array<CompanyOrFilters>, filterTextMatch?: FilterTextMatch, sort?: Array<FilterCompanySort>, fields?: Array<FilterCompanyFields>, limit?: number, offset?: number,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Query all the partner companies in a specific BIM 360 account. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get all companies in an account
     * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order  Prepending a field with - sorts in descending order Invalid fields and whitespaces will be ignored
     * @param {string} [field] Comma-separated fields to include in response  id will always be returned Invalid fields will be ignored
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    getCompanies(accessToken: string,accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Query the details of a specific partner company.
     * @summary Get details of a company
     * @param {string} companyId Company ID
     * @param {string} accountId The account ID of the company.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    getCompany(accessToken: string,companyId: string, accountId: string, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Query all the partner companies in a specific BIM 360 project. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get all companies in a project
     * @param {string} accountId The account ID of the company.
     * @param {string} projectId The ID of the project. 
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    getProjectCompanies(accessToken: string,accountId: string, projectId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Bulk import partner companies to the company directory in a specific BIM 360 account. (50 companies maximum can be included in each call.) Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Bulk import partner companies
     * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {Array<CompanyPayload>} [companyPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    importCompanies(accessToken: string,accountId: string, region?: Region, companyPayload?: Array<CompanyPayload>,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Update the properties of only the specified attributes of a specific partner company.
     * @summary Update the properties of company
     * @param {string} companyId Company ID
     * @param {string} accountId The account ID of the company.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {CompanyPatchPayload} [companyPatchPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    patchCompanyDetails(accessToken: string,companyId: string, accountId: string, region?: Region, companyPatchPayload?: CompanyPatchPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Create or update a specific partner company’s image.
     * @summary Create or update a company’s image
     * @param {string} companyId Company ID
     * @param {string} accountId The account ID of the company.
     * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    patchCompanyImage(accessToken: string,companyId: string, accountId: string, body: File, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Search partner companies in a specific BIM 360 account by name. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Search companies in account by name
     * @param {string} accountId The account ID of the company.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {string} [name] Company name to match Max length: 255
     * @param {string} [trade] Company trade to match Max length: 255
     * @param {string} [operator] Boolean operator to use: OR (default) or AND
     * @param {boolean} [partial] If true (default), perform a fuzzy match
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    searchCompanies(accessToken: string,accountId: string, region?: Region, name?: string, trade?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * CompaniesApi - object-oriented interface
 * @export
 * @class CompaniesApi
 * @extends {BaseApi}
 */
export class CompaniesApi extends BaseApi implements CompaniesApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Create a new partner company. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Create a new partner company
     * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {CompanyPayload} [companyPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async createCompany(accessToken: string, accountId: string, region?: Region, companyPayload?: CompanyPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into createCompany ");
      try {
        const request =  await CompaniesApiFp(this.sdkManager).createCompany(accessToken, accountId, region, companyPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`createCompany Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`createCompany Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`createCompany Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`createCompany Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`createCompany Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a list of companies in an account.
     * 
     * You can also use this endpoint to filter out the list of companies by setting the filter parameters.
     * 
     * Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get account companies
     * @param {string} accountId The ID of the ACC account that contains the project being created or the projects being retrieved. This corresponds to the hub ID in the Data Management API. To convert a hub ID into an account ID, remove the “b." prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] Specifies the region where your request should be routed. If not set, the request is routed automatically, which may result in a slight increase in latency. Possible values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. For a complete list of supported regions, see the Regions page.
     * @param {string} [userId] The ID of a user on whose behalf your request is acting. Your app has access to all users specified by the administrator in the SaaS integrations UI. Provide this header value to identify the user to be affected by the request.  You can use either the user’s ACC ID (id), or their Autodesk ID (autodeskId).  Note that this header is required for Account Admin POST, PATCH, and DELETE endpoints if you want to use a 2-legged authentication context. This header is optional for Account Admin GET endpoints.
     * @param {string} [filterName] Filter companies by name. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterTrade] Filter companies by trade. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterErpId] Filter companies by ERP Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterTaxId] Filter companies by tax Id. Can be a partial match based on the value of filterTextMatch provided. Max length: 255
     * @param {string} [filterUpdatedAt] Filter companies by updated at date range. The range must be specified with dates in an ISO-8601 format with time required. The start and end dates of the range should be separated by .. One of the dates in the range may be omitted. For example, to get everything on or before June 1, 2019 the range would be ..2019-06-01T23:59:59.999Z. To get everything after June 1, 2019 the range would be 2019-06-01T00:00:00.000Z... Max length: 100
     * @param {Array<CompanyOrFilters>} [orFilters] List of filtered fields to apply an “or” operator. Valid list of fields are erpId, name, taxId, trade, updatedAt.
     * @param {FilterTextMatch} [filterTextMatch] Defines how text-based filters should match results. Possible values: contains (default) – Returns results where the text appears anywhere in the field. startsWith – Matches only if the field starts with the given value. endsWith – Matches only if the field ends with the given value. equals – Matches only if the field is an exact match.
     * @param {Array<FilterCompanySort>} [sort] The list of fields to sort by. When multiple fields are listed the later property is used to sort the resources where the previous fields have the same value. Each property can be followed by a direction modifier of either asc (ascending) or desc (descending). If no direction is specified then asc is assumed. Valid fields for sorting are name, trade, erpId, taxId, status, createdAt, updatedAt, projectSize and userSize. Default sort is name.
     * @param {Array<FilterCompanyFields>} [fields] List of fields to return in the response. Defaults to all fields. Valid list of fields are accountId, name, trade, addresses, websiteUrl, description, erpId, taxId, imageUrl, status, createdAt, updatedAt, projectSize, userSize and originalName.
     * @param {number} [limit] The maximum number of records per request. Default: 20. Minimum: 1, Maximum: 200. If a value greater than 200 is provided, only 200 records are returned.
     * @param {number} [offset] The record number to start returning results from, used for pagination. For example, if limit=20 and offset=20, the request retrieves the second page of results.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async getCompaniesWithPagination(accessToken: string, accountId: string, region?: Region, userId?: string, filterName?: string, filterTrade?: string, filterErpId?: string, filterTaxId?: string, filterUpdatedAt?: string, orFilters?: Array<CompanyOrFilters>, filterTextMatch?: FilterTextMatch, sort?: Array<FilterCompanySort>, fields?: Array<FilterCompanyFields>, limit?: number, offset?: number, options?: ApsServiceRequestConfig) {
        this.logger.logInfo("Entered into getCompaniesWithPagination ");
        try {
          const request =  await CompaniesApiFp(this.sdkManager).getCompaniesWithPagination(accessToken, accountId, region, userId, filterName, filterTrade, filterErpId, filterTaxId, filterUpdatedAt, orFilters, filterTextMatch, sort, fields, limit, offset,  options);
          const response = await request(this.axios);
          this.logger.logInfo(`getCompaniesWithPagination Request completed successfully with status code: ${response.status}`);
          return new ApiResponse(response,response.data);
        } catch (error) {
          if (error.response) {
              const responseData = error.response.data;
              const errorMessage = responseData.developerMessage || responseData.reason || responseData.message || error.message;
              this.logger.logError(`getCompaniesWithPagination Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
              throw new ConstructionAccountAdminApiError(`getCompaniesWithPagination Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
          } else if (error.request) {
              this.logger.logError(`getCompaniesWithPagination Request failed with no response received: ${error.request}`);
              throw new ConstructionAccountAdminApiError(`getCompaniesWithPagination Request failed with no response received: ${error.request}`, error);
          }
          throw error;
        }
      }

    /**
     * Query all the partner companies in a specific BIM 360 account. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get all companies in an account
     * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order  Prepending a field with - sorts in descending order Invalid fields and whitespaces will be ignored
     * @param {string} [field] Comma-separated fields to include in response  id will always be returned Invalid fields will be ignored
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async getCompanies(accessToken: string, accountId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getCompanies ");
      try {
        const request =  await CompaniesApiFp(this.sdkManager).getCompanies(accessToken, accountId, region, limit, offset, sort, field,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getCompanies Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getCompanies Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getCompanies Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getCompanies Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getCompanies Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Query the details of a specific partner company.
     * @summary Get details of a company
     * @param {string} companyId Company ID
     * @param {string} accountId The account ID of the company.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async getCompany(accessToken: string, companyId: string, accountId: string, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getCompany ");
      try {
        const request =  await CompaniesApiFp(this.sdkManager).getCompany(accessToken, companyId, accountId, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getCompany Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getCompany Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getCompany Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getCompany Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getCompany Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Query all the partner companies in a specific BIM 360 project. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Get all companies in a project
     * @param {string} accountId The account ID of the company.
     * @param {string} projectId The ID of the project. 
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async getProjectCompanies(accessToken: string, accountId: string, projectId: string, region?: Region, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getProjectCompanies ");
      try {
        const request =  await CompaniesApiFp(this.sdkManager).getProjectCompanies(accessToken, accountId, projectId, region, limit, offset, sort, field,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getProjectCompanies Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`getProjectCompanies Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`getProjectCompanies Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`getProjectCompanies Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`getProjectCompanies Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Bulk import partner companies to the company directory in a specific BIM 360 account. (50 companies maximum can be included in each call.) Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Bulk import partner companies
     * @param {string} accountId The account ID of the company. This corresponds to hub ID in the Data Management API. To convert a hub ID into an account ID you need to remove the “b.” prefix. For example, a hub ID of b.c8b0c73d-3ae9 translates to an account ID of c8b0c73d-3ae9.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {Array<CompanyPayload>} [companyPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async importCompanies(accessToken: string, accountId: string, region?: Region, companyPayload?: Array<CompanyPayload>, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into importCompanies ");
      try {
        const request =  await CompaniesApiFp(this.sdkManager).importCompanies(accessToken, accountId, region, companyPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`importCompanies Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`importCompanies Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`importCompanies Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`importCompanies Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`importCompanies Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Update the properties of only the specified attributes of a specific partner company.
     * @summary Update the properties of company
     * @param {string} companyId Company ID
     * @param {string} accountId The account ID of the company.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {CompanyPatchPayload} [companyPatchPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async patchCompanyDetails(accessToken: string, companyId: string, accountId: string, region?: Region, companyPatchPayload?: CompanyPatchPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into patchCompanyDetails ");
      try {
        const request =  await CompaniesApiFp(this.sdkManager).patchCompanyDetails(accessToken, companyId, accountId, region, companyPatchPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`patchCompanyDetails Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`patchCompanyDetails Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`patchCompanyDetails Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`patchCompanyDetails Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`patchCompanyDetails Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Create or update a specific partner company’s image.
     * @summary Create or update a company’s image
     * @param {string} companyId Company ID
     * @param {string} accountId The account ID of the company.
     * @param {File} body The file to be uploaded as HTTP multipart (chunk) data. Supported MIME types are image/png, image/jpeg, image/jpg, image/bmp, and image/gif.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async patchCompanyImage(accessToken: string, companyId: string, accountId: string, body: File, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into patchCompanyImage ");
      try {
        const request =  await CompaniesApiFp(this.sdkManager).patchCompanyImage(accessToken, companyId, accountId, body, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`patchCompanyImage Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`patchCompanyImage Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`patchCompanyImage Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`patchCompanyImage Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`patchCompanyImage Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Search partner companies in a specific BIM 360 account by name. Note that this endpoint is compatible with both BIM 360 and Autodesk Construction Cloud (ACC) projects.
     * @summary Search companies in account by name
     * @param {string} accountId The account ID of the company.
     * @param {Region} [region] The geographic area where the data is stored. Acceptable values: US, EMEA, AUS, CAN, DEU, IND, JPN, GBR. By default, it is set to US.
     * @param {string} [name] Company name to match Max length: 255
     * @param {string} [trade] Company trade to match Max length: 255
     * @param {string} [operator] Boolean operator to use: OR (default) or AND
     * @param {boolean} [partial] If true (default), perform a fuzzy match
     * @param {number} [limit] Response array’s size Default value: 10 Max limit: 100
     * @param {number} [offset] Offset of response array Default value: 0
     * @param {string} [sort] Comma-separated fields to sort by in ascending order
     * @param {string} [field] Comma-separated fields to include in response
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public async searchCompanies(accessToken: string, accountId: string, region?: Region, name?: string, trade?: string, operator?: string, partial?: boolean, limit?: number, offset?: number, sort?: string, field?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into searchCompanies ");
      try {
        const request =  await CompaniesApiFp(this.sdkManager).searchCompanies(accessToken, accountId, region, name, trade, operator, partial, limit, offset, sort, field,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`searchCompanies Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            const errorMessage = JSON.stringify(error.response.data);
            this.logger.logError(`searchCompanies Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${errorMessage}`);
            throw new ConstructionAccountAdminApiError(`searchCompanies Request failed with status : ${error.response.status} and error message: ${errorMessage}`, error);
        } else if (error.request) {
            this.logger.logError(`searchCompanies Request failed with no response received: ${error.request}`);
            throw new ConstructionAccountAdminApiError(`searchCompanies Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

